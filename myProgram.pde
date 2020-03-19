float a=0; 
int cwidth=250;
int cheight=250;
Maru[] maruhairetu;

void setup(){
  size(1200,800);
  noStroke();
  background(0);

  maruhairetu =new Maru[5];
  for(int i=0; i<maruhairetu.length;i++){
    Maru maru=new Maru(150+10*cos(random(100)),150+10*sin(random(600)));
    maruhairetu[i]=maru;
  }   
}

void draw(){
//Color Definition
  color c1 = color(55, 55, 55);
  color c2 = color(0, 0, 0);
  color c3 = color(255, 204, 0);
  color c4 = color(0, 0, 0); 
  
//BackGround
  fill(color(0, 0, 0), 64);
  rect(0,0,width,height);
  fill(color(255, 204, 0));

//flow
  noStroke();
  //ellipse(mouseX,mouseY,30,30);
  for(Maru maru:maruhairetu){
    maru.draw();
  }
  
//Big Circle
  fill(0, 0, 0);
  //for(float d = 200; d > 0; d -= 5){
  //    color c = lerpColor(c1, c2, d / 200.0);
  //    fill(c, 64);
  //    ellipse(width / 2, height / 2, d, d);
  //  }
      
  fill(255);
  textSize(20);
  textAlign(CENTER);
  text("AAAA", cwidth, cheight);
    
//Stroke Circle
  stroke(250,250,250);
  strokeWeight(0.1
  );
  noFill();
  ellipse(cwidth, cheight,300,300);
  
  
//Small Circle (Blue)
  stroke(255, 204, 0);
  strokeWeight(1.5);
  fill(0, 0, 0);
  ellipse(cwidth-100, cheight-100, 80, 80);
      
  fill(255, 204, 0);
  textSize(10);
  textAlign(CENTER);
  text("AAAA", cwidth-100, cheight-100);
  
//Small Circle (Yellow)
  stroke(255, 204, 0);
  strokeWeight(1.5);
  fill(0, 0, 0);
  ellipse(cwidth+100, cheight-100, 80, 80);
      
  fill(255, 204, 0);
  textSize(10);
  textAlign(CENTER);
  text("AAAA", cwidth+100, cheight-100);
  
//Small Circle (Lime)
  stroke(255, 204, 0);
  strokeWeight(1.5);
  fill(0, 0, 0);
  ellipse(cwidth-100, cheight+100, 80, 80);
  fill(255, 204, 0);
  textSize(10);
  textAlign(CENTER);
  text("AAAA", cwidth-100, cheight+100);
      
//Small Circle (Red)
  stroke(255, 204, 0);
  strokeWeight(1.5);
  fill(0, 0, 0);
  ellipse(cwidth+100, cheight+100, 80, 80);
  fill(255, 204, 0);
  textSize(10);
  textAlign(CENTER);
  text("AAAA", cwidth+100, cheight+100);
  
}

class Maru{
  float x,a;
  Maru(float x, float a){
    this.x=x;
    this.a=a;
  }
 
  void draw(){
      if (mousePressed)
      {
      fill(color(255, 204, 0));    
      a+=x/7000;
      ellipse(cwidth+x*cos(a), cheight+x*sin(a),5,5);
      //ellipse(mouseX+x*cos(a),mouseY+x*sin(a),5,5);
    }
  }
}
