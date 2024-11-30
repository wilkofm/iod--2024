const express = require("express");
const postRouter = express.Router();
const Controllers = require("../controllers");
// matches GET requests sent to /api/users

// (the prefix from server.js)
postRouter.get("/", (req, res) => {
  Controllers.postController.getPosts(res);
});

// matches POST requests sent to /api/users/create
postRouter.post("/create", (req, res) => {
  Controllers.postController.createPost(req.body, res);
});

// matches PUT requests to /api/users/123 (stores 123 in id param)
postRouter.put("/:id", (req, res) => {
  Controllers.postController.updatePost(req, res);
});

// matches DELETE requests to /api/users/123 (123 in id param)
postRouter.delete("/:id", (req, res) => {
  Controllers.postController.deletePost(req, res);
});

module.exports = postRouter;
