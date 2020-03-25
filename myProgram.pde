float a=0; 
int cwidth[]={220,520,290,780,930,1030, 650};
int cheight[]={180,255,580,270,600,250,700};
int owidth[]={100,770,410,400,550,840, 510,1150,930,750};
int oheight[]={600,670,90,300,400,400,700,550,450,390};
int cnt = 0;
int loopcnt = 0;
int textnum = 0;
float rSize[] = {250,400,100,160,180,400,300};
String bigText[][]=
{{"不正なビジネスが流行する（＋）","不正なビジネスを取り締まる（ー）"},
{"市場の失敗（ー）","市場の自浄効果（＋）"},
{"短期的な感染対策をとる（＋）","感染が沈静化する（ー）"},
{"政府や外国の引き締め（＋）","政府や外国の緩和（ー）"},
{"予防習慣が定着する（＋）","予防習慣が定着する（＋）"},
{"身の回りの生活が変わる（＋）","身の回りの生活が安定する（ー）"},
{"支出を減らす（＋）","支出が戻る（ー）"},
{},
};
String smallText[][]=
{{"ネットで\n転売する", "株価下落を\n狙った空売り", "過剰購入\n買い占め", "認可外の\n医療品の流通"},
{"安心が\n伝播する", "医療品・人員の\n追加補給", "医療格差を\n解消する", "医療サービスの\n増強・進歩"},
{"氾濫した情報で\n混乱する", "自己判断での\n医療行為", "情報を集める", "外出・人との\n接触を避ける"},
{"パンデミックを\n宣言する", "国民の行動を\n統制する", "医療援助", "検疫を\n強化する"},
{"リモートワークが\n浸透する", "清潔さへの\n関心の高まり", "万一に備え\n貯蓄する", "キャッシュレス\neコマースでの\n物資補給"},
{"新しい法律へ\n対応する", "製品の機能\nパッケージの変更", "生産・流通\nプロセスの変更", "清潔なイメージ\nPR・CSR戦略"},
{"旅行・出張を\nキャンセルする", "収入の減少を\n想定する", "集会参加を\nキャンセルする", "ポートフォリオを\n変更する"},
{"事象I", "事象J", "事象K", "事象L"},
};
String otherText[][]=
{{"フェイクニュース\nの横行","0"},
{"平均消費性向の\n低下・停滞","0"},
{"株価の暴落","0"},
{"社会保障費の\n増大","0"},
{"医師不足\n医療崩壊","0"},
{"経済圏の\nブロック化","0"},
{"ひきこもり","0"},
{"行き過ぎた\n清潔観・差別","0"},
{"デジタル化\nによる失業","0"},
{"首脳レベルの\n利権と癒着","0"},
{},
};

Maru[] maruhairetu;
ArrayList<PG> pgl = new ArrayList<PG>();

