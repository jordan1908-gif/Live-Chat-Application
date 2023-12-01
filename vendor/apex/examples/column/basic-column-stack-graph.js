var options = {
  chart: {
    height: 350,
    type: 'bar',
    stacked: true,
    toolbar: {
      show: false
    },
    zoom: {
      enabled: true
    }
  },
  responsive: [{
    breakpoint: 480,
    options: {
      legend: {
        position: 'bottom',
        offsetX: -10,
        offsetY: 0
      }
    }
  }],
  plotOptions: {
    bar: {
      horizontal: false,
    },
  },
  dataLabels: {
    enabled: true
  },
  series: [{
    name: 'Product A',
    data: [44, 55, 41, 67, 22, 43]
  },{
    name: 'Product B',
    data: [13, 23, 20, 8, 13, 27]
  },{
    name: 'Product C',
    data: [11, 17, 15, 15, 21, 14]
  },{
    name: 'Product D',
    data: [21, 7, 25, 13, 22, 8]
  }],
  xaxis: {
    type: 'datetime',
    categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT', '01/05/2011 GMT', '01/06/2011 GMT'],
  },
  legend: {
    position: 'top',
    offsetY: 10
  },
  fill: {
    opacity: 1
  },
  colors: ['#005f1d', '#007524', '#01902d', '#00bb3a', '#5bca7d'],
}
var chart = new ApexCharts(
  document.querySelector("#basic-column-stack-graph"),
  options
);
chart.render();


