import { DataTypes, Model } from "sequelize";

export default class BlogImage extends Model {
  static init(sequelize, opts) {
    return super.init(
      {
        id: {
          type: DataTypes.STRING,
          primaryKey: true,
        },
        blogId: {
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
        tableName: "blog_image",
        modelName: "blogImage",
        timestamps: true,
        sequelize,
        ...opts,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Blog, { foreignKey: "blogId", as: "blog" });
  
  }
}
