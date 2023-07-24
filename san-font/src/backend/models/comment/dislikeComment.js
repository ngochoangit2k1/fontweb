import { DataTypes, Model } from "sequelize";
import { GLOBAL_STATUS } from "../../constants/common.constant.js";

export default class DislikeComment extends Model {
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

        createdAt: {
          type: DataTypes.DATE,
        },
        updatedAt: {
          type: DataTypes.DATE,
        },
      },
      {
        tableName: "dislike",
        modelName: "dislike",
        timestamps: true,
        sequelize,
        ...opts,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Product, { foreignKey: "productId", as: "product" });
    this.belongsTo(models.User, { foreignKey: "userId", as: "user" });
  }
}
