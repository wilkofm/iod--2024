const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  postId: { type: Number, trim: true, required: true },
  userId: { type: Number, trim: true, required: true },
  title: { type: String, trim: true, required: true },
  description: { type: String },
  image: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("post", userSchema);
