var socket;

function setup() {
  createCanvas(displayWidth, displayHeight);
  background(51);

  socket = io.connect("http://localhost:3000");
  socket.on("mouse", newDrawing);
}

function mouseDragged() {
  console.log("Sending: " + mouseX + "," + mouseY);
  var data = {
    x: mouseX,
    y: mouseY,
  };
  socket.emit("mouse", data);
  fill(255);
  noStroke();
  ellipse(mouseX, mouseY, 20, 20);
}

function newDrawing(data) {
  fill(62, 103, 206);
  noStroke();
  ellipse(data.x, data.y, 20, 20);
}
