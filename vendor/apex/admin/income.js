var options = {
  chart: {
    height: 300,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
    width: 3
  },
  series: [{
    name: 'Overall Income',
    data: [5000, 8000, 7000, 8000, 5000, 3000, 4000]
  }],
  grid: {
    row: {
      colors: ['transparent'], // takes an array which will be repeated on columns
      opacity: 0.2
    },
  },
  xaxis: {
    type: 'day',
    categories: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],                
  },
  colors: ['#666666', '#01902d'],
  markers: {
    size: 5,
    colors: ['#666666', '#01902d'],
    strokeColor: "#fff",
    strokeWidth: 2,
    hover: {
      size: 7,
    }
  },
}

var chart = new ApexCharts(
  document.querySelector("#income"),
  options
);

chart.render();
