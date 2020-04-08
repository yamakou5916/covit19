float a=0; 
int cwidth[]={320,1080,710,580, 1200,250,900};
int cheight[]={270,305,300,750,600,650,670};
int owidth[]={550,570,550,640,740, 260,850,1030,760};
int oheight[]={1070,670,350,310,400,650,1350,1070,920};
int textnum = 0;
int grdnum = 0;
//int frameCnt = 0;
float frameCnt[] = {200,200,0,0,100,0,50};
PImage img;
int numFrames = 12; //アニメーションのフレーム数
PImage[] images = new PImage[numFrames];

float rSize0[] ={500,470,560,420,500,600,570};
float rSize[] = {500,470,560,420,500,600,570};
float radius  = 200;
int collision = 0;
color col1, col2;
float Rcol[]={0,0,0,0,0,0,0,147};
float Gcol[]={230,230,173,0};
float Bcol[]={115,211,230,160};
int colornum[]={0,0,0,0,0,0,0,0};
float applyX =0;
float applyY =0;
float distance[]={0,0,0,0,0,0,0,0};;
Maru[] maruhairetu;
ArrayList<PG> pgl = new ArrayList<PG>();

String titleText[][]=
{{"エデュケーション","エデュケーション",},
{"ライフイベント","ライフイベント",},
{"ライフバリュー","ライフバリュー",},
{"ワークスタイル","ワークスタイル",},
{"エンタテイメント","エンタテイメント",},
{"ヘルスケア","ヘルスケア",},
{"メディカル","メディカル",},
};

String bigText[][]=
{{"能力と社会性の変化","能力と社会性の変化",},
{"社会通念と手続きの変化","社会通念と手続きの変化",},
{"生活と価値観の変化","生活と価値観の変化",},
{"職業と人生観の変化","職業と人生観の変化",},
{"余暇と気晴らしの変化","余暇と気晴らしの変化",},
{"個人情報とプライバシーの変化","個人情報とプライバシーの変化",},
{"健康意識の変化","健康意識の変化",},
};
String smallText0[][]=
{{"教材の\nオンライン化", "リモート\n学習状況\nの管理", "友達作り\n人間関係\nの教育", "非登校型\n教育機会の\n選択自由化"},
{"冠婚葬祭の\n録画・記録", "SNSでの\n双方向型\n体験共有", "VR技術で\n五感体験を\n拡張する", "デジタル\n弱者向けの\nプラットフォーム"},
{"安全な生活\nの確保が\n第一に", "適切な\n社会的距離\nに気づく", "家の中の\nQOL向上", "貿易摩擦\n資源需給\nの悪化"},
{"デジタル\nワークスタイル\nの確立", "出勤不要が\n職業選択の\n基準になる", "自粛による\n需要変動\n季節労働化", "スキルの多角化\nマルチキャリア"},
{"需要に偏り\nが生じる", "生産・流通\nプロセス\nの省人化", "失業が\n増加", "品質基準\nが劣化"},
{"インバウンド\n需要の崩壊", "集客型\nビジネス\nの減退", "外出機会\nの減少", "家庭内消費\n時間の増加"},
{"陸・海・空\n輸送サービス\nの停止", "店頭販売\nの停止", "物流運送の\n労働力不足", "買い占め\n供給量の偏り"},
};

String smallText1[][]=
{{"景気の安定化", "緊急融資\nの増加", "国内または\n安全な資産\nを購入する", "計画購入\n消費社会\nの形成"},
{"オープン\nイノベーション\n企業買収合併", "リモート\nワーク\nの定着", "コンプライアンス\nの強化", "ブランド\nPR・CSR戦略\nの刷新"},
{"国民生活\nの制限\n緊急事態宣言", "GAFA等\n巨大企業へ\n富が集積", "ブロック\nチェーン\n信用創造加速", "リスク回避\n安全資産の\n購入増加"},
{"サービス\nの無人化", "在庫・営業\n情報の\nクラウド化", "カスタマー\nサクセス型\nの営業", "オンライン\nオムニチャネル\n戦略の増加"},
{"工場生産物\nの多角化", "ロボット化\nが浸透する", "失業保険\nの整備", "商品価値\nの再定義"},
{"国内消費\n向けビジネス\nの増加", "一人レジャー\nの増加", "遠隔×ライブ\nエンタテイメント\nの勃興", "生活全般での\nDIY化が進む"},
{"地産地消の\n意識が育つ\n代替生産拠点", "eコマース\nデリバリー\nの一般化", "自動運転が\n配達を賄う", "医療品\n日用品が\n配給制に"},
{},
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
  size(1400,1000);
  noStroke();
  //background(0);
  background(0);
  smooth();
  col1 = color(0);
  col2 = color(20);
  
  maruhairetu =new Maru[5];
  for(int i=0; i<maruhairetu.length;i++){
    Maru maru=new Maru(rSize[i],rSize[i]);
    maruhairetu[i]=maru;
  } 
  images[0] = loadImage("savings.png");
  images[1] = loadImage("management.png");
  images[2] = loadImage("investment.png");
  images[3] = loadImage("customer_service.png");
  images[4] = loadImage("production.png");
  images[5] = loadImage("consumption.png");
  images[6] = loadImage("supply_chain.png");
}

