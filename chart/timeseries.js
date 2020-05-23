/*
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
// The type of chart we want to create
type: 'line',
// The data for our dataset
data: {
	labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
	datasets: [{
		label: 'My First dataset',
		//backgroundColor: 'rgb(255, 99, 132)',
		borderColor: 'rgb(255, 99, 132)',
		data: [0, 10, 5, 2, 20, 30, 45]
	},{
		label: 'My Second dataset',
		//backgroundColor: 'rgb(255, 99, 132)',
		borderColor: 'rgb(255, 99, 132)',
		data: [2, 9, 14, 12, 10, 20, 35]
	}]
},
// Configuration options go here
options: {}
});
*/

var colors = ["#1BA0C3","#1BB4C3","#1BC3BD","#1BC3A9","#1BC380","#1BC36C"];


// 2) CSVから２次元配列に変換
function csv2Array(str) {
  var csvData = [];
  var lines = str.split("\n");
  for (var i = 0; i < lines.length; ++i) {
    var cells = lines[i].split(",");
    csvData.push(cells);
  }
  return csvData;
}

function drawBarChart(data) {
  // 3)chart.jsのdataset用の配列を用意
  var tmpLabels = [], tmpData1 = [], tmpData2 = [], tmpData3 = [], tmpData4 = [], tmpData5 = [], tmpData6 = [];
  for (var row in data) {
    tmpLabels.push(data[row][0])
    tmpData1.push(data[row][1])
    tmpData2.push(data[row][2])
    tmpData3.push(data[row][3])
    tmpData4.push(data[row][4])
    tmpData5.push(data[row][5])
    tmpData6.push(data[row][6])
  };

  // 4)chart.jsで描画
  var ctx = document.getElementById("myChart").getContext("2d");
  //var myChart = new Chart(ctx, {
  var config = {
    type: 'line',
    data: {
      labels: tmpLabels,
      labelTextColor : '#ffffff',
      labelColor : '#ffffff',
      datasets: [
        { label: "小売店と娯楽施設", data: tmpData1, borderColor: colors[0], borderWidth: 1, pointRadius: 0,/* backgroundColor: "red" */},
        { label: "食料品店と薬局", data: tmpData2, borderColor: colors[1], borderWidth: 1, pointRadius: 0,/* backgroundColor: "blue" */},
        { label: "公園", data: tmpData3, borderColor: colors[2], borderWidth: 1, pointRadius: 0,/* backgroundColor: "red" */},
        { label: "公共交通機関", data: tmpData4, borderColor: colors[3], borderWidth: 1, pointRadius: 0,/* backgroundColor: "blue" */},
        { label: "職場", data: tmpData5, borderColor: colors[4], borderWidth: 1, pointRadius: 0,/* backgroundColor: "red" */},
        { label: "住居", data: tmpData6, borderColor: colors[5], borderWidth: 1, pointRadius: 0,/* backgroundColor: "blue" */},
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
    				maxTicksLimit: 5, //値の最大表示数
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
  }
  return config;
}

var timeseries;
change("line");

$("#line0").click(function() {
  change('line');
});

$("#bar0").click(function() {
  change('bar');
});

function change(newType) {
  if (timeseries) {
    timeseries.destroy();
  }
  // 1) ajaxでCSVファイルをロード
  var req = new XMLHttpRequest();
  var filePath = './data/timeseries.csv';
  req.open("GET", filePath, true);
  req.onload = function() {
    // 2) CSVデータ変換の呼び出し
    var ctx = document.getElementById("timeseries").getContext("2d");
    data = csv2Array(req.responseText);
    // 3) chart.jsデータ準備、12) chart.js描画の呼び出し
    var config = drawBarChart(data);
    var temp = jQuery.extend(true, {}, config);
    temp.type = newType;
    if(newType == line){temp.data = {labels: tmpLabels,datasets: [{ label: "小売店と娯楽施設", data: tmpData1, borderColor: colors[0], borderWidth: 1, pointRadius: 0,/* backgroundColor: "red" */},,]}}
    timeseries = new Chart(ctx, temp);
  }
  req.send(null);
}

