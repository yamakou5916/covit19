var colors = ["#7BDFF2","#B2F7EF","#EFF7F6","#F7D6E0","#F2B5D4","#DABFFF"];

// 2) CSVから２次元配列に変換
function csv2Array20(str) {
  var csvData20 = [];
  var lines20 = str.split("\n");
  for (var i = 0; i < lines20.length; ++i) {
    var cells20 = lines20[i].split(",");
    csvData20.push(cells20);
  }
  return csvData20;
}

function drawBarChart20(data) {
  // 3)chart.jsのdataset用の配列を用意
  var tmpLabels20 = [], tmpData120 = [], tmpData220 = [], tmpData320 = [], tmpData420 = [], tmpData520 = [], tmpData620 = []
  for (var row in data) {
    tmpLabels20.push(data[row][0])
    tmpData120.push(data[row][1])
    tmpData220.push(data[row][2])
    tmpData320.push(data[row][3])
    tmpData420.push(data[row][4])
    tmpData520.push(data[row][5])
    tmpData620.push(data[row][1])
    tmpData720.push(data[row][2])
    tmpData820.push(data[row][3])
    tmpData920.push(data[row][4])
    tmpData1020.push(data[row][5])
  };
  var demo = document.getElementById("samurai1");
  demo.innerHTML = (data[row][1]-100).toFixed(1);

  // 20)chart.jsで描画
  var ctx20 = document.getElementById("POS2").getContext("2d");
  var POS2 = new Chart(ctx20, {
    type: 'line',
    data: {
      labels: tmpLabels20,
      datasets: [
        { label: "スーパーマーケット", data: tmpData120, borderColor: colors[0], borderWidth: 1, pointRadius: 0, backgroundColor: "rgba(255,255,255,0)"},
        { label: "コンビニエンスストア", data: tmpData220, borderColor: colors[1], borderWidth: 1, pointRadius: 0, backgroundColor: "rgba(255,255,255,0)"},
        { label: "ホームセンター", data: tmpData320, borderColor: colors[2], borderWidth: 1, pointRadius: 0, backgroundColor: "rgba(255,255,255,0)"},
        { label: "ドラッグストア", data: tmpData420, borderColor: colors[3], borderWidth: 1, pointRadius: 0, backgroundColor: "rgba(255,255,255,0)"},
        { label: "家電大型専門店", data: tmpData520, borderColor: colors[4], borderWidth: 1, pointRadius: 0, backgroundColor: "rgba(255,255,255,0)"},
        { label: "コロナ前スーパーマーケット", data: tmpData620, borderColor: colors[0], borderWidth: 1, pointRadius: 0, backgroundColor: "rgba(255,255,255,0)"},
        { label: "コロナ前コンビニエンスストア", data: tmpData720, borderColor: colors[1], borderWidth: 1, pointRadius: 0, backgroundColor: "rgba(255,255,255,0)"},
        { label: "コロナ前ホームセンター", data: tmpData820, borderColor: colors[2], borderWidth: 1, pointRadius: 0, backgroundColor: "rgba(255,255,255,0)"},
        { label: "コロナ前ドラッグストア", data: tmpData920, borderColor: colors[3], borderWidth: 1, pointRadius: 0, backgroundColor: "rgba(255,255,255,0)"},
        { label: "コロナ前家電大型専門店", data: tmpData1020, borderColor: colors[4], borderWidth: 1, pointRadius: 0, backgroundColor: "rgba(255,255,255,0)"},
      ]
    },

    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        
        xAxes: [{
          POS2ition: 'bottom',
          gridLines: {color: 'rgba(255, 255, 255, 0.1)',},
          ticks: {
            maxRotation: 0, 
            minRotation: 0,
            autoSkip: true,
            maxTicksLimit: 20, //値の最大表示数
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
        //POS2ition: 'top',
        labels: {
          fontColor: "white",
          fontSize: 10,
          boxWidth: 10,
        }
      },
    }

  });
}


function main20() {
  // 1) ajaxでCSVファイルをロード
  var req20 = new XMLHttpRequest();
  var filePath20 = './data/POS2.csv';
  req20.open("GET", filePath20, true);
  req20.onload = function() {
    // 2) CSVデータ変換の呼び出し
    data20 = csv2Array20(req20.responseText);
    // 3) chart.jsデータ準備、20) chart.js描画の呼び出し
    drawBarChart20(data20);
  }
  req20.send(null);
}

main20();

$('#mychart').css('height','100%');



