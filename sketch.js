void setup(){
  size(500, 500);
  noFill();
  mouseMoved();
}

void draw(){
}


function mouseMoved(){
  background(255);
  beginShape();
  var angStep = map(mouseX, 0, width, 30, 1);
  var radiousWidth = map(mouseY, 0, height, 30, 120);
  var heads = new p5.Vector(3);
  for(var angle = 0, i = 0; angle < 360; angle += angStep){
    var radian = radians(angle);
    var radious = map(random(1), 0, 1, 150 - radiousWidth / 2, 150 + radiousWidth / 2);
    var x = 250 + radious * cos(radian);
    var y = 250 + radious * sin(radian);
    if(i == 0 || i == 1 || i == 2){
      heads[i] = new p5.Vector(x, y);
    }
    curveVertex(x, y);
    i++;
  }
  for(var i = 0; i < 3; i++){
    curveVertex(heads[i].x, heads[i].y);  
  }
  endShape();
}




















