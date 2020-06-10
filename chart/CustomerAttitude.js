var colors = ["#7BDFF2","#B2F7EF","#EFF7F6","#F7D6E0","#F2B5D4","#DABFFF"];
var sentiment = 0;
var beforeafter = [0,0,0,0,0,0,0,0,0,0,0,0,0]

// 2) CSVから２次元配列に変換
function csv2Array11(str,a) {
  var csvData11 = [];
  var lines11 = str.split("\n");
  if(a == "a"){
    var num110 = 48;
    var num111 = 0;
  }else{
    var num110 = 96;
    var num111 = 48;
  }
  for (var i = lines11.length-num110; i < lines11.length-num111; ++i) {
  //for (var i = 0; i < lines11.length; ++i) {
    var cells11 = lines11[i].split(",");
    csvData11.push(cells11);
  }
  var k=0;
  for (var j = lines11.length-13; j < lines11.length; ++j) {
    beforeafter[k] = lines11[j].split(",");
    ++k;
  }
  sentiment = (((beforeafter[12][1]/beforeafter[0][1])-1)*100).toFixed(1);
  var demo = document.getElementById("samurai6");
  demo.innerHTML = (((beforeafter[12][1]/beforeafter[0][1])-1)*100).toFixed(1);
  return csvData11;
}

function drawBarChart11(data) {
  // 3)chart.jsのdataset用の配列を用意
  var tmpLabels11 = [], tmpData111 = [], tmpData211 = [], tmpData311 = [], tmpData411 = [];
  for (var row in data) {
    tmpLabels11.push(data[row][0])
    tmpData111.push(data[row][1])
    tmpData211.push(data[row][2])
    tmpData311.push(data[row][3])
    tmpData411.push(data[row][4])
  };

  // 11)chart.jsで描画
  var ctx11 = document.getElementById("CustomerAttitude").getContext("2d");
  var CustomerAttitude = new Chart(ctx11, {
    type: 'line',
    data: {
      labels: tmpLabels11,
      datasets: [
        { label: "給与所得", data: tmpData111, borderColor: colors[0], borderWidth: 1, pointRadius: 0, backgroundColor: "rgba(255,255,255,0)"},
        { label: "事業所得", data: tmpData211, borderColor: colors[1], borderWidth: 1, pointRadius: 0, backgroundColor: "rgba(255,255,255,0)"},
        { label: "年金所得", data: tmpData311, borderColor: colors[2], borderWidth: 1, pointRadius: 0, backgroundColor: "rgba(255,255,255,0)"},
        { label: "その他", data: tmpData411, borderColor: colors[3], borderWidth: 1, pointRadius: 0, backgroundColor: "rgba(255,255,255,0)"},
      ]
    },

    options: {
      title: {
        display: true,
        fontSize: 16,
        text: "消費者態度指数",
        fontColor: "white", // 文字の色
        //position: 'left',
      },
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        
        xAxes: [{
          CustomerAttitudeition: 'bottom',
          gridLines: {color: 'rgba(255, 255, 255, 0.1)',},
          ticks: {
            maxRotation: 0, 
            minRotation: 0,
            autoSkip: true,
            maxTicksLimit: 11, //値の最大表示数
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
        //CustomerAttitudeition: 'top',
        labels: {
          fontColor: "white",
          fontSize: 10,
          boxWidth: 10,
        }
      },
    }

  });
}


function main11(a) {
  // 1) ajaxでCSVファイルをロード
  var req11 = new XMLHttpRequest();
  var filePath11 = './data/CustomerAttitude.csv';
  req11.open("GET", filePath11, true);
  req11.onload = function() {
    // 2) CSVデータ変換の呼び出し
    data11 = csv2Array11(req11.responseText,a);
    // 3) chart.jsデータ準備、11) chart.js描画の呼び出し
    drawBarChart11(data11);
  }
  req11.send(null);
}

function func4() {
  // form要素を取得
  var element = document.getElementById( "target4" ) ;
  // form要素内のラジオボタングループ(name="hoge")を取得
  var radioNodeList = element.hoge ;
  // 選択状態の値(value)を取得 (Bが選択状態なら"b"が返る)
  var a = radioNodeList.value ;
  if ( a === "" ) {
    // 未選択状態
  } else {
    // aには選択状態の値が代入されている
    //console.log( a ) ;
    main11(a)
  }
}

function ratedata6(){
  return sentiment;
}

var element = document.getElementById( "target4" ) ;
var radioNodeList = element.hoge ;
radioNodeList[0].checked = true ;
func4();

$('#mychart').css('height','100%');


