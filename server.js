var express = require("express");
var app = express();
var server = app.listen(3000);
app.use(express.static("public"));

var socket = require("socket.io");
var io = socket(server);

io.sockets.on("connection", newConnection);

function newConnection(socket) {
  console.log("New connection: " + socket.id);
  socket.on("mouse", mouseMsg);

  function mouseMsg(data) {
    console.log(data);
    socket.broadcast.emit("mouse", data);
    //To send the message to every client including the one that sent the message
    //io.sockets.emit("mouse", data);
  }
}

console.log("My socket server is running!");
