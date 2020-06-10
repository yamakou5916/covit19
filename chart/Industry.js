var colors = ["#7BDFF2","#B2F7EF","#EFF7F6","#F7D6E0","#F2B5D4","#DABFFF"];
var threeindex = 0;
var beforeafter = [0,0,0,0,0,0,0,0,0,0,0,0,0]


// 2) CSVから２次元配列に変換
function csv2Array10(str,a) {
  var csvData10 = [];
  var lines10 = str.split("\n");
  if(a == "a"){
    var num0 = 12;
    var num1 = 0;
  }else{
    var num0 = 24;
    var num1 = 12;
  }
  for (var i = lines10.length-num0; i < lines10.length-num1; ++i) {
  //for (var i = 0; i < lines10.length; ++i) {
    var cells10 = lines10[i].split(",");
    csvData10.push(cells10);
  }
  var k=0;
  for (var j = lines10.length-13; j < lines10.length; ++j) {
    beforeafter[k] = lines10[j].split(",");
    ++k;
  }
  threeindex = (((beforeafter[12][2]/beforeafter[0][2])-1)*100).toFixed(1);
  var demo = document.getElementById("samurai8");
  demo.innerHTML = (((beforeafter[12][2]/beforeafter[0][2])-1)*100).toFixed(1);
  return csvData10;
}

function drawBarChart10(data) {
  // 3)chart.jsのdataset用の配列を用意
  var tmpLabels10 = [], tmpData110 = [], tmpData210 = [], tmpData310 = [], tmpData410 = [];
  for (var row in data) {
    tmpLabels10.push(data[row][0])
    tmpData110.push(data[row][1])
    tmpData210.push(data[row][2])
    tmpData310.push(data[row][3])
    tmpData410.push(data[row][4])
  };

  // 10)chart.jsで描画
  var ctx10 = document.getElementById("Industry").getContext("2d");
  var Industry = new Chart(ctx10, {
    type: 'line',
    data: {
      labels: tmpLabels10,
      datasets: [
        { label: "全産業活動指数", data: tmpData110, borderColor: colors[0], borderWidth: 1, pointRadius: 0, backgroundColor: "rgba(255,255,255,0)"},
        { label: "建設業活動指数", data: tmpData210, borderColor: colors[1], borderWidth: 1, pointRadius: 0, backgroundColor: "rgba(255,255,255,0)"},
        { label: "鉱工業生産指数", data: tmpData310, borderColor: colors[2], borderWidth: 1, pointRadius: 0, backgroundColor: "rgba(255,255,255,0)"},
        { label: "第３次産業活動指数", data: tmpData410, borderColor: colors[3], borderWidth: 1, pointRadius: 0, backgroundColor: "rgba(255,255,255,0)"},
      ]
    },

    options: {
      title: {
        display: true,
        fontSize: 16,
        text: "レーダーグラフのサンプル（データセット個)",
        fontColor: "white", // 文字の色
        //position: 'left',
      },
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        
        xAxes: [{
          Industryition: 'bottom',
          gridLines: {color: 'rgba(255, 255, 255, 0.1)',},
          ticks: {
            maxRotation: 0, 
            minRotation: 0,
            autoSkip: true,
            maxTicksLimit: 10, //値の最大表示数
            fontColor: "white", // 文字の色
                    fontSize: 10,
          }
        }],
        yAxes: [{
          gridLines: {color: 'rgba(255, 255, 255, 0.1)',},
          ticks: {
            fontColor: "white",
                    fontSize: 10,
          }
        }],
      },
      legend: {
        display: true,
        //Industryition: 'top',
        labels: {
          fontColor: "white",
          fontSize: 10,
          boxWidth: 10,
        }
      },
    }

  });
}


function main10(a) {
  // 1) ajaxでCSVファイルをロード
  var req10 = new XMLHttpRequest();
  var filePath10 = './data/Industry.csv';
  req10.open("GET", filePath10, true);
  req10.onload = function() {
    // 2) CSVデータ変換の呼び出し
    data10 = csv2Array10(req10.responseText,a);
    // 3) chart.jsデータ準備、10) chart.js描画の呼び出し
    drawBarChart10(data10);
  }
  req10.send(null);
}

function func6() {
  // form要素を取得
  var element = document.getElementById( "target6" ) ;
  // form要素内のラジオボタングループ(name="hoge")を取得
  var radioNodeList = element.hoge ;
  // 選択状態の値(value)を取得 (Bが選択状態なら"b"が返る)
  var a = radioNodeList.value ;
  if ( a === "" ) {
    // 未選択状態
  } else {
    // aには選択状態の値が代入されている
    //console.log( a ) ;
    main10(a)
  }
}

function ratedata1(){
  return threeindex;
}

var element = document.getElementById( "target6" ) ;
var radioNodeList = element.hoge ;
radioNodeList[0].checked = true ;
func6();


$('#mychart').css('height','100%');


