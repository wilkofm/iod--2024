const express = require("express");
const commentRouter = express.Router();
const Controllers = require("../controllers");
// matches GET requests sent to /api/users

// (the prefix from server.js)
commentRouter.get("/", (req, res) => {
  Controllers.commentController.getComment(res);
});

// matches POST requests sent to /api/users/create
commentRouter.post("/create", (req, res) => {
  Controllers.commentController.createComment(req.body, res);
});

// matches PUT requests to /api/users/123 (stores 123 in id param)
commentRouter.put("/:id", (req, res) => {
  Controllers.commentController.updateComment(req, res);
});

// matches DELETE requests to /api/users/123 (123 in id param)
commentRouter.delete("/:id", (req, res) => {
  Controllers.commentController.deleteComment(req, res);
});

module.exports = commentRouter;
