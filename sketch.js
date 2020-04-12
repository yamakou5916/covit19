let fr;
// fr = 60;

let circle_dia = 0.5 * 0.67 * canvas_width;
let dot_num = 16;
let dot_length_rate = 0.1;
let noise_width = 0.001 * circle_dia;
let delta_noise = 0;
let noise_speed = 0.1;
let dot_length = Array(dot_num);
let delta_dot_length = Array(dot_num);
let noise_offs = Array(dot_num);
let i;
let x, y;

function setup() {
  // common
  canvas = createCanvas(canvas_width,canvas_height);
  canvas.parent("canvas_wrap");
  if(frameRate){
    frameRate(fr);
  }

  // begin from here
  background(0);
  noFill();
  stroke(243, 122, 159);
  strokeWeight(2);
  push();
  translate(0.5 * canvas_width, 0.5 * canvas_height);
  beginShape();
  for (i = 0; i < dot_num; i++){
    noise_offs[i] = random(10000);
    dot_length[i] = random(int(circle_dia * dot_length_rate)) - circle_dia * dot_length_rate;
    // delta_dot_length[i] = random(10) - 5;
    // delta_dot_length[i] = noise_width * (noise(noise_offs[i]) - 0.5);
    delta_dot_length[i] = map(noise(noise_offs[i]), 0, 1, -noise_width, noise_width);
    console.log(delta_dot_length[i]);
    x = (circle_dia + dot_length[i]) * cos(i * TWO_PI / dot_num);
    y = (circle_dia + dot_length[i]) * sin(i * TWO_PI / dot_num);
    curveVertex(x, y);
    console.log(x, y);
  }
  console.log(x, y);
  x = (circle_dia + dot_length[0]) * cos(0 * TWO_PI);
  y = (circle_dia + dot_length[0]) * sin(0 * TWO_PI);
  curveVertex(x, y);
  x = (circle_dia + dot_length[1]) * cos(1 * TWO_PI / dot_num);
  y = (circle_dia + dot_length[1]) * sin(1 * TWO_PI / dot_num);
  curveVertex(x, y);
  x = (circle_dia + dot_length[2]) * cos(2 * TWO_PI / dot_num);
  y = (circle_dia + dot_length[2]) * sin(2 * TWO_PI / dot_num);
  curveVertex(x, y);
  endShape();
  pop();
}


function draw() {

  background(0);
  noFill();
  stroke(243, 122, 159);
  strokeWeight(2);
  push();
  translate(0.5 * canvas_width, 0.5 * canvas_height);
  ellipse(0, 0, 2 * circle_dia, 2 * circle_dia);
  stroke(255, 255, 255);
  beginShape();
  for (i = 0; i < dot_num; i++){
    delta_dot_length[i] = map(noise(noise_offs[i] + delta_noise), 0, 1, -noise_width, noise_width);
    dot_length[i] += delta_dot_length[i];
    x = (circle_dia + dot_length[i]) * cos(i * TWO_PI / dot_num);
    y = (circle_dia + dot_length[i]) * sin(i * TWO_PI / dot_num);
    curveVertex(x, y);
    console.log(x, y);
  }
  console.log(x, y);
  x = (circle_dia + dot_length[0]) * cos(0 * TWO_PI);
  y = (circle_dia + dot_length[0]) * sin(0 * TWO_PI);
  curveVertex(x, y);
  x = (circle_dia + dot_length[1]) * cos(1 * TWO_PI / dot_num);
  y = (circle_dia + dot_length[1]) * sin(1 * TWO_PI / dot_num);
  curveVertex(x, y);
  x = (circle_dia + dot_length[2]) * cos(2 * TWO_PI / dot_num);
  y = (circle_dia + dot_length[2]) * sin(2 * TWO_PI / dot_num);
  curveVertex(x, y);
  endShape();
  pop();
  delta_noise += noise_speed;
}