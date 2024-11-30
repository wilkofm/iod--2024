"use strict";
const User = require("./user"); //require the model
const Post = require("./post"); //require the model
const Comment = require("./comment"); //require the model

async function init() {
  await User.sync();
  await Post.sync();
  await Comment.sync(); // sync the model
  // also sync any extra models here
}

init();

module.exports = {
  User,
  Post,
  Comment, // export the model
  // also export any extra models here
};
