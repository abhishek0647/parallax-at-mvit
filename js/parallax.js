$(document).ready(function() {
	
	$(window).bind('scroll', function(e) {
		parallax();
	});
	
	$('a.mvit').click(function() {
		$('html, body').animate({ scrollTop:0 }, 1000,
			function() {
				parallax();
			});
		return false;
	});
	
	$('a.new-block').click(function() {
		$('html, body').animate({ scrollTop:$('#new-block').offset().top }, 1000,
			function() {
				parallax();
			});
		return false;
	});
	
	$('a.cse-ise').click(function() {
		$('html, body').animate({ scrollTop:$('#cse-ise').offset().top }, 1000,
			function() {
				parallax();
			});
		return false;
	});
	
	$('a.campus').click(function() {
		$('html, body').animate({ scrollTop:$('#campus').offset().top }, 1000,
			function() {
				parallax();
			});
		return false;
	});


	$('a.developers').click(function() {
		$('html, body').animate({ scrollTop:$('#developers').offset().top }, 1000,
			function() {
				parallax();
			});
		return false;
	});
	
});

function parallax() {
	var scrollPosition = $(window).scrollTop();
	$('#stars').css('top', (0 - (scrollPosition * .2)) + 'px');
	$('#images').css('top', (0 - (scrollPosition * .5)) + 'px');
}