import { DataTypes, Model } from "sequelize";

export default class Blog extends Model {
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
          allowNull: false,
        },
        title: {
          type: DataTypes.STRING,
        },
        content: {
          type: DataTypes.STRING,
        },
 
        createdAt: {
          type: DataTypes.DATE,
        },
        updatedAt: {
          type: DataTypes.DATE,
        },
      },
      {
        tableName: "blog",
        modelName: "blog",
        timestamps: true,
        sequelize,
        ...opts,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "userId", as: "user" });
    this.hasMany(models.BlogImage, {
      foreignKey: "blogId",
      as: "blogImage",
    });
   
  }
}
