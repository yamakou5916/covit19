float a=0; 
int cwidth[]={250,550,300};
int cheight[]={200,300,600};
int cnt = 0;
float rSize = 300;
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
  for(int i=0; i<cwidth.length;i++){
  //BackGround
    noStroke();
    fill(color(0, 0, 0), 64);
    rect(0,0,width,height);
    
  //line
  stroke(250,250,250);
  strokeWeight(0.1);
  line(cwidth[0]+rSize/3, cheight[0]+rSize/3, cwidth[1]-rSize/3, cheight[1]-rSize/3);
  line(cwidth[0]-rSize/3, cheight[0]+rSize/3, cwidth[2]-rSize/3, cheight[2]-rSize/3);
  
  //flow
    noStroke();
    for(Maru maru:maruhairetu){
      maru.draw();
    }
      
  //Big Circle
    BigCircle(i);
    text("AAAA", cwidth[0], cheight[0]);
    text("BBBB", cwidth[1], cheight[1]);
    text("CCCC", cwidth[2], cheight[2]);
    
  //Small Circle
    SmallCircle(i);
    text("AAAA", cwidth[0]-rSize/3, cheight[0]-rSize/3);
    text("AAAA", cwidth[0]+rSize/3, cheight[0]-rSize/3);
    text("AAAA", cwidth[0]-rSize/3, cheight[0]+rSize/3);
    text("AAAA", cwidth[0]+rSize/3, cheight[0]+rSize/3);
    text("BBBB", cwidth[1]-rSize/3, cheight[1]-rSize/3);
    text("BBBB", cwidth[1]+rSize/3, cheight[1]-rSize/3);
    text("BBBB", cwidth[1]-rSize/3, cheight[1]+rSize/3);
    text("BBBB", cwidth[1]+rSize/3, cheight[1]+rSize/3);
    text("CCCC", cwidth[2]-rSize/3, cheight[2]-rSize/3);
    text("CCCC", cwidth[2]+rSize/3, cheight[2]-rSize/3);
    text("CCCC", cwidth[2]-rSize/3, cheight[2]+rSize/3);
    text("CCCC", cwidth[2]+rSize/3, cheight[2]+rSize/3);
  }
  
  cnt++;
  if (70 * sin(radians(cnt)) > 0) {
    //smaller
    rSize -= 0.7;
  } else {
    //bigger
    rSize += 0.7;
  }
  
}

void BigCircle(int i){
  stroke(250,250,250);
  strokeWeight(0.1);
  noFill();
  ellipse(cwidth[i], cheight[i],rSize,rSize);
  fill(255);
  textSize(20);
  textAlign(CENTER);
}

void SmallCircle(int i){
  stroke(255, 204, 0);
  strokeWeight(1.5);
  fill(0, 0, 0);
  ellipse(cwidth[i]-rSize/3, cheight[i]-rSize/3, 80, 80);
  ellipse(cwidth[i]+rSize/3, cheight[i]-rSize/3, 80, 80);
  ellipse(cwidth[i]-rSize/3, cheight[i]+rSize/3, 80, 80);
  ellipse(cwidth[i]+rSize/3, cheight[i]+rSize/3, 80, 80);
  fill(255, 204, 0);
  textSize(10);
  textAlign(CENTER);
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
        
        for(int i=0; i<cwidth.length;i++){
          fill(color(255, 204, 0));    
          a+=x/10000;
          ellipse(cwidth[i]+x*cos(a), cheight[i]+x*sin(a),5,5);
        }
    }
  }
}
