var options = {
	chart: {
		height: 350,
		type: 'line',
		zoom: {
			enabled: false
		}
	},
	dataLabels: {
		enabled: false
	},
	stroke: {
		curve: 'straight',
		width: 3,
	},
	series: [{
		name: "Macbooks",
		data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
	}],
	title: {
		text: 'Product Sales by Month',
		align: 'center'
	},
	grid: {
		row: {
			colors: ['#f5f9fe', '#ffffff'], // takes an array which will be repeated on columns
			opacity: 0.5
		},
	},
	xaxis: {
		categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
	},
	theme: {
		monochrome: {
			enabled: true,
			color: '#01902d',
			shadeIntensity: 0.1
		},
	},
	fill: {
		type: 'gradient',
		gradient: {
			shade: 'light',
			colors: ['#005f1d', '#007524', '#01902d', '#00bb3a', '#5bca7d'],
			shadeIntensity: 1,
			type: 'horizontal',
			opacityFrom: 1,
			opacityTo: 1,
			stops: [0, 100, 100, 100, 100]
		},
	},
	markers: {
		size: 0,
		opacity: 0.2,
		colors: ['#01902d'],
		strokeColor: "#fff",
		strokeWidth: 2,
		hover: {
			size: 7,
		}
	},
}

var chart = new ApexCharts(
	document.querySelector("#basic-line-graph"),
	options
);

chart.render();