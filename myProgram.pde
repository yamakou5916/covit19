float a=0; 
int cwidth[]={240,830,440,560,830, 950,400,800};
int cheight[]={920,1255,180,1150,500,800,600,820};
int owidth[]={550,570,560,550,640,740, 260,850,1030,760};
int oheight[]={1070,670,1140,350,310,400,650,1350,1070,920};
int cnt = 0;
int loopcnt = 0;
int textnum = 0;
int frameCnt = 0;
int frameCntMax = 15 * 6;
PImage img;
float rSize0[] = {300,400,300,360,380,500,500,270};
float rSize[] = {300,400,300,360,380,500,500,270};
float radius  = 200;
//Maru[] maruhairetu;
//ArrayList<PG> pgl = new ArrayList<PG>();

String bigText[][]=
{{"ストレージの内容を変更する","ストレージの内容を変更する", "保有者"},
{"清潔感への配慮は当たり前に","清潔感への配慮は当たり前に", "企画・設計者"},
{"予防・一次対応への意識向上","予防・一次対応への意識向上", "病人"},
{"経済的ストレスを負担に","経済的ストレスが負担に", "投資家"},
{"人との不要な接触が不快に","人との不要な接触が不快に", "販売者"},
{"プロセス内の無駄・リスクに気づく","プロセス内の無駄・リスクに気づく", "生産者"},
{"コト・トキ消費からウチ消費へ","コト・トキ消費からウチ消費へ", "消費者"},
{"物の届き方が変わる","物の届き方が変わる", "流通ライン"},
};
String smallText0[][]=
{{"不要な物\nを安全に\n処理する", "万一に備え\n貯蓄する", "過剰購入\n大量廃棄", "買い占め"},
{"清潔なイメージ\nPR・CSR戦略", "製品の機能\nパッケージの変更", "風評被害\nを受ける", "感染状況を\n発表する"},
{"感染症指定\n医療機関へ", "医療品・人員が\n足りない", "病院内での\n二次感染を恐れる", "医療格差が\n拡大する"},
{"パンデミック\n宣言を受ける", "株を\n空売りする", "株を\n買い戻す", "経済政策が\n実行される"},
{"オペレーション\nの無人化", "顧客接点の\n消毒・洗浄", "突発的な\n払い戻し\nへの対応", "営業情報\nの即時更新"},
{"生産・流通\nプロセス\nの省人化", "需要の波に\n対応する", "収入の減少\nを想定", "失業が増加"},
{"", "集客型\nビジネス\nの減退", "家庭内消費\n時間の増加", "インバウンド\n需要の崩壊"},
{"買い占め\n転売による\n供給難", "デリバリー\nサービスが\n多用される", "商品を\n清潔に保つ\nパッケージ", "医療品\n日用品\nの配給"},
};

String smallText1[][]=
{{"廃棄物処理\nゴミの出し方", "備蓄場所の\nスペース増加", "バラ売り\n量り売りを中止", "医療品の\n流通量の拡充"},
{"新しい法律\nへ対応する", "風評被害\nが起きる", "リスク対応を\n説明する", "リコールへ対応する"},
{"外出し、人と\n会話する", "自宅で病状の\n独自判断する", "氾濫した情報で\n混乱する", "予防用品の購入\nを見送る"},
{"危機管理\n評価基準\nの整備", "医療機関の\nパニック", "医療品・人員が\n足りない", "医療格差が\n拡大する"},
{"キャッシュレス\n化が進む", "つばや咳が\n気になる", "購入前契約\nの徹底", "SNSを用いた\n顧客接点"},
{"リモートワークが\n浸透する", "工場生産物\nの多角化 ", "質素な生活が\n美徳になる", "必需品以外の\nものの生産停止"},
{"", "遠隔×ライブ\nエンタテイメント", "生活全般での\nDIY化が進む", "地産地消の\n意識が育つ"},
{"独自の\n流通ライン\nを整備", "デリバリー\nプラットフォーム", "エコ×使い捨て\n再利用可能性", "国内で流通を\n完結する"},
};
String otherText[][]=
{{"フェイクニュース\nの横行","0"},
{"地産地消の\n意識が育つ","0"},
{"株価の暴落","0"},
{"遠隔×ライブ\nエンタテイメント","0"},
{"医師不足\n医療崩壊","0"},
{"経済圏の\nブロック化","0"},
{"生活全般での\nDIY化が進む","0"},
{"行き過ぎた\n清潔観・差別","0"},
{"デジタル化\nによる失業","0"},
{"パーソナル\nスペースと\n心理的距離の拡大","0"},
{},
};

