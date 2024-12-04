const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer(app);
const io = new Server(server);
const onlineUsers = new Set();
const nicknames = new Map();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  io.emit("connection", "a user connected");

  socket.on("set nickname", (nickname) => {
    nicknames.set(socket.id, nickname);
    onlineUsers.add(nickname);

    io.emit("user connected", `${nickname} has joined the chat`);
    io.emit("update users", Array.from(onlineUsers));
  });

  socket.on("typing", () => {
    const nickname = nicknames.get(socket.id) || "Anonymous";
    socket.broadcast.emit("typing", nickname);
  });

  socket.on("stop typing", () => {
    socket.broadcast.emit("stop typing");
  });

  socket.on("chat message", (msg) => {
    const nickname = nicknames.get(socket.id) || "Anonymous";
    socket.broadcast.emit("chat message", `${nickname}: ${msg}`);
  });

  socket.on("disconnect", () => {
    const nickname = nicknames.get(socket.id) || "Anonymous";

    if (nickname) {
      onlineUsers.delete(nickname);
      nicknames.delete(socket.id);

      io.emit("user disconnected", `${nickname} has left the chat`);
      io.emit("update users", Array.from(onlineUsers));
    }

    console.log(`${nickname} disconnected`);
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
