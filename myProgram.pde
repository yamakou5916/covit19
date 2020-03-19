float a=0; 
Maru[] maruhairetu;//Maruクラスの配列を作っています。

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
  fill(color(0, 0, 0), 64);
  rect(0,0,width,height);
  fill(color(255, 204, 0), 64);
  ellipse(250,250,30,30);
  
  stroke(250,250,250);
  strokeWeight(0.3);
  noFill();
  ellipse(250,250,300,300);
  
  noStroke();
  //ellipse(mouseX,mouseY,30,30);
  for(Maru maru:maruhairetu){
    maru.draw();
  }
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
      ellipse(250+x*cos(a),250+x*sin(a),5,5);
      //ellipse(mouseX+x*cos(a),mouseY+x*sin(a),5,5);
    }
  }
}
