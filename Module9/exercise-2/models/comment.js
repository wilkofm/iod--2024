const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  commentId: { type: Number, trim: true, required: true },
  postId: { type: Number, trim: true, required: true },
  userId: { type: Number, trim: true, required: true },
  description: { type: String, trim: true, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("comment", userSchema);