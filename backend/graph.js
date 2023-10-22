 xValues = [0, 1, 2, 3, 4, 5, 6, 7 , 8 , 9, 10];
 yValues = [7,8,8,9,9,9,10,11,14,14,15];

myChart = new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
    fill: false,
    lineTension: 0,
    backgroundColor: "rgba(0,0,255,1.0)",
    borderColor: "rgba(0,0,255,0.1)",
    data: yValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 6, max:yValues.max}, scaleLabel: {display : true, labelString: 'Pounds of Trash', fontSize: 20, color: 'green'}}],
        xAxes: [{ticks: {min: 0, max: xValues.length + 1}}]
    }
  }
});


document.getElementById("trashSubmit").onclick = function()
{
    console.log(1);
}