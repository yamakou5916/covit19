var colors = ["#1BA0C3","#1BB4C3","#1BC3BD","#1BC3A9","#1BC380","#1BC36C"];

// 2) CSVから２次元配列に変換
function csv2Array6(str) {
  var csvData6 = [];
  var lines6 = str.split("\n");
  for (var i = 0; i < lines6.length; ++i) {
    var cells6 = lines6[i].split(",");
    csvData6.push(cells6);
  }
  return csvData6;
}

function drawBarChart6(data) {
  // 3)chart.jsのdataset用の配列を用意
  var tmpLabels6 = [], tmpData16 = [], tmpData26 = [], tmpData36 = [];
  for (var row in data) {
    tmpLabels6.push(data[row][0])
    tmpData16.push(data[row][1])
    tmpData26.push(data[row][2])
    tmpData36.push(data[row][3])

  };

  // 6)chart.jsで描画
  var ctx6 = document.getElementById("Export").getContext("2d");
  var Export = new Chart(ctx6, {
    type: 'line',
    data: {
      labels: tmpLabels6,
      datasets: [
        { label: "食料品", data: tmpData16, borderColor: colors[0], borderWidth: 1, pointRadius: 0, backgroundColor: "rgba(255,255,255,0)"},
        { label: "原料品", data: tmpData26, borderColor: colors[1], borderWidth: 1, pointRadius: 0, backgroundColor: "rgba(255,255,255,0)"},
        { label: "鉱物性燃料", data: tmpData36, borderColor: colors[2], borderWidth: 1, pointRadius: 0, backgroundColor: "rgba(255,255,255,0)"},
      ]
    },

    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        
        xAxes: [{
          stacked: true,
          position: 'bottom',
          gridLines: {color: 'rgba(255, 255, 255, 0.1)',},
          ticks: {
            maxRotation: 0, 
            minRotation: 0,
            autoSkip: true,
            maxTicksLimit: 6, //値の最大表示数
            fontColor: "white", // 文字の色
                    fontSize: 10,
          }
        }],
        yAxes: [{
          stacked: true,
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
          fontSize: 10,
          boxWidth: 10,
        }
      },
    }

  });
}


function main6() {
  // 1) ajaxでCSVファイルをロード
  var req6 = new XMLHttpRequest();
  var filePath6 = './data/Export.csv';
  req6.open("GET", filePath6, true);
  req6.onload = function() {
    // 2) CSVデータ変換の呼び出し
    data6 = csv2Array6(req6.responseText);
    // 3) chart.jsデータ準備、6) chart.js描画の呼び出し
    drawBarChart6(data6);
  }
  req6.send(null);
}

main6();


$('#mychart').css('height','100%');