void setup(){
  PFont font = createFont("NotoSansCJKjp-Regular",50);
  textFont (font);
  size(1280,2000);
  noStroke();
  background(0);
  smooth();
  /*
  maruhairetu =new Maru[5];
  for(int i=0; i<maruhairetu.length;i++){
    Maru maru=new Maru(rSize[i],rSize[i]);
    maruhairetu[i]=maru;
  }   */
  img = loadImage("user.png");
}

void draw(){
  //背景
  noStroke();
  fill(color(0, 0, 0), 32);
  rect(0,0,width,height);
    
    //軸
    stroke(250,250,250,100);
    strokeWeight(0.1);
    line(width/2,0, width/2,height);
    fill(250,250,250,50);
    textSize(15);
    textAlign(CENTER);
    text("生産者行動", width/2+200,30);
    text("消費者行動", width/2-200,30);

    //円
  for(int i=0; i<cwidth.length;i++){
    fill(255);
    image(img, cwidth[i]-10, cheight[i]-30, 20, 25);
    textSize(12);
    textAlign(CENTER);
    text(bigText[i][textnum], cwidth[i], cheight[i]+20);
    textSize(10);
    textAlign(CENTER);
    text(bigText[i][2], cwidth[i], cheight[i]-40);
    
    wave(i);
    fill(125 - 125*cos(radians(frameCnt)),125 - 125*cos(radians(frameCnt)),125 - 125*cos(radians(frameCnt)));
    OtherCircle(i);
    //BigCircle(i);
    
  }
      if(-1 == cos(radians(frameCnt)) ){
      loopcnt++;
    }
}
 
 void wave(int i){
    frameCnt += 1;
    if(frameCnt  ==frameCntMax){
      frameCnt  = 0;
    }
     // for (int frameCnt = 0; frameCnt <= frameCntMax; ++frameCnt) {
    float frameRatio = easing(map(frameCnt, 0, frameCntMax, 1.0, 0.0));
    for (float dotCnt = 0.0; dotCnt < 1.0; dotCnt += 0.0001) {
      float radian = TWO_PI * dotCnt;
      float shapeAx = cos(radian);
      float shapeAy = sin(radian);
      float shapeBx = cos(radian) * pow(cos(radian * 3.0), 2);
      float shapeBy = sin(radian) * pow(sin(radian * 3.0), 2);
      float applyX   = shapeAx * frameRatio + shapeBx * (1.0 - frameRatio);
      float applyY   = shapeAy * frameRatio + shapeBy * (1.0 - frameRatio);
      float applyHue = 360 * frameRatio + 240 * (1.0 - frameRatio);
      noStroke();
      fill(applyHue, 40.0, 80.0,100);
      ellipse(applyX * radius+cwidth[i], applyY * radius+cheight[i], 1.0, 1.0);
      SmallCircle(i);

    }      
 }
 
void BigCircle(int i){
   if(textnum==1){
     fill(0, 80, 100+rSize[i]/3 , -50 * sin(radians(cnt)));
     noStroke();
   }else{
     noFill();
     stroke(250,250,250);
     strokeWeight(0.1);
   }
  ellipse(cwidth[i], cheight[i],rSize[i],rSize[i]);
  fill(255);
  image(img, cwidth[i]-10, cheight[i]-30, 20, 25);
  textSize(12);
  textAlign(CENTER);
  text(bigText[i][textnum], cwidth[i], cheight[i]+20);
  textSize(10);
  textAlign(CENTER);
  text(bigText[i][2], cwidth[i], cheight[i]-40);
}

