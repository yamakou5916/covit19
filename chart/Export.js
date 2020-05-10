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
        { label: "driving", data: tmpData16, borderColor: 'rgb(67, 126, 189)', borderWidth: 1, pointRadius: 0,/* backgroundColor: "red" */},
        { label: "transit", data: tmpData26, borderColor: 'rgb(91, 192, 170)', borderWidth: 1, pointRadius: 0,/* backgroundColor: "blue" */},
        { label: "walking", data: tmpData36, borderColor: 'rgb(188, 260, 266)', borderWidth: 1, pointRadius: 0,/* backgroundColor: "red" */},
      ]
    },

    options: {
      scales: {
        
        xAxes: [{
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




