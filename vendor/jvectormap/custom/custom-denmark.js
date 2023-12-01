// Denmark
$(function(){
	$('#mapDenmark').vectorMap({
		map: 'dk_mill',
		zoomOnScroll: false,
		regionStyle:{
			initial: {
				fill: '#01902d',
			},
			hover: {
				"fill-opacity": 0.8
			},
			selected: {
				fill: '#1146bf'
			},
		},
		backgroundColor: 'transparent',
	});
});