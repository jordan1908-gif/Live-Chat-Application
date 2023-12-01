var options = {
	chart: {
		height: 350,
		type: 'area',
	},
	dataLabels: {
		enabled: false
	},
	stroke: {
		curve: 'smooth',
		width: 3
	},
	series: [{
		name: 'Le Rouge Admin',
		data: [3100, 4000, 2800, 5100, 4200, 1090, 1000]
	}, {
		name: 'Le Rouge Dashboard',
		data: [1100, 3200, 4500, 3200, 3400, 5200, 4100]
	}],
	grid: {
		row: {
			colors: ['#ffffff'], // takes an array which will be repeated on columns
			opacity: 0.5
		},
	},
	xaxis: {
		type: 'datetime',
		categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00"],                
	},
	theme: {
		monochrome: {
			enabled: true,
			color: '#01902d',
			shadeIntensity: 0.1
		},
	},
	markers: {
		size: 0,
		opacity: 0.2,
		colors: ["#01902d"],
		strokeColor: "#fff",
		strokeWidth: 2,
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
	document.querySelector("#basic-area-spline-graph"),
	options
);

chart.render();
