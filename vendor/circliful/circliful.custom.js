$( document ).ready(function() {



	$("#overallSales").circliful({
		animation: 1,
		animationStep: 5,
		foregroundBorderWidth: 16,
		backgroundBorderWidth: 10,
		percent: 92,
		textStyle: 'font-size: 12px;',
		fontColor: '#000000',
		foregroundColor: '#333333',
		backgroundColor: '#e0e3e8',
		multiPercentage: 1,
		percentages: [10, 20, 30],
	});
	$("#overallExpenses").circliful({
		animation: 1,
		animationStep: 5,
		foregroundBorderWidth: 16,
		backgroundBorderWidth: 10,
		percent: 78,
		fontColor: '#000000',
		foregroundColor: '#01902d',
		backgroundColor: '#e0e3e8',
		multiPercentage: 1,
		percentages: [10, 20, 30]
	});
	$("#overallIncome").circliful({
		animation: 1,
		animationStep: 5,
		foregroundBorderWidth: 16,
		backgroundBorderWidth: 10,
		percent: 80,
		fontColor: '#000000',
		foregroundColor: '#01902d',
		backgroundColor: '#e0e3e8',
		multiPercentage: 1,
		percentages: [10, 20, 30]
	});





	// With Icons
	$("#overallProgress").circliful({
		animationStep: 5,
		foregroundBorderWidth: 12,
		backgroundBorderWidth: 6,
		percent: 78,
		fontColor: '#000000',
		foregroundColor: '#01902d',
		backgroundColor: 'rgba(0, 0, 0, 0.1)',
		icon: '\ea63',
		iconColor: '#01902d',
		iconPosition: 'middle',
		text: 'Project',
		textBelow: true,
		animation: 1,
		animationStep: 1,
		start: 2,
		showPercent: 1,		
	});


	$("#projectPlanning").circliful({
		animationStep: 5,
		foregroundBorderWidth: 12,
		backgroundBorderWidth: 7,
		percent: 100,
		fontColor: '#000000',
		foregroundColor: '#01902d',
		backgroundColor: 'rgba(0, 0, 0, 0.1)',
		icon: '\ea1b',
		iconColor: '#01902d',
		iconPosition: 'middle',
		textBelow: true,
		animation: 1,
		animationStep: 1,
		start: 2,
		showPercent: 1,		
	});
	

	$("#projectDesign").circliful({
		animationStep: 5,
		foregroundBorderWidth: 12,
		backgroundBorderWidth: 7,
		percent: 100,
		fontColor: '#000000',
		foregroundColor: '#01902d',
		backgroundColor: 'rgba(0, 0, 0, 0.1)',
		icon: '\ea40',
		iconColor: '#01902d',
		iconPosition: 'middle',
		textBelow: true,
		animation: 1,
		animationStep: 1,
		start: 2,
		showPercent: 1,
	});


	$("#projectDevelopment").circliful({
		animationStep: 5,
		foregroundBorderWidth: 12,
		backgroundBorderWidth: 7,
		percent: 80,
		fontColor: '#000000',
		foregroundColor: '#01902d',
		backgroundColor: 'rgba(0, 0, 0, 0.1)',
		icon: '\ea01',
		iconColor: '#01902d',
		iconPosition: 'middle',
		textBelow: true,
		animation: 1,
		animationStep: 1,
		start: 2,
		showPercent: 1,
	});


	$("#projectTesting").circliful({
		animationStep: 5,
		foregroundBorderWidth: 12,
		backgroundBorderWidth: 7,
		percent: 3,
		fontColor: '#000000',
		foregroundColor: '#8796af',
		backgroundColor: 'rgba(0, 0, 0, 0.1)',
		icon: '\ea71',
		iconColor: '#8796af',
		iconPosition: 'middle',
		textBelow: true,
		animation: 1,
		animationStep: 1,
		start: 2,
		showPercent: 1,
	});

});

