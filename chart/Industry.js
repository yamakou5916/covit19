var colors = ["#1BA0C3","#1BB4C3","#1BC3BD","#1BC3A9","#1BC380","#1BC36C"];

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
        { label: "全産業活動指数", data: tmpData110, borderColor: colors[0], borderWidth: 1, pointRadius: 0, backgroundColor: "rgba(255,255,255,0)"},
        { label: "建設業活動指数", data: tmpData210, borderColor: colors[1], borderWidth: 1, pointRadius: 0, backgroundColor: "rgba(255,255,255,0)"},
        { label: "鉱工業生産指数", data: tmpData310, borderColor: colors[2], borderWidth: 1, pointRadius: 0, backgroundColor: "rgba(255,255,255,0)"},
        { label: "第３次産業活動指数", data: tmpData410, borderColor: colors[3], borderWidth: 1, pointRadius: 0, backgroundColor: "rgba(255,255,255,0)"},
      ]
    },

    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        
        xAxes: [{
          Industryition: 'bottom',
          gridLines: {color: 'rgba(255, 255, 255, 0.1)',},
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
          gridLines: {color: 'rgba(255, 255, 255, 0.1)',},
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
          fontColor: "white",
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


$('#mychart').css('height','100%');


