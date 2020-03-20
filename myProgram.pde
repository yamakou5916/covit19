float a=0; 
int cwidth[]={220,520,270,780,750};
int cheight[]={180,255,580,150,600};
int cnt = 0;
float rSize[] = {300,300,300,200,180};
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
//BackGround
    noStroke();
    fill(color(0, 0, 0), 32);
    rect(0,0,width,height);

//line
  stroke(250,250,250);
  strokeWeight(0.1);
  line(cwidth[0]+rSize[0]/3, cheight[0]+rSize[0]/3, cwidth[1]-rSize[1]/3, cheight[1]-rSize[1]/3);
  line(cwidth[0]-rSize[0]/3, cheight[0]+rSize[0]/3, cwidth[2]-rSize[2]/3, cheight[2]-rSize[2]/3);
  line(cwidth[1]+rSize[1]/3, cheight[1]-rSize[1]/3, cwidth[3]-rSize[3]/3, cheight[3]-rSize[3]/3);
    
  for(int i=0; i<cwidth.length;i++){    
  
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
    text("DDDD", cwidth[3], cheight[3]);
    text("EEEE", cwidth[4], cheight[4]);
    
  //Small Circle
    SmallCircle(i);
    text("AAAA", cwidth[0]-rSize[0]/3, cheight[0]-rSize[0]/3);
    text("AAAA", cwidth[0]+rSize[0]/3, cheight[0]-rSize[0]/3);
    text("AAAA", cwidth[0]-rSize[0]/3, cheight[0]+rSize[0]/3);
    text("AAAA", cwidth[0]+rSize[0]/3, cheight[0]+rSize[0]/3);
    text("BBBB", cwidth[1]-rSize[1]/3, cheight[1]-rSize[1]/3);
    text("BBBB", cwidth[1]+rSize[1]/3, cheight[1]-rSize[1]/3);
    text("BBBB", cwidth[1]-rSize[1]/3, cheight[1]+rSize[1]/3);
    text("BBBB", cwidth[1]+rSize[1]/3, cheight[1]+rSize[1]/3);
    text("CCCC", cwidth[2]-rSize[2]/3, cheight[2]-rSize[2]/3);
    text("CCCC", cwidth[2]+rSize[2]/3, cheight[2]-rSize[2]/3);
    text("CCCC", cwidth[2]-rSize[2]/3, cheight[2]+rSize[2]/3);
    text("CCCC", cwidth[2]+rSize[2]/3, cheight[2]+rSize[2]/3);
    text("DDDD", cwidth[3]-rSize[3]/3, cheight[3]-rSize[3]/3);
    text("DDDD", cwidth[3]+rSize[3]/3, cheight[3]-rSize[3]/3);
    text("DDDD", cwidth[3]-rSize[3]/3, cheight[3]+rSize[3]/3);
    text("DDDD", cwidth[3]+rSize[3]/3, cheight[3]+rSize[3]/3);
    text("EEEE", cwidth[4]-rSize[4]/3, cheight[4]-rSize[4]/3);
    text("EEEE", cwidth[4]+rSize[4]/3, cheight[4]-rSize[4]/3);
    text("EEEE", cwidth[4]-rSize[4]/3, cheight[4]+rSize[4]/3);
    text("EEEE", cwidth[4]+rSize[4]/3, cheight[4]+rSize[4]/3);
  }
  
  cnt++;
  if (70 * sin(radians(cnt)) > 0) {
    //smaller
    rSize[0] -= 0.7;
    rSize[1] -= 0.6;
    rSize[2] += 1;
    rSize[3] += 0.2;
    rSize[4] += 0.7;

  } else {
    //bigger
    rSize[0] += 0.7;
    rSize[1] += 0.6;
    rSize[2] -= 1;
    rSize[3] -= 0.2;
    rSize[4] -= 0.7;
  }
  
}

void BigCircle(int i){
  stroke(250,250,250);
  strokeWeight(0.1);
  noFill();
  ellipse(cwidth[i], cheight[i],rSize[i],rSize[i]);
  fill(255);
  textSize(20);
  textAlign(CENTER);
}

void SmallCircle(int i){
  stroke(255, 204, 0);
  strokeWeight(3);
  fill(0, 0, 0);
  ellipse(cwidth[i]-rSize[i]/3, cheight[i]-rSize[i]/3, 80, 80);
  ellipse(cwidth[i]+rSize[i]/3, cheight[i]-rSize[i]/3, 80, 80);
  ellipse(cwidth[i]-rSize[i]/3, cheight[i]+rSize[i]/3, 80, 80);
  ellipse(cwidth[i]+rSize[i]/3, cheight[i]+rSize[i]/3, 80, 80);
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
      //if (mousePressed)
      //{
        
        for(int i=0; i<cwidth.length;i++){
          fill(color(255, 204, 0));  
          a+=x/100000;
          ellipse(cwidth[i]+x*cos(a), cheight[i]+x*sin(a),5,5);
        }
    //}
  }
}