void draw(){
  //背景
  noStroke();
  fill(0,5);
  rect(0,0,width,height);
    
    
   //円
  for(Maru maru:maruhairetu){
        maru.draw();
      }
  for(int i=0; i<cwidth.length;i++){
    BigCircle(i);
    if(sin(radians(frameCnt[i])) == 1){
          colornum[i] += 1;
          if(colornum[i]==4){
            colornum[i]=0;
          }
        }
    wave(i);
    fill(255);
    noStroke();
    image(images[i], cwidth[i]-10, cheight[i]+20-rSize0[i]/4, 20, 25);
    textSize(12);
    textAlign(CENTER,CENTER);
    text(bigText[i][collision], cwidth[i], cheight[i]);
    textSize(10);
    textAlign(CENTER,CENTER);
    text(titleText[i][collision], cwidth[i], cheight[i]+60-rSize0[i]/4);
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
       if(i!=ii){
         if(dist(cwidth[i]+distance[i]*2/3,cheight[i]+distance[i]*2/3,cwidth[ii],cheight[ii])<rSize[ii]/4+40){
           print(dist(cwidth[i]+distance[i]*2/3,cheight[i]+distance[i]*2/3,cwidth[ii],cheight[ii]));
           pgl.add(new PG(cwidth[i]+distance[i]*2/3,cheight[i]+distance[i]*2/3, 2, 1));
        }else if(dist(cwidth[i]+distance[i]*2/3,cheight[i]-distance[i]*2/3,cwidth[ii],cheight[ii])<rSize[ii]/4+40){
           pgl.add(new PG(cwidth[i]+distance[i]*2/3,cheight[i]-distance[i]*2/3, 2, 1));
        }else if(dist(cwidth[i]-distance[i]*2/3,cheight[i]+distance[i]*2/3,cwidth[ii],cheight[ii])<rSize[ii]/4+40){
           pgl.add(new PG(cwidth[i]-distance[i]*2/3,cheight[i]+distance[i]*2/3, 2, 1));
        }else if(dist(cwidth[i]-distance[i]*2/3,cheight[i]-distance[i]*2/3,cwidth[ii],cheight[ii])<rSize[ii]/4+40){
           pgl.add(new PG(cwidth[i]-distance[i]*2/3,cheight[i]-distance[i]*2/3, 2, 1));
        }
       }
     } 
   }
 
 
 
  
}
 
 void wave(int i){
    frameCnt[i] += 0.4;
    float frameRatio = cos(radians(frameCnt[i]));
    for (float dotCnt = 0.0; dotCnt < 1.0; dotCnt += 0.001) {
      float radian = TWO_PI * dotCnt;
      float shapeAx = cos(radian);
      float shapeAy = sin(radian);
      //float shapeBx = cos(radian) * pow(cos(radian *1.0), 2);
      //float shapeBy = sin(radian) * pow(sin(radian * 1.0), 2);
      applyX   = shapeAx * (frameRatio+1) ;//+ shapeBx * (1.0 - frameRatio);
      applyY   = shapeAy * (frameRatio+1);// + shapeBy * (1.0 - frameRatio);
      //float applyHue = 360 * frameRatio + 240 * (1.0 - frameRatio);
      noStroke();
      if(sin(radians(frameCnt[i])) < 0){
        fill(Rcol[colornum[i]],Gcol[colornum[i]],Bcol[colornum[i]]);//, 100);
      }else{
        noFill();
        fill(0);//, 100);
      }
      ellipse(applyX * rSize[i] /6+cwidth[i], applyY *  rSize[i] /6+cheight[i], 1.0, 1.0);
      distance[i] = dist(cwidth[i],cheight[i],applyX * rSize[i]/6+cwidth[i], applyY * rSize[i]/6+cheight[i]);

    }

    if(distance[i]< (rSize0[i]/4 -50)){
      stroke(255);
      strokeWeight(1);
      noStroke();
      fill(30);
      ellipse(cwidth[i]-rSize0[i]/6, cheight[i]-rSize0[i]/6, 80, 80);
      ellipse(cwidth[i]+rSize0[i]/6, cheight[i]-rSize0[i]/6, 80, 80);
      ellipse(cwidth[i]+rSize0[i]/6, cheight[i]+rSize0[i]/6, 80, 80);
      ellipse(cwidth[i]-rSize0[i]/6, cheight[i]+rSize0[i]/6, 80, 80);
      fill(255);//,125 - 125*cos(radians(frameCnt[i])));
      textSize(10);
      textAlign(CENTER,CENTER);
      text(smallText0[i][0], cwidth[i]-rSize0[i]/6, cheight[i]-rSize0[i]/6);
      text(smallText0[i][1], cwidth[i]+rSize0[i]/6, cheight[i]-rSize0[i]/6);
      text(smallText0[i][2], cwidth[i]+rSize0[i]/6, cheight[i]+rSize0[i]/6);
      text(smallText0[i][3], cwidth[i]-rSize0[i]/6, cheight[i]+rSize0[i]/6);
      collision = 1;
    }else if(distance[i]> (rSize0[i]/4 -50)&&distance[i]<rSize0[i]/4){
      fill(0, rSize0[i]/3);//,125 - 125*cos(radians(frameCnt[i])));
      strokeWeight(0.5);
      fill(255);
      noStroke();
      ellipse(cwidth[i]-rSize0[i]/6, cheight[i]-rSize0[i]/6, 80, 80);
      ellipse(cwidth[i]+rSize0[i]/6, cheight[i]-rSize0[i]/6, 80, 80);
      ellipse(cwidth[i]+rSize0[i]/6, cheight[i]+rSize0[i]/6, 80, 80);
      ellipse(cwidth[i]-rSize0[i]/6, cheight[i]+rSize0[i]/6, 80, 80);
      fill(0);
      textSize(10);
      textAlign(CENTER,CENTER);
      text(smallText1[i][0], cwidth[i]-rSize0[i]/6, cheight[i]-rSize0[i]/6);
      text(smallText1[i][1], cwidth[i]+rSize0[i]/6, cheight[i]-rSize0[i]/6);
      text(smallText1[i][2], cwidth[i]+rSize0[i]/6, cheight[i]+rSize0[i]/6);
      text(smallText1[i][3], cwidth[i]-rSize0[i]/6, cheight[i]+rSize0[i]/6);
      collision = 0;
    }
    else{
      //noFill();
      fill(0);
      stroke(0);
      strokeWeight(1);
      ellipse(cwidth[i]-(distance[i]*2/3+1), cheight[i]-(distance[i]*2/3+1), 80, 80);
      ellipse(cwidth[i]+(distance[i]*2/3+1), cheight[i]-(distance[i]*2/3+1), 80, 80);
      ellipse(cwidth[i]+(distance[i]*2/3+1), cheight[i]+(distance[i]*2/3+1), 80, 80);
      ellipse(cwidth[i]-(distance[i]*2/3+1), cheight[i]+(distance[i]*2/3+1), 80, 80); 
      noFill();
      //ellipse(cwidth[i], cheight[i], (distance[i]*2+1), (distance[i]*2+1)); 
      fill(0, rSize0[i]/3);//,125 - 125*cos(radians(frameCnt[i])));
      //strokeWeight(0.5);
      noStroke();
      fill(255);
      ellipse(cwidth[i]-distance[i]*2/3, cheight[i]-distance[i]*2/3, 80, 80);
      ellipse(cwidth[i]+distance[i]*2/3, cheight[i]-distance[i]*2/3, 80, 80);
      ellipse(cwidth[i]+distance[i]*2/3, cheight[i]+distance[i]*2/3, 80, 80);
      ellipse(cwidth[i]-distance[i]*2/3, cheight[i]+distance[i]*2/3, 80, 80);  
      fill(0);
      textSize(10);
      textAlign(CENTER,CENTER);
      text(smallText1[i][0], cwidth[i]-distance[i]*2/3, cheight[i]-distance[i]*2/3);
      text(smallText1[i][1], cwidth[i]+distance[i]*2/3, cheight[i]-distance[i]*2/3);
      text(smallText1[i][2], cwidth[i]+distance[i]*2/3, cheight[i]+distance[i]*2/3);
      text(smallText1[i][3], cwidth[i]-distance[i]*2/3, cheight[i]+distance[i]*2/3);
      collision = 0;
      }
       /*
    if (1000 * sin(radians(frameCnt[i])) > 0) {
      rSize[i] -= 0.1;
      textnum = 0;
    } else {
      rSize[i] += 0.1;
      textnum = 1;
    }*/
 }

void BigCircle(int i){
  noFill();
  stroke(0,0,0);
  strokeWeight(0.1);
  noStroke();
  ellipse(cwidth[i], cheight[i],rSize0[i],rSize0[i]);
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
          fill(255);
          //fill(color(100+ rSize[i]/3, 255-rSize[i]/3 ,  0 ));  
          a+=x/100000;
          ellipse(cwidth[i]+rSize0[i]*cos(a)/4, cheight[i]+rSize0[i]*sin(a)/4,3,3);
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
      sp *= 0.98; //0.99を変えると減速速度が速くなる
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
