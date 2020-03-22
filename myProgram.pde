float a=0; 
int cwidth[]={220,520,270,780,950,1050, 650};
int cheight[]={180,255,580,150,600,250,700};
int owidth[]={100,650,410,400,550,880, 760,1150,930,750};
int oheight[]={600,550,90,300,400,270,690,550,450,270};
int cnt = 0;
float rSize[] = {250,300,100,200,180,400,300};
String bigText[][]=
{{"不正なビジネスが流行る","IIII"},
{"市場の自浄効果","IIII"},
{"短期的な感染対策をとる","IIII"},
{"政府や外国からの支援","IIII"},
{"予防習慣が定着する","IIII"},
{"身の回りの生活が変わる","IIII"},
{"支出を減らす","IIII"},
{},
{},
{},
{}
};

String smallText[][]=
{{"ネットで\n転売する", "株価下落を\n狙った空売り", "過剰購入\n買い占め", "認可外の\n医療品の流通"},
{"安心が\n伝播する", "医療品・人員の\n追加補給", "医療格差を\n解消する", "医療サービスの\n増強・進歩"},
{"氾濫した情報で\n混乱する", "自己判断での\n医療行為", "情報を集める", "外出・人との\n接触を避ける"},
{"パンデミックを\n宣言する", "国民の行動を\n統制する", "医療援助", "検疫を\n強化する"},
{"リモートワークが\n浸透する", "清潔さへの\n関心の高まり", "万一に備え\n貯蓄する", "キャッシュレス\neコマースでの\n物資補給"},
{"新しい法律へ\n対応する", "製品の機能\nパッケージの変更", "生産・流通\nプロセスの変更", "清潔なイメージ\nPR・CSR戦略"},
{"収入の減少を\n想定する", "旅行・出張を\nキャンセルする", "集会参加を\nキャンセルする", "ポートフォリオを\n変更する"},
{"事象I", "事象J", "事象K", "事象L"},

};
Maru[] maruhairetu;

void setup(){
  PFont font = createFont("YuMin_36pKn-Medium",50);
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
    
  //Small Circle
    SmallCircle(i);
  }
  
  cnt++;
  if (1000 * sin(radians(cnt)) > 0) {
    //smaller
    rSize[0] += 0.7;
    rSize[1] -= 0.6;
    rSize[2] += 3;
    rSize[3] -= 0.2;
    rSize[4] += 0.7;
    rSize[5] -= 0.5;
    rSize[6] += 0.4;

  } else {
    //bigger
    rSize[0] -= 0.7;
    rSize[1] += 0.6;
    rSize[2] -= 3;
    rSize[3] += 0.2;
    //rSize[4] -= 0.7;
    rSize[5] += 0.5;
    rSize[6] -= 0.4;

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
  text(bigText[i][0], cwidth[i], cheight[i]);

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

void OtherCircle(){
  fill(0, 0, 0);
  stroke(250,250,250);
  strokeWeight(3);
  ellipse(owidth[0], oheight[0], 80, 80);
  ellipse(owidth[1], oheight[1], 80, 80);
  ellipse(owidth[2], oheight[2], 80, 80);
  ellipse(owidth[3], oheight[3], 80, 80);
  ellipse(owidth[4], oheight[4], 80, 80);
  ellipse(owidth[5], oheight[5], 80, 80);
  ellipse(owidth[6], oheight[6], 80, 80);
  ellipse(owidth[7], oheight[7], 80, 80);
  ellipse(owidth[8], oheight[8], 80, 80);
  ellipse(owidth[9], oheight[9], 80, 80);
  fill(250,250,250);
  textSize(10);
  textAlign(CENTER);
  text("フェイクニュース\nの横行", owidth[0], oheight[0]);
  text("平均消費性向の\n低下・停滞", owidth[1], oheight[1]);
  text("景気後退", owidth[2], oheight[2]);
  text("社会保障費の\n増大", owidth[3], oheight[3]);
  text("医師不足\n医療崩壊", owidth[4], oheight[4]);
  text("経済圏の\nブロック化", owidth[5], oheight[5]);
  text("ひきこもり", owidth[6], oheight[6]);
  text("行き過ぎた\n清潔観・差別", owidth[7], oheight[7]);
  text("デジタル化\nによる失業", owidth[8], oheight[8]);
  text("首脳レベルの\n利権と癒着", owidth[9], oheight[9]);

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
          fill(color(100+ rSize[i]/3, 255-rSize[i]/3 ,  0 ));  
          a+=x/100000;
          ellipse(cwidth[i]+rSize[i]*cos(a)/2, cheight[i]+rSize[i]*sin(a)/2,3,3);
        }
    //}
  }
}
