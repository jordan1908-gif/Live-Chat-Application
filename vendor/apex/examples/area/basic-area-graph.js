var series = 
{
	"monthDataSeries1": {
		"prices": [
			9107,
			9128,
			9122,
			9165,
			9340,
			8423,
			8423,
			8514,
			8481,
			8487,
			8506,
			8881,
			9340
		],
		"dates": [
			"13 Nov 2018",
			"14 Nov 2018",
			"15 Nov 2018",
			"16 Nov 2018",
			"17 Nov 2018",
			"20 Nov 2018",
			"21 Nov 2018",
			"22 Nov 2018",
			"23 Nov 2018",
			"24 Nov 2018",
			"27 Nov 2018",
			"28 Nov 2018",
			"29 Nov 2018",
		]
	}
}


var options = {
	chart: {
		height: 300,
		type: 'area',
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
		name: "Le Rouge Admin",
		data: series.monthDataSeries1.prices
	}],
	title: {
		text: 'Fundamental Analysis of Stocks',
		align: 'center'
	},
	grid: {
		row: {
			colors: ['#ffffff'], // takes an array which will be repeated on columns
			opacity: 0.5
		},
	},
	labels: series.monthDataSeries1.dates,
	xaxis: {
		type: 'datetime',
	},
	yaxis: {
		opposite: true
	},
	legend: {
		horizontalAlign: 'left'
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
}

var chart = new ApexCharts(
	document.querySelector("#basic-area-graph"),
	options
);

chart.render();