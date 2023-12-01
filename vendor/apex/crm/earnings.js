var options = {
  chart: {
    height: 220,
    type: 'bar',
    toolbar: {
      show: false
    },
  },
  plotOptions: {
    bar: {
      columnWidth: '40%',
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 12,
    colors: ['transparent']
  },
  series: [{
    name: 'Earnings',
    data: [45, 60, 75, 90]
  }],
  xaxis: {
    categories: ['Report 1', 'Report 2', 'Report 3','Profit'],
  },
  fill: {
    opacity: 1
  },
  grid: {
    row: {
      colors: ['transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  colors: ['#01902d', '#999999'],
  tooltip: {
    y: {
      formatter: function(val) {
        return  "$" + val + 'k'
      }
    }
  },
}
var chart = new ApexCharts(
  document.querySelector("#earnings"),
  options
);
chart.render();