void SmallCircle(int i){
  if (1000 * sin(radians(frameCnt)) > 0) {
      rSize[i] -= 0.1;
      textnum = 0;
    } else {
      rSize[i] += 0.1;
      textnum = 1;
    }
  if(textnum==1){
    fill(0, 0, 0);
    stroke(250, 250, 250);
    strokeWeight(3);
    ellipse(cwidth[i]-rSize[i]/3, cheight[i]-rSize[i]/3, 80, 80);
    ellipse(cwidth[i]+rSize[i]/3, cheight[i]-rSize[i]/3, 80, 80);
    ellipse(cwidth[i]-rSize[i]/3, cheight[i]+rSize[i]/3, 80, 80);
    ellipse(cwidth[i]+rSize[i]/3, cheight[i]+rSize[i]/3, 80, 80);
    //fill(100+ rSize[i]/3, 255-rSize[i]/3 ,  0 );
    fill(250, 250, 250);
    textSize(10);
    textAlign(CENTER,CENTER);
    text(smallText0[i][0], cwidth[i]-rSize[i]/3, cheight[i]-rSize[i]/3);
    text(smallText0[i][1], cwidth[i]+rSize[i]/3, cheight[i]-rSize[i]/3);
    text(smallText0[i][2], cwidth[i]-rSize[i]/3, cheight[i]+rSize[i]/3);
    text(smallText0[i][3], cwidth[i]+rSize[i]/3, cheight[i]+rSize[i]/3);
  }else{
    fill(0, 0, 0,30);
    stroke(250, 250, 250,30);
    strokeWeight(3);
    ellipse(cwidth[i]-rSize[i]/3, cheight[i]-rSize[i]/3, 80, 80);
    ellipse(cwidth[i]+rSize[i]/3, cheight[i]-rSize[i]/3, 80, 80);
    ellipse(cwidth[i]-rSize[i]/3, cheight[i]+rSize[i]/3, 80, 80);
    ellipse(cwidth[i]+rSize[i]/3, cheight[i]+rSize[i]/3, 80, 80);
    fill(250, 250, 250,30);
    textSize(10);
    textAlign(CENTER,CENTER);
    text(smallText0[i][0], cwidth[i]-rSize[i]/3, cheight[i]-rSize[i]/3);
    text(smallText0[i][1], cwidth[i]+rSize[i]/3, cheight[i]-rSize[i]/3);
    text(smallText0[i][2], cwidth[i]-rSize[i]/3, cheight[i]+rSize[i]/3);
    text(smallText0[i][3], cwidth[i]+rSize[i]/3, cheight[i]+rSize[i]/3);
  }
}

void OtherCircle(int i){
  stroke(0, 0, 0);
  strokeWeight(0);
  ellipse(cwidth[i]-rSize0[i]/3, cheight[i]-rSize0[i]/3, 80, 80);
  ellipse(cwidth[i]+rSize0[i]/3, cheight[i]-rSize0[i]/3, 80, 80);
  ellipse(cwidth[i]-rSize0[i]/3, cheight[i]+rSize0[i]/3, 80, 80);
  ellipse(cwidth[i]+rSize0[i]/3, cheight[i]+rSize0[i]/3, 80, 80);
  fill(0,0,0);
  textSize(10);
  textAlign(CENTER,CENTER);
  text(smallText1[i][0], cwidth[i]-rSize0[i]/3, cheight[i]-rSize0[i]/3);
  text(smallText1[i][1], cwidth[i]+rSize0[i]/3, cheight[i]-rSize0[i]/3);
  text(smallText1[i][2], cwidth[i]-rSize0[i]/3, cheight[i]+rSize0[i]/3);
  text(smallText1[i][3], cwidth[i]+rSize0[i]/3, cheight[i]+rSize0[i]/3);
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
          fill(250, 250, 250);
          //fill(color(100+ rSize[i]/3, 255-rSize[i]/3 ,  0 ));  
          a+=x/100000;
          //ellipse(cwidth[i]+rSize[i]*cos(a)/2, cheight[i]+rSize[i]*sin(a)/2,3,3);
        }
    //}
  }
}

