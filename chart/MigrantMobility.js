// 2) CSVから２次元配列に変換
function csv2Array3(str) {
  var csvData3 = [];
  var lines3 = str.split("\n");
  for (var i = 0; i < lines3.length; ++i) {
    var cells3 = lines3[i].split(",");
    csvData3.push(cells3);
  }
  return csvData3;
}

function drawBarChart3(data) {
  // 3)chart.jsのdataset用の配列を用意
  var tmpLabels3 = [], tmpData13 = [], tmpData23 = [], tmpData33 = [];
  for (var row in data) {
    tmpLabels3.push(data[row][0])
    tmpData13.push(data[row][1])
    tmpData23.push(data[row][2])
    tmpData33.push(data[row][3])

  };

  // 4)chart.jsで描画
  var ctx3 = document.getElementById("MigrantMobility").getContext("2d");
  var CountryMobility = new Chart(ctx3, {
    type: 'line',
    data: {
      labels: tmpLabels3,
      datasets: [
        { label: "driving", data: tmpData13, borderColor: 'rgb(57, 124, 189)', borderWidth: 1, pointRadius: 0,/* backgroundColor: "red" */},
        { label: "transit", data: tmpData23, borderColor: 'rgb(91, 192, 170)', borderWidth: 1, pointRadius: 0,/* backgroundColor: "blue" */},
        { label: "walking", data: tmpData33, borderColor: 'rgb(188, 250, 254)', borderWidth: 1, pointRadius: 0,/* backgroundColor: "red" */},
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
  var req3 = new XMLHttpRequest();
  var filePath3 = './data/MigrantMobility.csv';
  req3.open("GET", filePath2, true);
  req3.onload = function() {
    // 2) CSVデータ変換の呼び出し
    data3 = csv2Array3(req3.responseText);
    // 3) chart.jsデータ準備、4) chart.js描画の呼び出し
    drawBarChart3(data3);
  }
  req3.send(null);
}

main3();




