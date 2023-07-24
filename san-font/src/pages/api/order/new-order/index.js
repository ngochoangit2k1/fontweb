import { newOrderValidator } from "../../../../backend/validator/order.validator";
import BigNumber from "bignumber.js";
import db from "../../../../backend/models/index.js";
import {
  COMMISSION_TYPE,
  GLOBAL_STATUS,
} from "../../../../backend/constants/common.constant";
import {
  ORDER_CODE,
  ORDER_STATUS,
} from "../../../../backend/models/order/order";
import { HTTP_ERROR, FIELD_ERROR } from "../../../../backend/errors/error";
import { getNextOrderCode } from "../../../../backend/utils/helper.util";

export default async function handle(req, res, next) {
  async function createOrderItem(product, orderId, userId, transaction) {
    console.log("product", product);
    const subProduct = await db.ProductDetail.findOne({
      where: {
        productId: product.product.id,
        unitId: product.unitId,
        // capacityId: product.capacityId,
      },
    });
    console.log("check", subProduct);
    // Search product is exist
    const productDB = await db.Product.findOne({
      where: { id: product.product.id, status: GLOBAL_STATUS.ACTIVE },
      include: [
        {
          model: db.ProductInventory,
          as: "productInventory",
          where: {
            subProductId: subProduct.id,
          },
        },
        {
          model: db.ProductCategory,
          as: "productCategory",
          where: { status: GLOBAL_STATUS.ACTIVE },
        },
      ],
    });
    console.log("firstxxxx", productDB.productInventory);
    if (!productDB) {
      res.status(HTTP_ERROR.BAD_REQUEST).json({
        name: "get_product",
        code: FIELD_ERROR.PRODUCT_NOT_FOUND,
        message: `Product not found`,
      });
    }

    if (
      productDB.productInventory.length === 0
      // ||
      // productDB.productInventory[0].quantity < product.quantity
    ) {
      res.status(HTTP_ERROR.BAD_REQUEST).json({
        name: "quantity_not_enough",
        code: FIELD_ERROR.QUANTITY_NOT_ENGOUGH,
        message: `Product ${productDB.name} quantity not enough`,
      });
      process.exit();
    }
    // Create order item
    await db.OrderItem.create(
      {
        orderId,
        userId,
        productId: product.product.id,
        subProductId: subProduct.id,
        quantity: product.quantity,
        price: product.price,
      },
      {
        transaction,
      }
    );
    // Decrease quantity of product
    await db.ProductInventory.decrement(
      {
        quantity: +product.quantity,
      },
      {
        where: { productId: product.product.id, subProductId: subProduct.id },
        transaction,
      }
    );
    return product.quantity * product.price;
  }
  if (req.method === "POST") {
    await newOrderValidator(req.body, res);
    const t = await db.sequelize.transaction();
    const createOrderForm = req.body;
    const GUEST = "GUEST";
    const USER = "USER";
    try {
      let commission = 0;
      let identification = GUEST;
      let totalBeforeFee = 0;
      const deliveryFee = createOrderForm.fee ? createOrderForm.fee : 0;

      const userInfo = await db.User.findOne({
        where: { id: createOrderForm.userId },
        // include: [
        //   {
        //     model: db.CommissionLevel,
        //     as: "commissionLevel",
        //     include: [
        //       {
        //         model: db.CommissionConfig,
        //         as: "commissionConfig",
        //         where: { type: COMMISSION_TYPE.AUTOMATION },
        //       },
        //     ],
        //   },
        // ],
      });

      // Create order detail
      const orderCode = await getNextOrderCode(db.Order);

      // Create payment detail
      const payment = await db.OrderPayment.create(
        {
          paymentMethod: createOrderForm.paymentMethod,
        },
        {
          transaction: t,
        }
      );

      const account = await db.User.findOne({
        where: {
          id: createOrderForm.userId,
        },
        attributes: { exclude: ["password"] },
        include: [
          {
            model: db.UserInformation,
            as: "userInformation",
          },
          {
            model: db.UserAddress,
            as: "userAddress",
          },
        ],
      });

      // Get total
      for (const product of createOrderForm.listProduct) {
        const totalPriceOfItem = product.quantity * product.price;
        totalBeforeFee += totalPriceOfItem;
      }

      if (userInfo?.commissionLevel) {
        commission =
          (totalBeforeFee *
            +userInfo.commissionLevel.commissionConfig?.percent) /
          100;
      }

      if (account) {
        identification = USER;
      }

      const order = await db.Order.create(
        {
          paymentId: payment.id,
          orderCode: `${ORDER_CODE}${orderCode}`,
          userId: createOrderForm.userId,
          identification,
          shipId: createOrderForm.deliveryMethod,
          fullName: createOrderForm.fullName,
          email: createOrderForm.email,
          telephone: createOrderForm.telephone,
          address: createOrderForm.address,
          cityCode: createOrderForm.cityCode,
          districtCode: createOrderForm.districtCode,
          wardCode: createOrderForm.wardCode,
          note: createOrderForm.note,
          referralCode: createOrderForm.referralCode,
          orderDate: new Date(),
          commission: commission > 0 ? commission : null,
          totalBeforeFee,
          total: new BigNumber(totalBeforeFee)
            .plus(new BigNumber(deliveryFee))
            .minus(commission),
          orderStatus: ORDER_STATUS.WAITTING_CONFIRM,
        },
        {
          transaction: t,
        }
      );

      // Check create order detail
      if (!order) {
        res.status(HTTP_ERROR.BAD_REQUEST).json({
          name: "create_order",
          code: FIELD_ERROR.CREATE_ORDER_FAILED,
          message: `Order not success`,
        });
      }

      // Create order items
      for (const product of createOrderForm.listProduct) {
        await createOrderItem(product, order.id, createOrderForm.userId, t);
      }

      // Commit transaction
      await t.commit();
      console.log(payment);
      console.log("chessss", order);
      // sendMailComplete({
      //   toEmails: createOrderForm.email,
      //   orderCode: `${ORDER_CODE}${orderCode}`,
      //   subject: `[SHESHI] Đơn hàng của bạn : ${ORDER_CODE}${orderCode}`,
      //   total: numberWithCommas(
      //     new BigNumber(totalBeforeFee)
      //       .plus(new BigNumber(deliveryFee))
      //       .minus(commission)
      //   ),
      //   fullName: order.fullName,
      //   datetime: new Date().toLocaleString(),
      //   address: order.address,
      //   city: createOrderForm.districtAndCity.city,
      //   district: createOrderForm.districtAndCity.district,
      //   ward: createOrderForm.districtAndCity.ward,
      //   telephone: order.telephone,
      //   payment: PAYMENT_METHOD_MAP.find(
      //     (e) => e.value === +payment.paymentMethod
      //   ).label,
      //   unitTransit: DELIVERY_METHOD_MAP.find((e) => e.value === +order.shipId)
      //     .label,
      //   note: order.note,
      //   fee: numberWithCommas(deliveryFee),
      //   totalBeforeFee: numberWithCommas(totalBeforeFee),
      //   commission: commission > 0 ? numberWithCommas(commission) : 0,
      //   products: createOrderForm.listProduct,
      // });
      return res.status(200).json({
        order: order,
      });
    } catch (e) {
      console.log("ERROR_CREATE_ORDER: ", e);
      if (t) await t.rollback();
      throw e;
    }
  }
}