private float easing(float t) {
  // InOutCubic
  t *= 2.0;
  if (t < 1.0) {
    return pow(t, 3) / 2.0;
  }
  t -= 2.0;
  return (pow(t, 3) + 2.0) / 2.0;
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


    /*
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
           pgl.add(new PG((cwidth[i]+rSize[i]/3+cwidth[ii]+rSize[ii]/3)/2, (cheight[i]+rSize[i]/3+cheight[ii]-rSize[ii]/3)/2, 10, 1));
        }
        if(dist(cwidth[i]+rSize[i]/3,cheight[i]+rSize[i]/3,cwidth[ii]-rSize[ii]/3,cheight[ii]-rSize[ii]/3)<80){
          pgl.add(new PG((cwidth[i]+rSize[i]/3+cwidth[ii]-rSize[ii]/3)/2, (cheight[i]+rSize[i]/3+cheight[ii]-rSize[ii]/3)/2, 10, 1));
        }
        if(dist(cwidth[i]+rSize[i]/3,cheight[i]+rSize[i]/3,cwidth[ii]-rSize[ii]/3,cheight[ii]+rSize[ii]/3)<80){
          pgl.add(new PG((cwidth[i]+rSize[i]/3+cwidth[ii]-rSize[ii]/3)/2, (cheight[i]+rSize[i]/3+cheight[ii]+rSize[ii]/3)/2, 10, 1));
        }
        if(dist(cwidth[i]+rSize[i]/3,cheight[i]-rSize[i]/3,cwidth[ii]+rSize[ii]/3,cheight[ii]+rSize[ii]/3)<80){
          pgl.add(new PG((cwidth[i]+rSize[i]/3+cwidth[ii]-rSize[ii]/3)/2, (cheight[i]-rSize[i]/3+cheight[ii]+rSize[ii]/3)/2, 10, 1));
        }
        if(dist(cwidth[i]+rSize[i]/3,cheight[i]-rSize[i]/3,cwidth[ii]-rSize[ii]/3,cheight[ii]-rSize[ii]/3)<80){
          pgl.add(new PG((cwidth[i]+rSize[i]/3+cwidth[ii]-rSize[ii]/3)/2, (cheight[i]-rSize[i]/3+cheight[ii]-rSize[ii]/3)/2, 10, 1));
        }
        if(dist(cwidth[i]+rSize[i]/3,cheight[i]-rSize[i]/3,cwidth[ii]-rSize[ii]/3,cheight[ii]+rSize[ii]/3)<80){
          pgl.add(new PG((cwidth[i]+rSize[i]/3+cwidth[ii]-rSize[ii]/3)/2, (cheight[i]-rSize[i]/3+cheight[ii]+rSize[ii]/3)/2, 10, 1));
        }
        if(dist(cwidth[i]-rSize[i]/3,cheight[i]-rSize[i]/3,cwidth[ii]+rSize[ii]/3,cheight[ii]+rSize[ii]/3)<80){
          pgl.add(new PG((cwidth[i]-rSize[i]/3+cwidth[ii]+rSize[ii]/3)/2, (cheight[i]-rSize[i]/3+cheight[ii]+rSize[ii]/3)/2, 10, 1));
        }
        if(dist(cwidth[i]-rSize[i]/3,cheight[i]-rSize[i]/3,cwidth[ii]+rSize[ii]/3,cheight[ii]-rSize[ii]/3)<80){
          pgl.add(new PG((cwidth[i]-rSize[i]/3+cwidth[ii]+rSize[ii]/3)/2, (cheight[i]-rSize[i]/3+cheight[ii]-rSize[ii]/3)/2, 10, 1));
        }
        if(dist(cwidth[i]-rSize[i]/3,cheight[i]-rSize[i]/3,cwidth[ii]-rSize[ii]/3,cheight[ii]+rSize[ii]/3)<80){
          pgl.add(new PG((cwidth[i]-rSize[i]/3+cwidth[ii]-rSize[ii]/3)/2, (cheight[i]-rSize[i]/3+cheight[ii]+rSize[ii]/3)/2, 10, 1));
        }
        if(dist(cwidth[i]-rSize[i]/3,cheight[i]+rSize[i]/3,cwidth[ii]+rSize[ii]/3,cheight[ii]+rSize[ii]/3)<80){
          pgl.add(new PG((cwidth[i]-rSize[i]/3+cwidth[ii]+rSize[ii]/3)/2, (cheight[i]+rSize[i]/3+cheight[ii]+rSize[ii]/3)/2, 10, 1));
        }
        if(dist(cwidth[i]-rSize[i]/3,cheight[i]+rSize[i]/3,cwidth[ii]+rSize[ii]/3,cheight[ii]-rSize[ii]/3)<80){
          pgl.add(new PG((cwidth[i]-rSize[i]/3+cwidth[ii]+rSize[ii]/3)/2, (cheight[i]+rSize[i]/3+cheight[ii]-rSize[ii]/3)/2, 10, 1));
        }
        if(dist(cwidth[i]-rSize[i]/3,cheight[i]+rSize[i]/3,cwidth[ii]-rSize[ii]/3,cheight[ii]-rSize[ii]/3)<80){
          pgl.add(new PG((cwidth[i]-rSize[i]/3+cwidth[ii]-rSize[ii]/3)/2, (cheight[i]+rSize[i]/3+cheight[ii]-rSize[ii]/3)/2, 10, 1));
        }
     } 
   }
   
//line
  stroke(250,250,250);
  strokeWeight(0.1);
  line(cwidth[0]+rSize[0]/3, cheight[0]+rSize[0]/3, cwidth[1]-rSize[1]/3, cheight[1]-rSize[1]/3);
  line(cwidth[0]-rSize[0]/3, cheight[0]+rSize[0]/3, cwidth[2]-rSize[2]/3, cheight[2]-rSize[2]/3);
  line(cwidth[1]+rSize[1]/3, cheight[1]-rSize[1]/3, cwidth[3]-rSize[3]/3, cheight[3]-rSize[3]/3);
    
  //flow
    noStroke();
    for(Maru maru:maruhairetu){
      maru.draw();
    }
    */

/*
if(otherText[i][1]=="0"){
        fill(125 - 125*cos(radians(cnt)),125 - 125*cos(radians(cnt)),125 - 125*cos(radians(cnt)));
        OtherCircle(i);
        if(cos(radians(cnt)) == -1&&loopcnt%3==1){
          //otherText[3][1] = "2";
        }
        if(cos(radians(cnt)) == -1&&loopcnt%3==2){
          //otherText[1][1] = "1";
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
      }*/
