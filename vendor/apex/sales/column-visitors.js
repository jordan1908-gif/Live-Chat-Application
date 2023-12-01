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
      columnWidth: '50%',
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
    name: 'Male',
    data: [44, 55, 57, 56]
  }, {
    name: 'Female',
    data: [76, 85, 101, 98]
  }],
  xaxis: {
    categories: ['Q1', 'Q2', 'Q3', 'Q4'],
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
}
var chart = new ApexCharts(
  document.querySelector("#column-visitors"),
  options
);
chart.render();