void setup(){
  PFont font = createFont("NotoSansCJKjp-Regular",50);
  textFont (font);
  size(1280,1000);
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
    
//軸
stroke(250,250,250,50);
strokeWeight(0.1);
line(0,height/2, width,height/2);
line(width/2,0, width/2,height);
fill(250,250,250,50);
textSize(15);
textAlign(CENTER);
text("一時的", 45,height/2+7.5);
text("継続的", width-45,height/2+7.5);
text("個人", width/2,height-30);
text("社会", width/2,30);

  //Other Circle
  for(int i=0; i<owidth.length;i++){
    if(otherText[i][1]=="0"){
      fill(125 - 125*cos(radians(cnt)),125 - 125*cos(radians(cnt)),125 - 125*cos(radians(cnt)));
        OtherCircle(i);
      if(cos(radians(cnt)) == -1&&loopcnt%3==1){
        otherText[8][1] = "1";
      }
      if(cos(radians(cnt)) == -1&&loopcnt%3==2){
        otherText[1][1] = "1";
        otherText[5][1] = "1";
        otherText[7][1] = "1";
      }
    }else if(int(otherText[i][1])==1){
      if(cos(radians(cnt))>-0.99){
        fill(125 - 125*cos(radians(cnt)),125 - 125*cos(radians(cnt)),125 - 125*cos(radians(cnt)));
        OtherCircle(i);
      }else{
        fill(250,250,250);
        OtherCircle(i);
        otherText[i][1]="2";
      }
    }else if(int(otherText[i][1])==2){
    fill(250,250,250);
        OtherCircle(i);
        if(cos(radians(cnt)) == -1&&loopcnt%3==0){
        otherText[i][1]="0";
      }
      }
  }
    
    for (int i = pgl.size() - 1; i >= 0; i--) {
    PG pg = pgl.get(i);
    if (pg.dead) {
      pgl.remove(i);
    } else {
      pg.draw();
    }
  }
    
//Collision
   for(int i=0; i<cwidth.length;i++){
     for(int ii=0; ii<cwidth.length;ii++){
         if(dist(cwidth[i]+rSize[i]/3,cheight[i]+rSize[i]/3,cwidth[ii]+rSize[ii]/3,cheight[ii]-rSize[ii]/3)<80){
           pgl.add(new PG((cwidth[i]+rSize[i]/3+cwidth[ii]+rSize[ii]/3)/2, (cheight[i]+rSize[i]/3+cheight[ii]-rSize[ii]/3)/2, 10, 3));
        }
        if(dist(cwidth[i]+rSize[i]/3,cheight[i]+rSize[i]/3,cwidth[ii]-rSize[ii]/3,cheight[ii]-rSize[ii]/3)<80){
          pgl.add(new PG((cwidth[i]+rSize[i]/3+cwidth[ii]-rSize[ii]/3)/2, (cheight[i]+rSize[i]/3+cheight[ii]-rSize[ii]/3)/2, 10, 3));
        }
        if(dist(cwidth[i]+rSize[i]/3,cheight[i]+rSize[i]/3,cwidth[ii]-rSize[ii]/3,cheight[ii]+rSize[ii]/3)<80){
          pgl.add(new PG((cwidth[i]+rSize[i]/3+cwidth[ii]-rSize[ii]/3)/2, (cheight[i]+rSize[i]/3+cheight[ii]+rSize[ii]/3)/2, 10, 3));
        }
        if(dist(cwidth[i]+rSize[i]/3,cheight[i]-rSize[i]/3,cwidth[ii]+rSize[ii]/3,cheight[ii]+rSize[ii]/3)<80){
          pgl.add(new PG((cwidth[i]+rSize[i]/3+cwidth[ii]-rSize[ii]/3)/2, (cheight[i]-rSize[i]/3+cheight[ii]+rSize[ii]/3)/2, 10, 3));
        }
        if(dist(cwidth[i]+rSize[i]/3,cheight[i]-rSize[i]/3,cwidth[ii]-rSize[ii]/3,cheight[ii]-rSize[ii]/3)<80){
          pgl.add(new PG((cwidth[i]+rSize[i]/3+cwidth[ii]-rSize[ii]/3)/2, (cheight[i]-rSize[i]/3+cheight[ii]-rSize[ii]/3)/2, 10, 3));
        }
        if(dist(cwidth[i]+rSize[i]/3,cheight[i]-rSize[i]/3,cwidth[ii]-rSize[ii]/3,cheight[ii]+rSize[ii]/3)<80){
          pgl.add(new PG((cwidth[i]+rSize[i]/3+cwidth[ii]-rSize[ii]/3)/2, (cheight[i]-rSize[i]/3+cheight[ii]+rSize[ii]/3)/2, 10, 3));
        }
        if(dist(cwidth[i]-rSize[i]/3,cheight[i]-rSize[i]/3,cwidth[ii]+rSize[ii]/3,cheight[ii]+rSize[ii]/3)<80){
          pgl.add(new PG((cwidth[i]-rSize[i]/3+cwidth[ii]+rSize[ii]/3)/2, (cheight[i]-rSize[i]/3+cheight[ii]+rSize[ii]/3)/2, 10, 3));
        }
        if(dist(cwidth[i]-rSize[i]/3,cheight[i]-rSize[i]/3,cwidth[ii]+rSize[ii]/3,cheight[ii]-rSize[ii]/3)<80){
          pgl.add(new PG((cwidth[i]-rSize[i]/3+cwidth[ii]+rSize[ii]/3)/2, (cheight[i]-rSize[i]/3+cheight[ii]-rSize[ii]/3)/2, 10, 3));
        }
        if(dist(cwidth[i]-rSize[i]/3,cheight[i]-rSize[i]/3,cwidth[ii]-rSize[ii]/3,cheight[ii]+rSize[ii]/3)<80){
          pgl.add(new PG((cwidth[i]-rSize[i]/3+cwidth[ii]-rSize[ii]/3)/2, (cheight[i]-rSize[i]/3+cheight[ii]+rSize[ii]/3)/2, 10, 3));
        }
        if(dist(cwidth[i]-rSize[i]/3,cheight[i]+rSize[i]/3,cwidth[ii]+rSize[ii]/3,cheight[ii]+rSize[ii]/3)<80){
          pgl.add(new PG((cwidth[i]-rSize[i]/3+cwidth[ii]+rSize[ii]/3)/2, (cheight[i]+rSize[i]/3+cheight[ii]+rSize[ii]/3)/2, 10, 3));
        }
        if(dist(cwidth[i]-rSize[i]/3,cheight[i]+rSize[i]/3,cwidth[ii]+rSize[ii]/3,cheight[ii]-rSize[ii]/3)<80){
          pgl.add(new PG((cwidth[i]-rSize[i]/3+cwidth[ii]+rSize[ii]/3)/2, (cheight[i]+rSize[i]/3+cheight[ii]-rSize[ii]/3)/2, 10, 3));
        }
        if(dist(cwidth[i]-rSize[i]/3,cheight[i]+rSize[i]/3,cwidth[ii]-rSize[ii]/3,cheight[ii]-rSize[ii]/3)<80){
          pgl.add(new PG((cwidth[i]-rSize[i]/3+cwidth[ii]-rSize[ii]/3)/2, (cheight[i]+rSize[i]/3+cheight[ii]-rSize[ii]/3)/2, 10, 3));
        }
     } 
   }
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
    //Small Circle
    SmallCircle(i);
  //Big Circle
    BigCircle(i);
  }
  
  cnt++;
  if (1000 * sin(radians(cnt)) > 0) {
    //smaller
    rSize[0] += 0.7;
    rSize[1] -= 0.6;
    rSize[2] += 3;
    rSize[3] += 0.2;
    rSize[4] += 0.7;
    rSize[5] -= 0.5;
    rSize[6] += 0.4;
    textnum = 0;

  } else {
    //bigger
    rSize[0] -= 0.7;
    rSize[1] += 0.6;
    rSize[2] -= 3;
    rSize[3] -= 0.2;
    //rSize[4] -= 0.7;
    rSize[5] += 0.5;
    rSize[6] -= 0.4;
    textnum = 1;

  }
  if(rSize[4]>500){
  rSize[4]=180;
}
if(-1 == cos(radians(cnt)) ){
  loopcnt++;
}
}
 
