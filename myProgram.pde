float a=0; 
int cwidth[]={220,520,270,780,750,1050};
int cheight[]={180,255,580,150,600,250};
int cnt = 0;
float rSize[] = {300,300,100,200,180,250};
Maru[] maruhairetu;

void setup(){
  PFont font = createFont("YuMin_36pKn-Medium",50);
  textFont (font);
  size(1200,800);
  noStroke();
  background(0);

  maruhairetu =new Maru[5];
  for(int i=0; i<maruhairetu.length;i++){
    Maru maru=new Maru(rSize[i],rSize[i]);
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
    
  OtherCircle();
    
    
  for(int i=0; i<cwidth.length;i++){    
  
  //flow
    noStroke();
    for(Maru maru:maruhairetu){
      maru.draw();
    }
      
  //Big Circle
    BigCircle(i);
    text("意識の変化", cwidth[0], cheight[0]);
    text("意識の変化", cwidth[1], cheight[1]);
    text("意識の変化", cwidth[2], cheight[2]);
    text("意識の変化", cwidth[3], cheight[3]);
    text("意識の変化", cwidth[4], cheight[4]);
    text("意識の変化", cwidth[5], cheight[5]);
    
  //Small Circle
    SmallCircle(i);
  }
  
  cnt++;
  if (1000 * sin(radians(cnt)) > 0) {
    //smaller
    rSize[0] -= 0.7;
    rSize[1] -= 0.6;
    rSize[2] += 3;
    rSize[3] += 0.2;
    rSize[4] += 0.7;
    rSize[5] += 0.2;

  } else {
    //bigger
    rSize[0] += 0.7;
    rSize[1] += 0.6;
    rSize[2] -= 3;
    rSize[3] -= 0.2;
    //rSize[4] -= 0.7;
    rSize[5] -= 0.2;

  }
  if(rSize[4]>500){rSize[4]=180;}
  
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
  fill(0, 0, 0);
  stroke(100+ rSize[i]/3, 255-rSize[i]/3 ,  0 );
  strokeWeight(3);
  ellipse(cwidth[i]-rSize[i]/3, cheight[i]-rSize[i]/3, 80, 80);
  ellipse(cwidth[i]+rSize[i]/3, cheight[i]-rSize[i]/3, 80, 80);
  ellipse(cwidth[i]-rSize[i]/3, cheight[i]+rSize[i]/3, 80, 80);
  ellipse(cwidth[i]+rSize[i]/3, cheight[i]+rSize[i]/3, 80, 80);
  fill(100+ rSize[i]/3, 255-rSize[i]/3 ,  0 );
  textSize(10);
  textAlign(CENTER);
  text("事象A", cwidth[i]-rSize[i]/3, cheight[i]-rSize[i]/3);
  text("事象A", cwidth[i]+rSize[i]/3, cheight[i]-rSize[i]/3);
  text("事象A", cwidth[i]-rSize[i]/3, cheight[i]+rSize[i]/3);
  text("事象A", cwidth[i]+rSize[i]/3, cheight[i]+rSize[i]/3);
}

void OtherCircle(){
  fill(0, 0, 0);
  stroke(250,250,250);
  strokeWeight(3);
  ellipse(350, 350, 80, 80);
  ellipse(550, 600, 80, 80);
  ellipse(800, 350, 80, 80);
  fill(250,250,250);
  textSize(10);
  textAlign(CENTER);
  text("社会課題", 350, 350);
  text("社会課題", 550, 600);
  text("社会課題", 800, 350);

}

class Maru{
  float x,a;
  Maru(float x, float a){
    this.x=x;
    this.a=a;
    print(x);
    print(a);
  }
 
  void draw(){
      //if (mousePressed)
      //{
        
        for(int i=0; i<cwidth.length;i++){
          fill(color(255, 204, 0));  
          a+=x/100000;
          ellipse(cwidth[i]+rSize[i]*cos(a)/2, cheight[i]+rSize[i]*sin(a)/2,5,5);
        }
    //}
  }
}
