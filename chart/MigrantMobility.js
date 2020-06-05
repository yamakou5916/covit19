var colors = ["#7BDFF2","#B2F7EF","#EFF7F6","#F7D6E0","#F2B5D4","#DABFFF"];

// 2) CSVから２次元配列に変換
function csv2Array3(str) {
  var csvData3 = [];
  var lines3 = str.split("\n");
  for (var i = lines3.length-12; i < lines3.length; ++i) {
  //for (let i=0;i<12;i++){
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
    type: 'bar',
    data: {
      labels: tmpLabels3,
      datasets: [
        { label: "他道府県から東京都への転入者数【人】", data: tmpData13, borderColor: colors[0], borderWidth: 1, pointRadius: 0, backgroundColor: "rgba(255,255,255,0)"},
        { label: "東京都から他道府県への転出者数【人】", data: tmpData23, borderColor: colors[1], borderWidth: 1, pointRadius: 0, backgroundColor: "rgba(255,255,255,0)"},
        { label: "他都道府県からの転入者数【人】", data: tmpData33, borderColor: colors[2], borderWidth: 1, pointRadius: 0, backgroundColor: "rgba(255,255,255,0)"},
      ]
    },

    options: {
      title: {
        display: true,
        fontSize: 16,
        text: "転入者数",
        fontColor: "white", // 文字の色
        //position: 'left',
      },
      responsive: true,
      maintainAspectRatio: false,
    	scales: {
    		
    		xAxes: [{
          stacked: true,
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
          stacked: true,
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
          fontColor: "white",
    			fontSize: 10,
    			boxWidth: 10,
    		}
    	},
    }

  });
}


function main3() {
  // 1) ajaxでCSVファイルをロード
  var req3 = new XMLHttpRequest();
  var filePath3 = './data/MigrantMobility.csv';
  req3.open("GET", filePath3, true);
  req3.onload = function() {
    // 2) CSVデータ変換の呼び出し
    data3 = csv2Array3(req3.responseText);
    // 3) chart.jsデータ準備、4) chart.js描画の呼び出し
    drawBarChart3(data3);
  }
  req3.send(null);
}

main3();

$('#mychart').css('height','100%');



