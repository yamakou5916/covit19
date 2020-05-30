var colors = ["#1BA0C3","#1BB4C3","#1BC3BD","#1BC3A9","#1BC380","#1BC36C"];

// 2) CSVから２次元配列に変換
function csv2Array13(str) {
  var csvData13 = [];
  var lines13 = str.split("\n");
  for (var i = 0; i < lines13.length; ++i) {
    var cells13 = lines13[i].split(",");
    csvData13.push(cells13);
  }
  return csvData13;
}

function drawBarChart13(data) {
  // 3)chart.jsのdataset用の配列を用意
  var tmpLabels13 = [], tmpData113 = [], tmpData213 = [], tmpData313 = [];
  for (var row in data) {
    tmpLabels13.push(data[row][0])
    tmpData113.push(data[row][1])
    tmpData213.push(data[row][2])
    tmpData313.push(data[row][3])

  };

  // 13)chart.jsで描画
  var ctx13 = document.getElementById("Unemployment").getContext("2d");
  var Unemployment = new Chart(ctx13, {
    type: 'line',
    data: {
      labels: tmpLabels13,
      datasets: [
        { label: "完全失業率", data: tmpData113, borderColor: colors[0], borderWidth: 1, pointRadius: 0, yAxisID: "y-axis-1", backgroundColor: "rgba(255,255,255,0)"},
        { label: "労働力人口比率", data: tmpData213, borderColor: colors[1], borderWidth: 1, pointRadius: 0, yAxisID: "y-axis-2", backgroundColor: "rgba(255,255,255,0)"},
        { label: "就業率", data: tmpData313, borderColor: colors[2], borderWidth: 1, pointRadius: 0, yAxisID: "y-axis-2", backgroundColor: "rgba(255,255,255,0)"},
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
          }
        }, {
          id: "y-axis-2",
          type: "linear", 
          position: "right",
          ticks: {
            fontColor: "white",
            fontSize: 10,
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


function main13() {
  // 1) ajaxでCSVファイルをロード
  var req13 = new XMLHttpRequest();
  var filePath13 = './data/Unemployment.csv';
  req13.open("GET", filePath13, true);
  req13.onload = function() {
    // 2) CSVデータ変換の呼び出し
    data13 = csv2Array13(req13.responseText);
    // 3) chart.jsデータ準備、13) chart.js描画の呼び出し
    drawBarChart13(data13);
  }
  req13.send(null);
}

main13();


$('#mychart').css('height','100%');



