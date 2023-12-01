var options = {
	chart: {
		height: 200,
		type: 'bar',
		toolbar: {
			show: false,
		},
	},
	plotOptions: {
		bar: {
			columnWidth: '50%',
			dataLabels: {
				position: 'top', // top, center, bottom
			},
		}
	},
	series: [{
		name: 'Overall sales',
		data: [52, 73, 34, 66, 82, 49]
	}],
	xaxis: {
		categories: ["usa", "india", "canada", "brazil", "turkey", "uk"],
		axisBorder: {
			show: false
		},
		tooltip: {
			enabled: true,
		},
		labels: {
			show: true,
			rotate: -45,
			rotateAlways: true,
		},
	},
	yaxis: {
		axisBorder: {
			show: false
		},
		axisTicks: {
			show: false,
		},
	},
	grid: {
		padding: {
			left: 10,
			right: 0
		}
	},
	tooltip: {
		y: {
			formatter: function(val) {
				return "$" + val + " thousands"
			}
		}
	},
	colors: ['#01902d', '#999999'],
}
var chart = new ApexCharts(
	document.querySelector("#avg-handle-time"),
	options
);
chart.render();
