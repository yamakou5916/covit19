// 2) CSVから２次元配列に変換
function csv2Array2(str) {
  var csvData2 = [];
  var lines2 = str.split("\n");
  for (var i = 0; i < lines2.length; ++i) {
    var cells2 = lines2[i].split(",");
    csvData2.push(cells2);
  }
  return csvData;
}

function drawBarChart2(data) {
  // 3)chart.jsのdataset用の配列を用意
  var tmpLabels2 = [], tmpData12 = [], tmpData22 = [], tmpData32 = [], tmpData42 = [], tmpData52 = [], tmpData62 = [];
  for (var row in data) {
    tmpLabels2.push(data[row][0])
    tmpData12.push(data[row][1])
    tmpData22.push(data[row][2])
    tmpData32.push(data[row][3])
    tmpData42.push(data[row][4])
    tmpData52.push(data[row][5])
    tmpData62.push(data[row][6])
  };

  // 4)chart.jsで描画
  var ctx2 = document.getElementById("AppleMobility").getContext("2d");
  var AppleMobility = new Chart(ctx2, {
    type: 'line',
    data: {
      labels: tmpLabels2,
      datasets: [
        { label: "retail & recreation", data: tmpData1, borderColor: 'rgb(255, 99, 132)', borderWidth: 1, pointRadius: 0,/* backgroundColor: "red" */},
        { label: "grocery & pharmacy", data: tmpData2, borderColor: 'rgb(255, 99, 132)', borderWidth: 1, pointRadius: 0,/* backgroundColor: "blue" */},
		{ label: "parks", data: tmpData3, borderColor: 'rgb(255, 99, 132)', borderWidth: 1, pointRadius: 0,/* backgroundColor: "red" */},
        { label: "transit stations", data: tmpData4, borderColor: 'rgb(255, 99, 132)', borderWidth: 1, pointRadius: 0,/* backgroundColor: "blue" */},
		{ label: "workplaces", data: tmpData5, borderColor: 'rgb(255, 99, 132)', borderWidth: 1, pointRadius: 0,/* backgroundColor: "red" */},
        { label: "residential", data: tmpData6, borderColor: 'rgb(255, 99, 132)', borderWidth: 1, pointRadius: 0,/* backgroundColor: "blue" */},
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
  var req2 = new XMLHttpRequest();
  var filePath2 = './data/AppleMobility.csv';
  req2.open("GET", filePath, true);
  req2.onload = function() {
    // 2) CSVデータ変換の呼び出し
    data2 = csv2Array2(req.responseText);
    // 3) chart.jsデータ準備、4) chart.js描画の呼び出し
    drawBarChart2(data2);
  }
  req2.send(null);
}

main2();




