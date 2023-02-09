import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get(`/`, (req, res) => {
  res.send("<h1>Olá mundo!</h1>");
});

server.listen(3000, () => console.log(`listening port 3000`));

io.on("connection", (socket) => {
  console.log("a user connected");
});

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
});