void BigCircle(int i){
  stroke(250,250,250);
  strokeWeight(0.1);
  noFill();
  ellipse(cwidth[i], cheight[i],rSize[i],rSize[i]);
  fill(255);
  textSize(16);
  textAlign(CENTER);
  text(bigText[i][textnum], cwidth[i], cheight[i]);
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
  text(smallText[i][0], cwidth[i]-rSize[i]/3, cheight[i]-rSize[i]/3);
  text(smallText[i][1], cwidth[i]+rSize[i]/3, cheight[i]-rSize[i]/3);
  text(smallText[i][2], cwidth[i]-rSize[i]/3, cheight[i]+rSize[i]/3);
  text(smallText[i][3], cwidth[i]+rSize[i]/3, cheight[i]+rSize[i]/3);
}

void OtherCircle(int i){
  stroke(0, 0, 0);
  strokeWeight(0);
  ellipse(owidth[i], oheight[i], 80, 80);
  fill(0,0,0);
  textSize(10);
  textAlign(CENTER);
  text(otherText[i][0], owidth[i], oheight[i]);

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
          fill(color(100+ rSize[i]/3, 255-rSize[i]/3 ,  0 ));  
          a+=x/100000;
          ellipse(cwidth[i]+rSize[i]*cos(a)/2, cheight[i]+rSize[i]*sin(a)/2,3,3);
        }
    //}
  }
}

class PG {
  ArrayList<P> pl;
  int num;
  int r;
  boolean dead;
  
  public PG(float x, float y, int num, int r) {
    pl = new ArrayList<P>();
    this.num = num;
    this.r = r;
    for (int i = 0; i < num; i++) {
      float xx = x + random(-r, r);
      float yy = y + random(-r, r);
      pl.add(new P(xx, yy, r, atan2(yy-y, xx-x), random(0.3, 3))); //3は初速の上限
    }
  }

  void draw() {
    for (int i = pl.size() - 1; i >= 0; i--) {
      P p = pl.get(i);
      p.update();
      if (p.dead) {
        pl.remove(i);
        if (pl.size() == 0) dead = true;
      } else {
        p.draw();
      }
    }
  }

  class P {
    float x, y;
    float r;
    float th;
    float sp;
    boolean dead = false;
    
    public P(float x, float y, float r, float th, float sp) {
      this.x = x;
      this.y = y;
      this.r = r;
      this.th = th; //0 - TWO_PI
      this.sp = sp;
    }
    
    void update() {
      if (dead) return;
      x += sp * cos(th);
      y += sp * sin(th);
      sp *= 0.99; //0.99を変えると減速速度が速くなる
      if (x < 0 || x > width) dead = true;
      if (y < 0 || y > height) dead = true;
      if (sp < 1) dead = true;
    }
    
    void draw() {
      noStroke();
      fill(255, sp * 255 * random(0, 1)); //randomは明滅するため
      //      ellipse(x, y, r, r);
      rect(x, y, r, r);
    }
  }
}
