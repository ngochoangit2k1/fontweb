// import checkToken from '../../../backend/authentication/auth.authentication.js'
import pagingParse from '../../../backend/middleware/paging.middleware.js'
import db from '../../../backend/models/index.js'
import {
	GLOBAL_STATUS,
	GLOBAL_SWITCH,
} from '../../../backend/constants/common.constant.js'
const { Op } = db.Sequelize

export default async function handler(req, res) {
	pagingParse(req, res)
	// checkToken(req, res)

	if (req.method === 'GET') {
		const data = async () => {
			const query = req.query
			const { order, offset, limit } = req.paging

			console.log('query', limit)

			const {
				name,
				status,
				outstanding,
				originId,
				branchId,
				capacityId,
				colorId,
				discount,
				getMainImage,
				unitId,
				price,
				categoryId,
			} = query
			const conditions = {}

			status && (conditions.status = status)
			outstanding && (conditions.outstanding = outstanding)
			originId && (conditions.originId = originId)
			branchId && (conditions.branchId = branchId)
			colorId && (conditions.colorId = colorId)
			capacityId && (conditions.capacityId = capacityId)
			categoryId && (conditions.categoryId = categoryId)
			unitId && (conditions.unitId = unitId)
			price && (conditions.price = { [Op.lt]: price })
			name && (conditions.name = { [Op.like]: `%${name.trim()}%` })

			const products = await db.Product.findAndCountAll({
				where: conditions,
				include: [
					{
						model: db.ProductCategory,
						as: 'productCategory',
						where: { status: GLOBAL_STATUS.ACTIVE },
					},
					{
						model: db.ProductImage,
						as: 'productImage',
						separate: true,
						where: {
							isMain: getMainImage
								? GLOBAL_SWITCH.ON
								: [GLOBAL_SWITCH.ON, GLOBAL_SWITCH.OFF],
						},
					},
					{
						model: db.ProductInventory,
						as: 'productInventory',
						separate: true,
					},

					{
						model: db.Discount,
						as: 'discount',
						required: !!discount,
						where: { status: GLOBAL_STATUS.ACTIVE },
					},
					{ model: db.User, as: 'user' },
				],
				offset,
				limit,
				order,
			})

			return res.status(200).json(products)
		}

		return data()
	}
}
