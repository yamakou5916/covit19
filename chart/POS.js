var colors = ["#7BDFF2","#B2F7EF","#EFF7F6","#F7D6E0","#F2B5D4","#DABFFF"];
var posproduct = 0;

// 2) CSVから２次元配列に変換
function csv2Array7(str,a) {
  var csvData7 = [];
  var lines7 = str.split("\n");
  if(a == "a"){
    var num0 = 48;
    var num1 = 0;
  }else{
    var num0 = 96;
    var num1 = 48;
  }
  for (var i = lines7.length-num0; i < lines7.length-num1; ++i) {
  //for (var i = 0; i < lines7.length; ++i) {
    var cells7 = lines7[i].split(",");
    csvData7.push(cells7);
  }
  return csvData7;
}

function drawBarChart7(data) {
  // 3)chart.jsのdataset用の配列を用意
  var tmpLabels7 = [], tmpData17 = [], tmpData27 = [], tmpData37 = [], tmpData47 = [], tmpData57 = [], tmpData67 = []
  for (var row in data) {
    tmpLabels7.push(data[row][0])
    tmpData17.push(data[row][1])
    tmpData27.push(data[row][2])
    tmpData37.push(data[row][3])
    tmpData47.push(data[row][4])
    tmpData57.push(data[row][5])
    tmpData67.push(data[row][6])

  };
  var demo = document.getElementById("samurai2");
  demo.innerHTML = (data[row][5]-100).toFixed(1);
  posproduct = data[row][5]-100;

  // 7)chart.jsで描画
  var ctx7 = document.getElementById("POS").getContext("2d");
  var POS = new Chart(ctx7, {
    type: 'line',
    data: {
      labels: tmpLabels7,
      datasets: [
        { label: "食品", data: tmpData17, borderColor: colors[0], borderWidth: 1, pointRadius: 0, backgroundColor: "rgba(255,255,255,0)"},
        { label: "飲料", data: tmpData27, borderColor: colors[1], borderWidth: 1, pointRadius: 0, backgroundColor: "rgba(255,255,255,0)"},
        { label: "雑貨", data: tmpData37, borderColor: colors[2], borderWidth: 1, pointRadius: 0, backgroundColor: "rgba(255,255,255,0)"},
        { label: "化粧品", data: tmpData47, borderColor: colors[3], borderWidth: 1, pointRadius: 0, backgroundColor: "rgba(255,255,255,0)"},
        { label: "ヘルスケア", data: tmpData57, borderColor: colors[4], borderWidth: 1, pointRadius: 0, backgroundColor: "rgba(255,255,255,0)"},
        { label: "その他", data: tmpData67, borderColor: colors[5], borderWidth: 1, pointRadius: 0, backgroundColor: "rgba(255,255,255,0)"},
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
          position: 'bottom',
          gridLines: {color: 'rgba(255, 255, 255, 0.1)',},
          ticks: {
            maxRotation: 0, 
            minRotation: 0,
            autoSkip: true,
            maxTicksLimit: 7, //値の最大表示数
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
        //position: 'top',
        labels: {
          fontColor: "white",
          fontSize: 10,
          boxWidth: 10,
        }
      },
    }

  });
}


function main7(a) {
  // 1) ajaxでCSVファイルをロード
  var req7 = new XMLHttpRequest();
  var filePath7 = './data/POS.csv';
  req7.open("GET", filePath7, true);
  req7.onload = function() {
    // 2) CSVデータ変換の呼び出し
    data7 = csv2Array7(req7.responseText,a);
    // 3) chart.jsデータ準備、7) chart.js描画の呼び出し
    drawBarChart7(data7);
  }
  req7.send(null);
}

function func1() {
  // form要素を取得
  var element = document.getElementById( "target1" ) ;
  // form要素内のラジオボタングループ(name="hoge")を取得
  var radioNodeList = element.hoge ;
  // 選択状態の値(value)を取得 (Bが選択状態なら"b"が返る)
  var a = radioNodeList.value ;
  if ( a === "" ) {
    // 未選択状態
  } else {
    // aには選択状態の値が代入されている
    //console.log( a ) ;
    main7(a)
  }
}

function data2(){
  return posproduct;
}

var element = document.getElementById( "target1" ) ;
var radioNodeList = element.hoge;
radioNodeList[0].checked = true ;
func1();


$('#mychart').css('height','100%');




