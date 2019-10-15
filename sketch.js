var canvas;
var sketchHeight = 500;

aniXSpeed = 0.5; //ping-pong speed X when clicked
aniYSpeed = 0.5; //ping-pong speed Y when clicked
moveYSpeed = 0.5; //ping-pong speed Y
moveXSpeed = 0.5; //ping-pong speed X

rSpeed = 0.2;
gSpeed = 0.2;
bSpeed = 0.2;

let change1 = 1; //modulator for Rgb
let change2 = 1; //modulator for rGb
let change3 = 1; //modulator for rgB

let moveX = 0; //x-axis movement variable
let moveY = 0; //y-axis movement variable

let aniX = 0; //x-axis variable when clicked
let aniY = 0; //y-axis variable when clicked

var xOff = 0;
var inc = 0.02;
var start = 0;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight - 62);
  canvas.position(0, 62);
  canvas.style("z-index", "0");

  change1 = random(0, 150); //modulator for RGB start point
  change2 = random(0, 150); //modulator for RGB start point
  change3 = random(0, 150); //modulator for RGB start point
}

function windowResized() { //resizes canvas with window
  resizeCanvas(windowWidth, windowHeight - 62);
}

function draw() {
  //background(150);

  let set = 0;

  var x = random(0, 200);

  change1 = change1 + rSpeed; //R modulation rate
  change2 = change2 + gSpeed; //G modulation rate
  change3 = change3 + bSpeed; //B modulation rate

  let r = (mouseX * mouseY) / 600 + change1 - 20;
  let g = mouseX / 18 + change2 - 20;
  let b = mouseY / 15 + change3 - 20;



  if (change1 < 0) {
    //r channel loop
    rSpeed = 0.2;
  }
  if (change1 > 200) {
    //r channel loop
    rSpeed = -0.2;
  }

  if (change2 < 0) {
    //g channel loop
    gSpeed = 0.2;
  }
  if (change2 > 250) {
    //g channel loop
    gSpeed = -0.2;
  }

  if (change3 < 0) {
    //b channel loop
    bSpeed = 0.2;
  }
  if (change3 > 250) {
    //b channel loop
    bSpeed = -0.2;
  }

  stroke(r, g, b);
  strokeWeight(mouseX / 20);

  if (aniX < -550) {
    //x movement loop when clicked
    aniXSpeed = -0.5;
  }
  if (aniX > 0) {
    //x movement loop when clicked
    aniXSpeed = 0.5;
  }
  if (aniY < -337) {
    //y movement loop when clicked
    aniYSpeed = -0.5;
  }
  if (aniY > 0) {
    //y movement loop when clicked
    aniYSpeed = 0.5;
  }

  if (moveX < -1470) {
    //x movement loop
    moveXSpeed = -0.5;
  }
  if (moveX > 0) {
    //x movement loop
    moveXSpeed = 0.5;
  }
  if (moveY < -3307) {
    //y movement loop
    moveYSpeed = -0.5;
  }
  if (moveY > 0) {
    //y movement loop
    moveYSpeed = 0.5;
  }

  aniY = aniY - aniYSpeed;
  aniX = aniX - aniXSpeed;

  moveX = moveX - moveXSpeed;
  moveY = moveY - moveYSpeed;

  if (mouseX < 300) {
    line(mouseY + set, aniY, aniX, mouseY);
    line(mouseY * 2 + set, aniY, aniX + set, mouseY * 1.1);
    line(mouseY * 4 + set, aniY, aniX + set, mouseY * 1.2);
    line(mouseY * 8 + set, aniY, aniX + set, mouseY * 1.3);
    line(mouseY * 16 + set, aniY, aniX + set, mouseY * 1.4);

    line(moveX + set, mouseY, mouseY + set, moveY);
    line(moveX + set, mouseY * 2, mouseY * 1.1 + set, moveY);
    line(moveX + set, mouseY * 4, mouseY * 1.21 + set, moveY);
    line(moveX + set, mouseY * 8, mouseY * 1.331 + set, moveY);
    line(moveX + set, mouseY * 16, mouseY * 1.4641 + set, moveY);
    line(moveX + set, mouseY * 32, mouseY * 1.75692 + set, moveY);
    line(moveX + set, mouseY * 64, mouseY * 2.108304 + set, moveY);
  } else {
    line(moveX + set, mouseY, mouseY + set, moveY);
    line(moveX + set, mouseY * 2, mouseY * 1.1 + set, moveY);
    line(moveX + set, mouseY * 4, mouseY * 1.21 + set, moveY);
    line(moveX + set, mouseY * 8, mouseY * 1.331 + set, moveY);
    line(moveX + set, mouseY * 16, mouseY * 1.4641 + set, moveY);
    line(moveX + set, mouseY * 32, mouseY * 1.75692 + set, moveY);
    line(moveX + set, mouseY * 64, mouseY * 2.108304 + set, moveY);
  }

  if (mouseX > 700 || mouseY < 200) {
    line(mouseY + set, aniY, aniX, mouseY);
    line(mouseY * 2 + set, aniY, aniX + set, 100 + mouseY * 1.1);
    line(mouseY * 4 + set, aniY, aniX + set, 100 + mouseY * 1.2);
    line(mouseY * 8 + set, aniY, aniX + set, 100 + mouseY * 1.3);
    line(mouseY * 16 + set, aniY, aniX + set, 100 + mouseY * 1.4);

    line(moveX + set, mouseY, mouseY + set, moveY);
    line(moveX + set, mouseY * 2, mouseY * 1.2 + set, moveY);
    line(moveX + set, mouseY * 4, mouseY * 1.728 + set, moveY);
    line(moveX + set, mouseY * 8, mouseY * 2.0736 + set, moveY);
    line(moveX + set, mouseY * 16, mouseY * 2.48832 + set, moveY);
  }
}
