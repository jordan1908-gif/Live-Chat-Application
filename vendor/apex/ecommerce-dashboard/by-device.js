var options = {
	chart: {
		height: 230,
		type: 'donut',
	},
	labels: ['Desktop', 'Tablet', 'Mobile'],
	series: [60000, 45000, 15000],
	legend: {
		position: 'bottom',
	},
	dataLabels: {
		enabled: false
	},
	stroke: {
		width: 10,
		colors: ['#eceff3'],
	},
	colors: ['#01902d', '#999999', '#CCCCCC'],
	tooltip: {
		y: {
			formatter: function(val) {
				return  "$" + val
			}
		}
	},
}
var chart = new ApexCharts(
	document.querySelector("#budget"),
	options
);
chart.render();