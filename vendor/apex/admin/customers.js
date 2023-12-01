var options = {
  chart: {
    height: 193,
    type: 'donut',
  },
  labels: ['New', 'Returned'],
  legend: {
    show: false,
  },
  series: [700, 300],
  stroke: {
    width: 1,
  },
  colors: ['#01902d', '#666666'],
}
var chart = new ApexCharts(
  document.querySelector("#customers"),
  options
);
chart.render();