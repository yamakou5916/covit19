float a=0; 
int cwidth[]={540,830,640,560,730, 1050,400,800};
int cheight[]={770,1155,180,1050,500,800,500,820};
int owidth[]={550,770,560,400,640,740, 210,850,1030,760};
int oheight[]={910,670,1140,300,310,400,550,1350,1070,920};
int cnt = 0;
int loopcnt = 0;
int textnum = 0;
PImage img;
float rSize[] = {200,400,100,160,180,500,500,270};
String bigText[][]=
{{"ストレージの内容を変更する\n（＋）貯蓄行動：備蓄品の増加","ストレージの内容を変更する\n（ー）貯蓄行動：廃棄の増加", "保有者"},
{"清潔感への配慮は当たり前に\n（＋）企画行動：ブランド戦略の刷新","清潔感への配慮は当たり前に\n（ー）企画行動：風評被害・リスク", "保有者"},
{"予防・一次対応への意識向上\n（＋）対処行動：オーバーシュート","予防・一次対応への意識向上\n（ー）対処行動：予防", "保有者"},
{"経済的ストレスを負担に\n（＋）投資行動：市場統制","経済的ストレスが負担に\n（ー）投資行動：市場パニック", "投資家"},
{"人との不要な接触が不快に\n（＋）販売行動：接客手順の整備","人との不要な接触が不快に\n（ー）販売行動：オペレーションの省人化", "販売者"},
{"プロセス内の無駄・リスクに気づく\n（＋）生産行動：デジタルトランスフォーメーション","プロセス内の無駄・リスクに気づく\n（ー）生産行動：サプライチェーンの国内回帰", "生産者"},
{"コト・トキ消費からウチ消費へ\n（ー）消費行動：広まる自粛ムード","コト・トキ消費からウチ消費へ\n（＋）消費行動：巣ごもり消費", "消費者"},
{"物の触り方が変わる\n（＋）流通行動：ものの配布方法が清潔に","物の触り方が変わる\n（ー）流通行動：キャンセル・回収に対応する", "流通ライン"},
};
String smallText0[][]=
{{"国民の行動を\n統制する", "万一に備え\n貯蓄する", "過剰購入", "買い占め"},
{"清潔なイメージ\nPR・CSR戦略", "製品の機能\nパッケージの変更", "新しい法律へ\n対応する", "医療格差が\n拡大する"},
{"感染症指定\n医療機関へ", "医療品・人員が\n足りない", "病院内での\n二次感染を恐れる", "医療格差が\n拡大する"},
{"パンデミック", "金融緩和を\n実行する", "安心が\n伝播する", "株の買い戻し"},
{"エアの禁止と\nアルコール消毒\nの設置", "店舗営業\n情報の表示", "マスクが\nエチケットに", "払い戻しの\n対応"},
{"生産・流通\nプロセスの変更", "国民の行動を\n統制する", "リモートワークが\n浸透する", "リストラが増加"},
{"旅行・出張を\nキャンセルする", "収入の減少を\n想定する", "集会参加を\nキャンセルする", "ポートフォリオを\n変更する"},
{"検疫を\n強化する", "ネットで\n転売する", "ビニルやパックで\n物を保存する", "配給制・商品券"},
};

String smallText1[][]=
{{"廃棄物処理\nゴミの出し方", "マスク等の\n使い捨て商品\nの増加", "バラ売り\n量り売りを中止", "医療品の\n流通量の拡充"},
{"新しい法律\nへ対応する", "風評被害\nが起きる", "リスク対応を\n説明する", "リコールへ対応する"},
{"外出し、人と\n会話する", "自宅で病状の\n独自判断する", "氾濫した情報で\n混乱する", "予防用品の購入\nを見送る"},
{"不安が\n伝播する", "医療機関の\nパニック", "医療品・人員が\n足りない", "医療格差が\n拡大する"},
{"キャッシュレス\n化が進む", "つばや咳が\n気になる", "商品を\n手渡したくない", "リモートワーク\nが浸透する"},
{"新しい法律へ\n対応する", "必需品以外の\nものの生産停止", "必需品以外の\nものの生産停止", "必需品以外の\nものの生産停止"},
{"高くても清潔なもの\nを買いたい", "屋内で過ごす\nための家電用品", "予防・防災グッズ\nサバイバル用品\nの購入", "缶・冷凍\nインスタント\n食品の購入"},
{"転売業者を\n取り締まる", "在庫確認が\nいつでも可能に", "eコマースでの\n物資補給", "国内で流通を\n完結する"},
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
{"パーソナル\nスペースと\n心理的距離の拡大","0"},
{},
};

