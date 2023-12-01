// Displaying X Labels Diagonally (Bar Chart)
var day_data = [
	{"period": "2017-10-28", "licensed": 4, "Nework": 2},
	{"period": "2017-10-25", "licensed": 4, "Nework": 2},
	{"period": "2017-10-20", "licensed": 4, "Nework": 2},
	{"period": "2017-10-16", "licensed": 4, "Nework": 2},
	{"period": "2017-10-13", "licensed": 4, "Nework": 2},
	{"period": "2017-10-10", "licensed": 4, "Nework": 2},
	{"period": "2017-10-05", "licensed": 4, "Nework": 2},
	{"period": "2017-10-01", "licensed": 4, "Nework": 2},
	{"period": "2017-09-30", "licensed": 5, "Nework": 1},
	{"period": "2017-09-29", "licensed": 8, "Nework": 4},
	{"period": "2017-09-20", "licensed": 2, "Nework": 2},
	{"period": "2017-09-19", "licensed": 7, "Nework": 6},
	{"period": "2017-09-18", "licensed": 4, "Nework": 3},
	{"period": "2017-09-17", "licensed": 7, "Nework": 7},
	{"period": "2017-09-16", "licensed": 8, "Nework": 2},
	{"period": "2017-09-15", "licensed": 9, "Nework": 3},
	{"period": "2017-09-10", "licensed": 2, "Nework": 9}
];
Morris.Bar({
	element: 'xLabelsDiagonally',
	data: day_data,
	xkey: 'period',
	ykeys: ['licensed', 'Nework'],
	labels: ['Licensed', 'Nework'],
	xLabelAngle: 45,
	gridLineColor: "#e1e5f1",
	resize: true,
	hideHover: "auto",
	barColors:['#01902d', '#007524', '#005f1d'],
});