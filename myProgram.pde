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
float rSize0[] ={500,470,860,420,500,700,670};
float rSize[] = {500,470,860,420,500,700,670};
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
{{"貯蓄の再構築\n（＋）","貯蓄の破綻\n（ー）",},
{"経営の革新\n（＋）","経営の破綻\n（ー）",},
{"投資の合理化\n（＋）","投資の停滞\n（ー）",},
{"接客の合理化\n（＋）","接客の低下\n（ー）",},
{"生産の回復\n（＋)","生産の立ち遅れ\n（ー）",},
{"消費の増加\n（＋）","消費の減少\n（ー)",},
{"サプライチェーンの再構築\n（＋）","サプライチェーンの崩壊\n（ー）",},
};

String bigText[][]=
{{"備蓄ストレージの内容を変更する", "購入・廃棄量が瞬間的に増加する","保有者"},
{"企業と産業構造の転換","中小零細企業が倒産する", "企画・設計者"},
{"投資が局所に集中し、格差が拡大する","地政学的リスクが高まり、投資が停滞する", "投資家"},
{"取引手続きを前倒しにする","他人との不要な接触が不快になる", "販売者"},
{"複数業務を並行して実行する","プロセス内の無駄・リスクに気づく", "生産者"},
{"コト・トキ消費からウチ消費へ", "感染に備え消費を自粛する","消費者"},
{"地場での生産・配給体制を整える","運送制限で満足に供給できない", "流通ライン"},
};

String smallText0[][]=
{{"過剰購入\n大量廃棄", "感染性廃棄物\nの処理", "まとめ買い増加\n購入の低頻度化", "備蓄品\n貯蓄の増加"},
{"倒産\n産業縮小", "人員削減\nが増加", "訴訟リスク\nの増加", "風評被害の\n多発拡散"},
{"国民の生活が\n統制される", "株を\n空売りする", "企業が\nサービス\n提供自粛", "社会保障\n経済政策が\n実行される"},
{"接触回避で\n来客減少", "在庫管理が\nできない", "契約の\n不履行\nが増加", "店頭販売\nの減少"},
{"需要に偏り\nが起きる", "生産・流通\nプロセス\nの省人化", "失業が\n増加", "品質基準\nが劣化"},
{"インバウンド\n需要の崩壊", "集客型\nビジネス\nの減退", "外出機会\nの減少", "家庭内消費\n時間の増加"},
{"陸・海・空\n輸送サービス\nの停止", "物流運送の\n労働力不足", "店頭配給\nの停止", "商品を\n清潔に保つ\nパッケージ"},
};

String smallText1[][]=
{{"購入量の\n自動最適化AI", "廃棄物の\n即時収集", "個人の購入\n周期形成", "備蓄場所の\nスペース拡張"},
{"オープン\nイノベーション\n企業買収合併", "リモート\nワーク\nの定着", "コンプライアンス\nの向上", "ブランドPR\nCSR戦略\nの強化"},
{"公共経済\nシミュレーション", "", "ポートフォリオ\nの自動最適化", "政策の\n優先順位づけ"},
{"サービス\nの無人化", "在庫・営業\n情報の\nクラウド化", "カスタマー\nサクセス型\nの営業", "オンライン\nオムニチャネル\n戦略の増加"},
{"工場生産物\nの多角化", "ロボット化\nが浸透する", "生活を\n安定させる\n保険整備", "商品価値\nの再定義"},
{"国内消費\n向けビジネス\nの増加", "一人レジャー\nの増加", "遠隔×ライブ\nエンタテイメント\nの勃興", "生活全般での\nDIY化が進む"},
{"地産地消の\n意識が育つ", "自動運転が\n配達を賄う", "医療品\n日用品が\n配給制に", "エコ×使い捨て\n再利用可能性"},
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
  img = loadImage("user.png");
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
    image(img, cwidth[i]-10, cheight[i]+20-rSize0[i]/4, 20, 25);
    textSize(12);
    textAlign(CENTER);
    text(bigText[i][collision], cwidth[i], cheight[i]);
    textSize(10);
    textAlign(CENTER);
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
         if(dist(cwidth[i]+distance[i]*2/3,cheight[i]+distance[i]*2/3,cwidth[ii],cheight[ii])<distance[ii]+40){
           pgl.add(new PG((cwidth[i]+rSize[i]/6+cwidth[ii]+rSize[ii]/6)/2, (cheight[i]+rSize[i]/6+cheight[ii]-rSize[ii]/6)/2, 2, 1));
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