Maru[] maruhairetu;
ArrayList<PG> pgl = new ArrayList<PG>();

void setup(){
  PFont font = createFont("NotoSansCJKjp-Regular",50);
  textFont (font);
  size(1280,2000);
  noStroke();
  background(0);

  maruhairetu =new Maru[5];
  for(int i=0; i<maruhairetu.length;i++){
    Maru maru=new Maru(rSize[i],rSize[i]);
    maruhairetu[i]=maru;
  }   
  img = loadImage("user.png");
}

void draw(){
//BackGround
    noStroke();
    fill(color(0, 0, 0), 32);
    rect(0,0,width,height);
    
//軸
stroke(250,250,250,100);
strokeWeight(0.1);
//line(0,height/2, width,height/2);
line(width/2,0, width/2,height);
fill(250,250,250,50);
textSize(15);
textAlign(CENTER);
//text("一時的", 45,height/2+7.5);
//text("継続的", width-45,height/2+7.5);
text("生産者行動", width/2+200,30);
text("消費者行動", width/2-200,30);

  //Other Circle
  for(int i=0; i<owidth.length;i++){
    if(otherText[i][1]=="0"){
      fill(125 - 125*cos(radians(cnt)),125 - 125*cos(radians(cnt)),125 - 125*cos(radians(cnt)));
        OtherCircle(i);
      if(cos(radians(cnt)) == -1&&loopcnt%3==1){
        otherText[3][1] = "2";
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
    
/*/Collision
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
   
   */
/*/line
  stroke(250,250,250);
  strokeWeight(0.1);
  line(cwidth[0]+rSize[0]/3, cheight[0]+rSize[0]/3, cwidth[1]-rSize[1]/3, cheight[1]-rSize[1]/3);
  line(cwidth[0]-rSize[0]/3, cheight[0]+rSize[0]/3, cwidth[2]-rSize[2]/3, cheight[2]-rSize[2]/3);
  line(cwidth[1]+rSize[1]/3, cheight[1]-rSize[1]/3, cwidth[3]-rSize[3]/3, cheight[3]-rSize[3]/3);
  */
  
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
    rSize[2] += 1;
    rSize[3] += 0.2;
    rSize[4] += 0.7;
    rSize[5] -= 0.5;
    rSize[6] -= 1.4;
    textnum = 0;

  } else {
    //bigger
    rSize[0] -= 0.7;
    rSize[1] += 0.6;
    rSize[2] -= 1;
    rSize[3] -= 0.2;
    rSize[4] -= 0.7;
    rSize[5] += 0.5;
    rSize[6] += 1.4;
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
  image(img, cwidth[i]-10, cheight[i]-25, 20, 25);
  textSize(12);
  textAlign(CENTER);
  text(bigText[i][textnum], cwidth[i], cheight[i]+20);
  textSize(8);
  textAlign(CENTER);
  text(bigText[i][textnum], cwidth[i], cheight[i]-20);
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
  if(textnum==0){
    text(smallText0[i][0], cwidth[i]-rSize[i]/3, cheight[i]-rSize[i]/3);
    text(smallText0[i][1], cwidth[i]+rSize[i]/3, cheight[i]-rSize[i]/3);
    text(smallText0[i][2], cwidth[i]-rSize[i]/3, cheight[i]+rSize[i]/3);
    text(smallText0[i][3], cwidth[i]+rSize[i]/3, cheight[i]+rSize[i]/3);
  }else{
    text(smallText1[i][0], cwidth[i]-rSize[i]/3, cheight[i]-rSize[i]/3);
    text(smallText1[i][1], cwidth[i]+rSize[i]/3, cheight[i]-rSize[i]/3);
    text(smallText1[i][2], cwidth[i]-rSize[i]/3, cheight[i]+rSize[i]/3);
    text(smallText1[i][3], cwidth[i]+rSize[i]/3, cheight[i]+rSize[i]/3);
  }
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
