import { DataTypes, Model } from "sequelize";
import { GLOBAL_STATUS } from "../../constants/common.constant.js";

export default class CommentProduct extends Model {
  static init(sequelize, opts) {
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        productId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        parent_slug: {
          type: DataTypes.STRING,
        },
        parent_slug: {
          type: DataTypes.STRING,
        },
        full_slug: {
          type: DataTypes.STRING,
        },
        comment: {
          type: DataTypes.TEXT,
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
        tableName: "comment_product",
        modelName: "commentProduct",
        timestamps: true,
        sequelize,
        ...opts,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Product, { foreignKey: "productId", as: "product" });
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
