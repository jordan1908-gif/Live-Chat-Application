var options = {
  chart: {
    height: 300,
    type: 'bar',
    stacked: true,
    zoom: {
			enabled: false
		},
  },
  dataLabels: {
		enabled: false
	},
  plotOptions: {
    bar: {
      horizontal: true,
    },
  },
  stroke: {
    width: 1,
    colors: ['#fff']
  },
  series: [{
    name: 'Marine Sprite',
    data: [44, 55, 41, 37, 22, 43, 21]
  },{
    name: 'Striking Calf',
    data: [53, 32, 33, 52, 13, 43, 32]
  },{
    name: 'Tank Picture',
    data: [12, 17, 11, 9, 15, 11, 20]
  },{
    name: 'Bucket Slope',
    data: [9, 7, 5, 8, 6, 9, 4]
  },{
    name: 'Reborn Kid',
    data: [25, 12, 19, 32, 25, 24, 10]
  }],
  title: {
    text: 'Fiction Books Sales',
    align: 'center'
  },
  xaxis: {
    categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
    labels: {
      formatter: function(val) {
        return val + "K"
      }
    }
  },
  yaxis: {
    title: {
      text: undefined
    },
  },
  tooltip: {
    y: {
      formatter: function(val) {
      	return val + "K"
    	}
	  }
	},
	fill: {
		opacity: 1
	},
	legend: {
	  position: 'top',
	  horizontalAlign: 'left',
	  offsetX: 40
	},
	colors: ['#005f1d', '#007524', '#01902d', '#00bb3a', '#5bca7d'],
}
var chart = new ApexCharts(
  document.querySelector("#basic-bar-stack-graph"),
  options
);
chart.render();