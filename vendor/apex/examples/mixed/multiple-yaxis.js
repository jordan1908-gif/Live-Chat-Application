var options = {
	chart: {
		height: 320,
		type: 'line',
		stacked: false,
		toolbar: {
			show: false,
		},
	},
	dataLabels: {
		enabled: false
	},
	series: [{
		name: 'Orders',
		type: 'column',
		data: [4, 2, 2, 5, 6, 8, 8, 7]
	},{
		name: 'Sales',
		type: 'column',
		data: [2, 3, 1, 4, 5, 9, 5, 8]
	},{
		name: 'Revenue',
		type: 'line',
		data: [20, 10, 15, 36, 44, 45, 50, 58]
	}],
	stroke: {
		width: [1, 1, 3]
	},
	title: {
		text: 'Overall income in millon dollors form online and offline sales from 2010 to 2018.',
		align: 'center',
	},
	colors: ['#01902d', '#00bb3a', '#333333'],
	xaxis: {
		categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
	},
	yaxis: [{
		axisTicks: {
			show: true,
		},
		axisBorder: {
			show: true,
			color: '#01902d'
		},
		labels: {
			style: {
				color: '#01902d',
			}
		},
		title: {
			text: "Orders (in thousands)",
			style: {
				color: '#01902d',
			}
		},
		tooltip: {
			enabled: true
		}
	},{
			seriesName: 'Orders',
			opposite: true,
			axisTicks: {
				show: true,
			},
			axisBorder: {
				show: true,
				color: '#00bb3a'
			},
			labels: {
				style: {
					color: '#00bb3a',
				}
			},
			title: {
				text: "Sales (in thousand)",
				style: {
					color: '#00bb3a',
				}
			},
		},{
			seriesName: 'Revenue',
			opposite: true,
			axisTicks: {
				show: true,
			},
			axisBorder: {
				show: true,
				color: '#333333'
			},
			labels: {
				style: {
					color: '#333333',
				},
			},
			title: {
				text: "Revenue (in crores)",
				style: {
					color: '#333333',
				}
			}
		},
	],
	legend: {
		horizontalAlign: 'center',
		offsetY: -5
	}
}

var chart = new ApexCharts(
	document.querySelector("#multiple-yaxis"),
	options
);
chart.render();