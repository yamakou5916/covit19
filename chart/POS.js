var colors = ["#1BA0C3","#1BB4C3","#1BC3BD","#1BC3A9","#1BC380","#1BC36C"];

// 2) CSVから２次元配列に変換
function csv2Array7(str) {
  var csvData7 = [];
  var lines7 = str.split("\n");
  for (var i = 0; i < lines7.length; ++i) {
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
  demo.innerHTML = data[row][5]-100;

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


function main7() {
  // 1) ajaxでCSVファイルをロード
  var req7 = new XMLHttpRequest();
  var filePath7 = './data/POS.csv';
  req7.open("GET", filePath7, true);
  req7.onload = function() {
    // 2) CSVデータ変換の呼び出し
    data7 = csv2Array7(req7.responseText);
    // 3) chart.jsデータ準備、7) chart.js描画の呼び出し
    drawBarChart7(data7);
  }
  req7.send(null);
}

main7();


$('#mychart').css('height','100%');




