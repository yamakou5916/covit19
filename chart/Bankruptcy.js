var colors = ["#7BDFF2","#B2F7EF","#EFF7F6","#F7D6E0","#F2B5D4","#DABFFF"];
var bankrupt = 0;
var beforeafter = [0,0,0,0,0,0,0,0,0,0,0,0,0]

// 2) CSVから２次元配列に変換
function csv2Array4(str,a) {
  var csvData4 = [];
  var lines4 = str.split("\n");
  if(a == "a"){
    var num40 = 12;
    var num41 = 0;
  }else{
    var num40 = 24;
    var num41 = 12;
  }
  for (var i = lines4.length-num40; i < lines4.length-num41; ++i) {
    var cells4 = lines4[i].split(",");
    csvData4.push(cells4);
  }
  var k=0;
  for (var j = lines4.length-13; j < lines4.length; ++j) {
    beforeafter[k] = lines4[j].split(",");
    ++k;
  }
  bankrupt = (((beforeafter[12][2]/beforeafter[0][2])-1)*100).toFixed(1);
  var demo = document.getElementById("samurai7");
  demo.innerHTML = (((beforeafter[12][2]/beforeafter[0][2])-1)*100).toFixed(1);

  return csvData4;
}

function drawBarChart4(data) {
  // 3)chart.jsのdataset用の配列を用意
  var tmpLabels4 = [], tmpData14 = [], tmpData24 = [], tmpData34 = [];
  for (var row in data) {
    tmpLabels4.push(data[row][0])
    tmpData14.push(data[row][1])
    tmpData24.push(data[row][2])
  };

  // 4)chart.jsで描画
  var ctx4 = document.getElementById("Bankruptcy").getContext("2d");
  var Bankruptcy = new Chart(ctx4, {
  type: 'bar',  
    data: {
      labels: tmpLabels4,
      datasets: [
        { label: "倒産数【件】", data: tmpData14, borderColor: colors[5], borderWidth: 1, pointRadius: 0, yAxisID: "y-axis-1", backgroundColor: colors[5]},
        { type: 'line',label: "負債総額【万円】", data: tmpData24, borderColor: colors[2], borderWidth: 1, pointRadius: 0,yAxisID: "y-axis-2", backgroundColor: colors[2]},
      ]
    },

    options: {
      title: {
        display: true,
        fontSize: 16,
        text: "倒産数/負債総額",
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
            maxTicksLimit: 5, //値の最大表示数
            fontColor: "white", // 文字の色
            fontSize: 10,
          }
        }],
        yAxes: [{
          id: "y-axis-1",   // Y軸のID
          type: "linear",   // linear固定 
          position: "left", // どちら側に表示される軸か？
          gridLines: {color: 'rgba(255, 255, 255, 0.1)',},
          ticks: {
            fontColor: "white",
            fontSize: 10,
            min: 0,
            max: 1000
          }
        }, {
          id: "y-axis-2",
          type: "linear", 
          position: "right",
          ticks: {
            fontColor: "white",
            fontSize: 10,
            min: 0,
            max: 25000000
          },
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


function main4(a) {
  // 1) ajaxでCSVファイルをロード
  var req4 = new XMLHttpRequest();
  var filePath4 = './data/Bankruptcy.csv';
  req4.open("GET", filePath4, true);
  req4.onload = function() {
    // 2) CSVデータ変換の呼び出し
    data4 = csv2Array4(req4.responseText,a);
    // 3) chart.jsデータ準備、4) chart.js描画の呼び出し
    drawBarChart4(data4);
  }
  req4.send(null);
}

function func7() {
  // form要素を取得
  var element = document.getElementById( "target5" ) ;
  // form要素内のラジオボタングループ(name="hoge")を取得
  var radioNodeList = element.hoge ;
  // 選択状態の値(value)を取得 (Bが選択状態なら"b"が返る)
  var a = radioNodeList.value ;
  if ( a === "" ) {
    // 未選択状態
  } else {
    // aには選択状態の値が代入されている
    console.log( a ) ;
    main4(a)
  }
}


function ratedata7(){
  return bankrupt;
}


var element = document.getElementById( "target5" ) ;
var radioNodeList = element.hoge ;
radioNodeList[0].checked = true ;
func7();

main4();

$('#mychart').css('height','100%');



