// 2) CSVから２次元配列に変換
function csv2Array10(str) {
  var csvData10 = [];
  var lines10 = str.split("\n");
  for (var i = 0; i < lines10.length; ++i) {
    var cells10 = lines10[i].split(",");
    csvData10.push(cells10);
  }
  return csvData10;
}

function drawBarChart10(data) {
  // 3)chart.jsのdataset用の配列を用意
  var tmpLabels10 = [], tmpData110 = [], tmpData210 = [], tmpData310 = [], tmpData410 = [];
  for (var row in data) {
    tmpLabels10.push(data[row][0])
    tmpData110.push(data[row][1])
    tmpData210.push(data[row][2])
    tmpData310.push(data[row][3])
    tmpData410.push(data[row][4])
  };

  // 10)chart.jsで描画
  var ctx10 = document.getElementById("Industry").getContext("2d");
  var Industry = new Chart(ctx10, {
    type: 'line',
    data: {
      labels: tmpLabels10,
      datasets: [
        { label: "全産業活動指数", data: tmpData110, borderColor: 'rgb(99, 129, 189)', borderWidth: 1, pointRadius: 0,/* backgroundColor: "red" */},
        { label: "建設業活動指数", data: tmpData210, borderColor: 'rgb(91, 192, 190)', borderWidth: 1, pointRadius: 0,/* backgroundColor: "blue" */},
        { label: "鉱工業生産指数", data: tmpData310, borderColor: 'rgb(188, 290, 299)', borderWidth: 1, pointRadius: 0,/* backgroundColor: "red" */},
        { label: "第３次産業活動指数", data: tmpData410, borderColor: 'rgb(99, 129, 189)', borderWidth: 1, pointRadius: 0,/* backgroundColor: "red" */},
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
            maxTicksLimit: 10, //値の最大表示数
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


function main10() {
  // 1) ajaxでCSVファイルをロード
  var req10 = new XMLHttpRequest();
  var filePath10 = './data/Industry.csv';
  req10.open("GET", filePath10, true);
  req10.onload = function() {
    // 2) CSVデータ変換の呼び出し
    data10 = csv2Array10(req10.responseText);
    // 3) chart.jsデータ準備、10) chart.js描画の呼び出し
    drawBarChart10(data10);
  }
  req10.send(null);
}

main10();




