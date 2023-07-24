import { DataTypes, Model } from "sequelize";
import { GLOBAL_STATUS } from "../../constants/common.constant.js";

export default class Product extends Model {
  static init(sequelize, opts) {
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        userId: {
          type: DataTypes.INTEGER,
        },
        categoryId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        discountId: {
          type: DataTypes.INTEGER,
        },
        link: {
          type: DataTypes.TEXT,
        },
        productSlug: {
          type: DataTypes.STRING,
          unique: true,
        },
        name: {
          type: DataTypes.STRING,
        },
        nameVi: {
          type: DataTypes.STRING,
        },
        author: {
          type: DataTypes.STRING,
        },

        description: {
          type: DataTypes.TEXT,
        },

        guide: {
          type: DataTypes.TEXT,
        },
        price: {
          type: DataTypes.DECIMAL,
        },
        vip: {
          type: DataTypes.ENUM(0, 1),
        },
        originId: {
          type: DataTypes.INTEGER,
        },
        expiry: {
          type: DataTypes.STRING,
        },

        status: {
          type: DataTypes.TINYINT(1),
          defaultValue: GLOBAL_STATUS.ACTIVE,
        },

        createdById: {
          type: DataTypes.INTEGER,
        },
        updatedById: {
          type: DataTypes.INTEGER,
        },
        createdAt: {
          type: DataTypes.DATE,
        },
        updatedAt: {
          type: DataTypes.DATE,
        },
      },
      {
        tableName: "product",
        modelName: "product",
        timestamps: true,
        sequelize,
        ...opts,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Discount, {
      foreignKey: "discountId",
      as: "discount",
    });
    this.belongsTo(models.ProductCategory, {
      foreignKey: "categoryId",
      as: "productCategory",
    });
    this.hasMany(models.ProductImage, {
      foreignKey: "productId",
      as: "productImage",
    });

    this.hasMany(models.ProductInventory, {
      foreignKey: "productId",
      as: "productInventory",
    });
    this.belongsTo(models.User, { foreignKey: "userId", as: "user" });
    this.belongsTo(models.User, {
      foreignKey: "createdById",
      as: "userCreate",
    });
    this.belongsTo(models.User, {
      foreignKey: "updatedById",
      as: "userUpdate",
    });
  }
}
