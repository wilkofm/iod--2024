const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class Comment extends Model {}

Comment.init(
  {
    commentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      required: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      required: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      unique: true,
    },
    time: {
      type: DataTypes.DATE,
      allowNull: false,
      required: true,
      unique: true,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "comments", // uselowercase plural format timestamps: true, freezeTableName: true,
  }
);

module.exports = Comment;
