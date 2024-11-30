const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class Post extends Model {}

Post.init(
  {
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      required: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      unique: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      unique: true,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "posts", // uselowercase plural format timestamps: true, freezeTableName: true,
  }
);

module.exports = Post;
