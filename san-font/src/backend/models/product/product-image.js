import { DataTypes, Model } from "sequelize";

export default class ProductImage extends Model {
  static init(sequelize, opts) {
    return super.init(
      {
        id: {
          type: DataTypes.STRING,
          primaryKey: true,
        },
        productId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        image: {
          type: DataTypes.TEXT,
        },

        createdAt: {
          type: DataTypes.DATE,
        },
        updatedAt: {
          type: DataTypes.DATE,
        },
      },
      {
        tableName: "product_image",
        modelName: "productImage",
        timestamps: true,
        sequelize,
        ...opts,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Product, { foreignKey: "productId", as: "product" });

  }
}
