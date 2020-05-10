// 2) CSVから２次元配列に変換
function csv2Array2(str) {
  var csvData2 = [];
  var lines2 = str.split("\n");
  for (var i = 0; i < lines2.length; ++i) {
    var cells2 = lines2[i].split(",");
    csvData2.push(cells2);
  }
  return csvData2;
}

function drawBarChart2(data) {
  // 3)chart.jsのdataset用の配列を用意
  var tmpLabels2 = [], tmpData12 = [], tmpData22 = [], tmpData32 = [];
  for (var row in data) {
    tmpLabels2.push(data[row][0])
    tmpData12.push(data[row][1])
    tmpData22.push(data[row][2])
    tmpData32.push(data[row][3])

  };

  // 4)chart.jsで描画
  var ctx2 = document.getElementById("AppleMobility").getContext("2d");
  var AppleMobility = new Chart(ctx2, {
    type: 'line',
    data: {
      labels: tmpLabels2,
      datasets: [
        { label: "driving", data: tmpData12, borderColor: 'rgb(57, 124, 189)', borderWidth: 1, pointRadius: 0,/* backgroundColor: "red" */},
        { label: "transit", data: tmpData22, borderColor: 'rgb(91, 192, 170)', borderWidth: 1, pointRadius: 0,/* backgroundColor: "blue" */},
        { label: "walking", data: tmpData32, borderColor: 'rgb(188, 250, 254)', borderWidth: 1, pointRadius: 0,/* backgroundColor: "red" */},
      ]
    },

    options: {
    	scales: {
    		xAxes: [{
    			position: 'bottom',
          gridLines: {color: 'rgba(255, 255, 255, 0.2)'},
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
          gridLines: {color: 'rgba(255, 255, 255, 0.2)',},
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


function main2() {
  // 1) ajaxでCSVファイルをロード
  var req2 = new XMLHttpRequest();
  var filePath2 = './data/AppleMobility.csv';
  req2.open("GET", filePath2, true);
  req2.onload = function() {
    // 2) CSVデータ変換の呼び出し
    data2 = csv2Array2(req2.responseText);
    // 3) chart.jsデータ準備、4) chart.js描画の呼び出し
    drawBarChart2(data2);
  }
  req2.send(null);
}

main2();

