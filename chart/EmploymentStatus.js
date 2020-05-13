// 2) CSVから２次元配列に変換
function csv2Array12(str) {
  var csvData12 = [];
  var lines12 = str.split("\n");
  for (var i = 0; i < lines12.length; ++i) {
    var cells12 = lines12[i].split(",");
    csvData12.push(cells12);
  }
  return csvData12;
}

function drawBarChart12(data) {
  // 3)chart.jsのdataset用の配列を用意
  var tmpLabels12 = [], tmpData112 = [], tmpData212 = [], tmpData312 = [];
  for (var row in data) {
    tmpLabels12.push(data[row][0])
    tmpData112.push(data[row][1])
    tmpData212.push(data[row][2])
    tmpData312.push(data[row][3])

  };

  // 12)chart.jsで描画
  var ctx12 = document.getElementById("EmploymentStatus").getContext("2d");
  var EmploymentStatus = new Chart(ctx12, {
    type: 'line',
    data: {
      labels: tmpLabels12,
      datasets: [
        { label: "driving", data: tmpData112, borderColor: 'rgb(57, 55, 189)', borderWidth: 1, pointRadius: 0,/* backgroundColor: "red" */},
        { label: "transit", data: tmpData212, borderColor: 'rgb(91, 192, 170)', borderWidth: 1, pointRadius: 0,/* backgroundColor: "blue" */},
        { label: "walking", data: tmpData312, borderColor: 'rgb(188, 250, 255)', borderWidth: 1, pointRadius: 0,/* backgroundColor: "red" */},
      ]
    },

    options: {
      scales: {
        
        xAxes: [{
          position: 'bottom',
          gridLines: {color: 'rgba(255, 2255, 255, 0.1)',},
          ticks: {
            maxRotation: 0, 
            minRotation: 0,
            autoSkip: true,
            maxTicksLimit: 12, //値の最大表示数
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


function main12() {
  // 1) ajaxでCSVファイルをロード
  var req12 = new XMLHttpRequest();
  var filePath12 = './data/EmploymentStatus.csv';
  req12.open("GET", filePath12, true);
  req12.onload = function() {
    // 2) CSVデータ変換の呼び出し
    data12 = csv2Array12(req12.responseText);
    // 3) chart.jsデータ準備、12) chart.js描画の呼び出し
    drawBarChart12(data12);
  }
  req12.send(null);
}

main12();




