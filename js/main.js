
// Todays Date
$(function() {
	var interval = setInterval(function() {
		var momentNow = moment();
		$('#today-date').html(momentNow.format('DD') + ' ' + ' '
		+ momentNow.format('- dddd').substring(0, 12));
	}, 100);
});


$(function() {
	var interval = setInterval(function() {
		var momentNow = moment();
		$('#todays-date').html(momentNow.format('DD MMMM YYYY'));
	}, 100);
});




// Loading
$(function() {
	$("#loading-wrapper").fadeOut(3000);
});



// Textarea characters left
$(function() {
	$('#characterLeft').text('140 characters left');
	$('#message').keydown(function () {
		var max = 140;
		var len = $(this).val().length;
		if (len >= max) {
			$('#characterLeft').text('You have reached the limit');
			$('#characterLeft').addClass('red');
			$('#btnSubmit').addClass('disabled');            
		} 
		else {
			var ch = max - len;
			$('#characterLeft').text(ch + ' characters left');
			$('#btnSubmit').removeClass('disabled');
			$('#characterLeft').removeClass('red');            
		}
	});
});



// Todo list
$('.todo-body').on('click', 'li.todo-list', function() {
	$(this).toggleClass('done');
});



// Tasks
(function($) {
	var checkList = $('.task-checkbox'),
	toDoCheck = checkList.children('input[type="checkbox"]');
	toDoCheck.each(function(index, element) {
		var $this = $(element),
		taskItem = $this.closest('.task-block');
		$this.on('click', function(e) {
			taskItem.toggleClass('task-checked');
		});
	});
})(jQuery);



// Tasks Important Active
$('.task-actions').on('click', '.important', function() {
	$(this).toggleClass('active');
});



// Tasks Important Active
$('.task-actions').on('click', '.star', function() {
	$(this).toggleClass('active');
});



// Countdown
$(document).ready(function(){
  countdown();
  setInterval(countdown, 1000);
  function countdown () {
  var now = moment(), // get the current moment
    // May 28, 2013 @ 12:00AM
    then = moment([2020, 10, 7]),
    // get the difference from now to then in ms
    ms = then.diff(now, 'milliseconds', true);
    // If you need years, uncomment this line and make sure you add it to the concatonated phrase
    /*
    years = Math.floor(moment.duration(ms).asYears());
    then = then.subtract('years', years);
    */
    // update the duration in ms
    ms = then.diff(now, 'milliseconds', true);
    // get the duration as months and round down
    // months = Math.floor(moment.duration(ms).asMonths());
 
    // // subtract months from the original moment (not sure why I had to offset by 1 day)
    // then = then.subtract('months', months).subtract('days', 1);
    // update the duration in ms
    ms = then.diff(now, 'milliseconds', true);
    days = Math.floor(moment.duration(ms).asDays());
 
    then = then.subtract(days, 'days');
    // update the duration in ms
    ms = then.diff(now, 'milliseconds', true);
    hours = Math.floor(moment.duration(ms).asHours());
 
    then = then.subtract(hours, 'hours');
    // update the duration in ms
    ms = then.diff(now, 'milliseconds', true);
    minutes = Math.floor(moment.duration(ms).asMinutes());
 
    then = then.subtract(minutes, 'minutes');
    // update the duration in ms
    ms = then.diff(now, 'milliseconds', true);
    seconds = Math.floor(moment.duration(ms).asSeconds());
    
    // concatonate the variables
    diff = '<div class="num">' + days + ' <span class="text"> Days Left</span></div>';
    $('#daysLeft').html(diff);
  }
 
});






// Bootstrap JS ***********

// Tooltip
$(function () {
	$('[data-toggle="tooltip"]').tooltip()
})

$(function () {
	$('[data-toggle="popover"]').popover()
})









// Custom Sidebar JS
jQuery(function ($) {

	// Dropdown menu
	$(".sidebar-dropdown > a").click(function () {
		$(".sidebar-submenu").slideUp(200);
		if ($(this).parent().hasClass("active")) {
			$(".sidebar-dropdown").removeClass("active");
			$(this).parent().removeClass("active");
		} else {
			$(".sidebar-dropdown").removeClass("active");
			$(this).next(".sidebar-submenu").slideDown(200);
			$(this).parent().addClass("active");
		}
	});



	//toggle sidebar
	$("#toggle-sidebar").click(function () {
		$(".page-wrapper").toggleClass("toggled");
	});



	// Pin sidebar on click
	$("#pin-sidebar").click(function () {
		if ($(".page-wrapper").hasClass("pinned")) {
			// unpin sidebar when hovered
			$(".page-wrapper").removeClass("pinned");
			$("#sidebar").unbind( "hover");
		} else {
			$(".page-wrapper").addClass("pinned");
			$("#sidebar").hover(
				function () {
					console.log("mouseenter");
					$(".page-wrapper").addClass("sidebar-hovered");
				},
				function () {
					console.log("mouseout");
					$(".page-wrapper").removeClass("sidebar-hovered");
				}
			)
		}
	});



	// Pinned sidebar
	$(function() {
		$(".page-wrapper").hasClass("pinned");
		$("#sidebar").hover(
			function () {
				console.log("mouseenter");
				$(".page-wrapper").addClass("sidebar-hovered");
			},
			function () {
				console.log("mouseout");
				$(".page-wrapper").removeClass("sidebar-hovered");
			}
		)
	});




	// Toggle sidebar overlay
	$("#overlay").click(function () {
		$(".page-wrapper").toggleClass("toggled");
	});



	// Added by Srinu 
	$(function(){
		// When the window is resized, 
		$(window).resize(function(){
			// When the width and height meet your specific requirements or lower
			if ($(window).width() <= 768){
				$(".page-wrapper").removeClass("pinned");
			}
		});
		// When the window is resized, 
		$(window).resize(function(){
			// When the width and height meet your specific requirements or lower
			if ($(window).width() >= 768){
				$(".page-wrapper").removeClass("toggled");
			}
		});
	});


});