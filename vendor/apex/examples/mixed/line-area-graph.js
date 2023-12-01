var options = {
	chart: {
		height: 350,
		type: 'line',
		zoom: {
			enabled: false
		},
	},
	stroke: {
		curve: 'straight'
	},
	series: [{
		name: 'TEAM A',
		type: 'area',
		data: [40, 55, 35, 45, 30, 35, 27, 32, 33, 41, 30]
	}, {
		name: 'TEAM B',
		type: 'line',
		data: [20, 40, 25, 35, 20, 35, 37, 52, 44, 61, 60]
	}],
	fill: {
		type:'solid',
		opacity: [0.35, 1],
	},
	labels: ['Dec 01', 'Dec 02','Dec 03','Dec 04','Dec 05','Dec 06','Dec 07','Dec 08','Dec 09 ','Dec 10','Dec 11'],
	markers: {
		size: 0
	},
	yaxis: [
		{
			title: {
				text: 'Series A',
			},
		},
		{
			opposite: true,
			title: {
				text: 'Series B',
			},
		},
	],
	tooltip: {
		shared: true,
		intersect: false,
		y: {
			formatter: function (y) {
				if(typeof y !== "undefined") {
					return  y.toFixed(0) + " points";
				}
				return y;
				
			}
		}
	},
	colors: ['#005f1d', '#444444'],
}
var chart = new ApexCharts(
	document.querySelector("#line-area-graph"),
	options
);
chart.render();