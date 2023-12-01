var options = {
	chart: {
		height: 240,
		type: 'area',
		toolbar: {
			show: false,
		},
	},
	dataLabels: {
		enabled: false
	},
	stroke: {
		curve: 'smooth',
		width: 3
	},
	series: [{
		name: 'Sales',
		data: [100, 600, 400, 900]
	}],
	grid: {
		row: {
			colors: ['transparent'], // takes an array which will be repeated on columns
			opacity: 0.2,
		},
		xaxis: {
      lines: {
        show: false
      }
    },   
    yaxis: {
      lines: {
        show: false
      }
    },
	},
	xaxis: {
		categories: ['Pizzas', 'Burgers', 'Sandwich', 'Coffee'],
		// labels: {
	 //    show: false
	 //  }
	},
	colors: ['#01902d', '#333333'],
	markers: {
		size: 5,
		opacity: 0.2,
		colors: ["#01902d"],
		strokeColor: "#ffffff",
		strokeWidth: 2,
		hover: {
			size: 7,
		}
	},
	tooltip: {
		y: {
			formatter: function(val) {
				return  "$" + val + 'k'
			}
		}
	},
}

var chart = new ApexCharts(
	document.querySelector("#compare-expenses"),
	options
);

chart.render();
