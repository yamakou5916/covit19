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
  var tmpLabels7 = [], tmpData17 = [], tmpData27 = [], tmpData37 = [];
  for (var row in data) {
    tmpLabels7.push(data[row][0])
    tmpData17.push(data[row][1])
    tmpData27.push(data[row][2])
  };

  // 7)chart.jsで描画
  var ctx7 = document.getElementById("POS").getContext("2d");
  var POS = new Chart(ctx7, {
  type: 'bar',  
    data: {
      labels: tmpLabels7,
      datasets: [
        {  label: "倒産数", data: tmpData17, borderColor: 'rgb(57, 127, 189)', borderWidth: 1, pointRadius: 0, yAxisID: "y-axis-1", backgroundColor: 'rgba(57, 127, 189, 0.5)'},
        { type: 'line',label: "transit", data: tmpData27, borderColor: 'rgb(91, 192, 170)', borderWidth: 1, pointRadius: 0,yAxisID: "y-axis-2",/* backgroundColor: "blue" */},
      ]
    },

    options: {
      scales: {
        
        xAxes: [{
          position: 'bottom',
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




