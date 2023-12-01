var options = {
  chart: {
    height: 275,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth',
    width: 4
  },
  series: [{
    name: 'Claimed',
    data: [300, 400, 600, 500, 700]
  }, {
    name: 'Expired',
    data: [100, 200, 400, 300, 500]
  }],
  grid: {
    row: {
      colors: ['#ffffff'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  xaxis: {
    type: 'day',
    categories: ["Sun", "Mon", "Tue", "Wedn", "Thu"], 
    labels: {
      show: true,
      rotate: -25,
      rotateAlways: true,
    },               
  },
  colors: ['#01902d', '#777777'],
  markers: {
    size: 5,
    opacity: 0.2,
    colors: ['#01902d', '#777777'],
    strokeColor: "#fff",
    strokeWidth: 3,
    hover: {
      size: 7,
    }
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy'
    },
  }
}

var chart = new ApexCharts(
  document.querySelector("#deals"),
  options
);

chart.render();
