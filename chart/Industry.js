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
  var tmpLabels7 = [], tmpData17 = [], tmpData27 = [], tmpData37 = [], tmpData47 = []
  for (var row in data) {
    tmpLabels7.push(data[row][0])
    tmpData17.push(data[row][1])
    tmpData27.push(data[row][2])
    tmpData37.push(data[row][3])
    tmpData47.push(data[row][4])

  };

  // 7)chart.jsで描画
  var ctx7 = document.getElementById("Industry").getContext("2d");
  var Industry = new Chart(ctx7, {
    type: 'line',
    data: {
      labels: tmpLabels7,
      datasets: [
        { label: "全産業活動指数", data: tmpData17, borderColor: 'rgb(77, 127, 189)', borderWidth: 1, pointRadius: 0,/* backgroundColor: "red" */},
        { label: "建設業活動指数", data: tmpData27, borderColor: 'rgb(91, 192, 170)', borderWidth: 1, pointRadius: 0,/* backgroundColor: "blue" */},
        { label: "鉱工業生産指数", data: tmpData37, borderColor: 'rgb(188, 270, 277)', borderWidth: 1, pointRadius: 0,/* backgroundColor: "red" */},
        { label: "第３次産業活動指数", data: tmpData47, borderColor: 'rgb(77, 127, 189)', borderWidth: 1, pointRadius: 0,/* backgroundColor: "red" */},
      ]
    },

    options: {
      scales: {
        
        xAxes: [{
          Industryition: 'bottom',
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
  var filePath7 = './data/Industry.csv';
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




