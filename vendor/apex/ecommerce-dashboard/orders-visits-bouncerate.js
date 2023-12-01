var options = {
	chart: {
		height: 270,
		type: 'bar',
		toolbar: {
			show: false,
		},
	},
	plotOptions: {
		bar: {
			horizontal: false,
			columnWidth: '50%',
		},
	},
	dataLabels: {
		enabled: false
	},
	stroke: {
		show: true,
		width: 2,
		colors: ['transparent']
	},
	series: [{
		name: 'Visits',
		data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
	}, {
		name: 'Orders',
		data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
	}, {
		name: 'Revenue',
		data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
	}],
	xaxis: {
		categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
	},
	yaxis: {
		title: {
			text: '$(thousands)'
		}
	},
	fill: {
		opacity: 1
	},
	tooltip: {
		y: {
			formatter: function(val) {
				return "$" + val + " thousands"
			}
		}
	},
	grid: {
		row: {
			colors: ['transparent'], // takes an array which will be repeated on columns
			opacity: 0.5
		},
	},
	colors: ['#01902d', '#666666', '#999999'],
}
var chart = new ApexCharts(
	document.querySelector("#orders-visits"),
	options
);
chart.render();
