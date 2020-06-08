var colors = ["#7BDFF2","#B2F7EF","#EFF7F6","#F7D6E0","#F2B5D4","#DABFFF",];
var employrate = 0;
var beforeafter = [0,0,0,0,0,0,0,0,0,0,0,0,0]

// 2) CSVから２次元配列に変換
function csv2Array12(str,a) {
  var csvData12 = [];
  var lines12 = str.split("\n");
  if(a == "a"){
    var num0 = 12;
    var num1 = 0;
  }else{
    var num0 = 24;
    var num1 = 12;
  }
  for (var i = lines12.length-num0; i < lines12.length-num1; ++i) {
  //for (let i=0;i<12;i++){
    var cells12 = lines12[i].split(",");
    csvData12.push(cells12);
  }
  for (var j = lines12.length-13; j < lines12.length; ++j) {
    beforeafter[j] = lines12[j].split(",");
  }
  //employrate = ((beforeafter[0]/beforeafter[13]-1)*100).toFixed(1);
  employrate = 10;
  return csvData12;
}

function drawBarChart12(data) {
  // 3)chart.jsのdataset用の配列を用意
  var tmpData12 = [[],[],[],[],[],[],[]];
  for (var row in data) {
    tmpData12[0].push(data[row][0])
    tmpData12[1].push(data[row][1])
    tmpData12[2].push(data[row][2])
    tmpData12[3].push(data[row][3])
    tmpData12[4].push(data[row][4])
    tmpData12[5].push(data[row][5]-data[row][4])
  };
  var demo = document.getElementById("samurai4");
  demo.innerHTML = (data[row][2]-50).toFixed(1);
  //employrate = (data[row][2]-50).toFixed(1);

  // 12)chart.jsで描画
  var ctx12 = document.getElementById("EmploymentStatus").getContext("2d");
  var EmploymentStatus = new Chart(ctx12, {
    type: 'bar', 
    data: {
      labels: tmpData12[0],
      datasets: [
        { label: "非労働力人口", data: tmpData12[1], borderColor: colors[0], borderWidth: 1, pointRadius: 0, yAxisID: "y-axis-1", backgroundColor: colors[0]},
        { label: "完全失業者", data: tmpData12[2], borderColor: colors[1], borderWidth: 1, pointRadius: 0, yAxisID: "y-axis-1", backgroundColor: colors[1]},
        { label: "非正規の職員・従業員", data: tmpData12[3], borderColor: colors[2], borderWidth: 1, pointRadius: 0, yAxisID: "y-axis-1", backgroundColor: colors[2]},
        { label: "正規の職員・従業員", data: tmpData12[4], borderColor: colors[3], borderWidth: 1, pointRadius: 0, yAxisID: "y-axis-1", backgroundColor: colors[3]},
        { label: "役員等", data: tmpData12[5], borderColor: colors[4], borderWidth: 1, pointRadius: 0, yAxisID: "y-axis-1", backgroundColor: colors[4]},
      ]
    },

    options: {
      title: {
        display: true,
        fontSize: 16,
        text: "雇用形態別の人口",
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
          ticks: {maxRotation: 0, minRotation: 0, autoSkip: true, maxTicksLimit: 5, fontColor: "white", fontSize: 10,}
        }],
        yAxes: [{
          stacked: true,
          id: "y-axis-1", 
          type: "linear", 
          position: "left",
          gridLines: {color: 'rgba(255, 255, 255, 0.1)',},
          ticks: {fontColor: "white",fontSize: 10,}
        }],/* {
          id: "y-axis-2",
          type: "linear", 
          position: "right",
          ticks: {fontColor: "white", fontSize: 10,},
        }],*/
      },
      legend: {
        display: true,
        //position: 'top',
        labels: {
          fontColor: "white",
          fontSize: 10,
          boxWidth: 10,
        },
      },
    }
  });
}



//リフレッシュ
function main12(a) {
  // 1) ajaxでCSVファイルをロード
  var req12 = new XMLHttpRequest();
  var filePath12 = './data/EmploymentStatus.csv';
  req12.open("GET", filePath12, true);
  req12.onload = function() {
    // 2) CSVデータ変換の呼び出し
    data12 = csv2Array12(req12.responseText,a);
    // 3) chart.jsデータ準備、12) chart.js描画の呼び出し
    drawBarChart12(data12);
  }
  req12.send(null);
}

function func2() {
  // form要素を取得
  var element = document.getElementById( "target2" );
  // form要素内のラジオボタングループ(name="hoge")を取得
  var radioNodeList = element.hoge;
  // 選択状態の値(value)を取得 (Bが選択状態なら"b"が返る)
  var a = radioNodeList.value;
  if ( a === "" ) {
    // 未選択状態
  } else {
    // aには選択状態の値が代入されている
    //console.log( a ) ;
    main12(a)
  }
}

function ratedata4(){
  return employrate;
}

var element = document.getElementById( "target2" );
var radioNodeList = element.hoge;
radioNodeList[0].checked = true;
func2();

$('#mychart').css('height','100%');



