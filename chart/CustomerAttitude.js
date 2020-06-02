var colors = ["#1BA0C3","#1BB4C3","#1BC3BD","#1BC3A9","#1BC380","#1BC36C"];

// 2) CSVから２次元配列に変換
function csv2Array11(str) {
  var csvData11 = [];
  var lines11 = str.split("\n");
  for (var i = 0; i < lines11.length; ++i) {
    var cells11 = lines11[i].split(",");
    csvData11.push(cells11);
  }
  return csvData11;
}

function drawBarChart11(data) {
  // 3)chart.jsのdataset用の配列を用意
  var tmpLabels11 = [], tmpData111 = [], tmpData211 = [], tmpData311 = [], tmpData411 = [];
  for (var row in data) {
    tmpLabels11.push(data[row][0])
    tmpData111.push(data[row][1])
    tmpData211.push(data[row][2])
    tmpData311.push(data[row][3])
    tmpData411.push(data[row][4])

  };
  var demo = document.getElementById("samurai6");
  demo.innerHTML = (data[row][2]-50).toFixed(1);

  // 11)chart.jsで描画
  var ctx11 = document.getElementById("CustomerAttitude").getContext("2d");
  var CustomerAttitude = new Chart(ctx11, {
    type: 'line',
    data: {
      labels: tmpLabels11,
      datasets: [
        { label: "給与所得", data: tmpData111, borderColor: colors[0], borderWidth: 1, pointRadius: 0,/* backgroundColor: "red" */},
        { label: "事業所得", data: tmpData211, borderColor: colors[1], borderWidth: 1, pointRadius: 0,/* backgroundColor: "blue" */},
        { label: "年金所得", data: tmpData311, borderColor: colors[2], borderWidth: 1, pointRadius: 0,/* backgroundColor: "red" */},
        { label: "その他", data: tmpData411, borderColor: colors[3], borderWidth: 1, pointRadius: 0,/* backgroundColor: "red" */},
      ]
    },

    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        
        xAxes: [{
          CustomerAttitudeition: 'bottom',
          gridLines: {color: 'rgba(255, 255, 255, 0.1)',},
          ticks: {
            maxRotation: 0, 
            minRotation: 0,
            autoSkip: true,
            maxTicksLimit: 11, //値の最大表示数
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
        //CustomerAttitudeition: 'top',
        labels: {
          fontColor: "white",
          fontSize: 10,
          boxWidth: 10,
        }
      },
    }

  });
}


function main11() {
  // 1) ajaxでCSVファイルをロード
  var req11 = new XMLHttpRequest();
  var filePath11 = './data/CustomerAttitude.csv';
  req11.open("GET", filePath11, true);
  req11.onload = function() {
    // 2) CSVデータ変換の呼び出し
    data11 = csv2Array11(req11.responseText);
    // 3) chart.jsデータ準備、11) chart.js描画の呼び出し
    drawBarChart11(data11);
  }
  req11.send(null);
}

main11();

$('#mychart').css('height','100%');


