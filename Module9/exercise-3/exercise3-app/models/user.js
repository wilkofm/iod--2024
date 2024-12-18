const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class User extends Model {}

User.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      required: true,
      unique: true,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "users", // uselowercase plural format timestamps: true, freezeTableName: true,
  }
);

module.exports = User;
