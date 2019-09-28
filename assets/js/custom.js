$(document).ready(function(){

	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
		offset: 75
	});

	// Collapse Navbar
	var navbarCollapse = function() {
		if ($("#mainNav").offset().top > 100 ) {
			$("#mainNav").addClass("navbar-scrolled");
		} else {
			$("#mainNav").removeClass("navbar-scrolled");
		}
	};
	// Collapse now if page is not at top
	navbarCollapse();
	// Collapse the navbar when page is scrolled
	$(window).scroll(navbarCollapse);

	// Smooth scrolling 
	$(function(){
		$('a.tracked[href*="#"]').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var $target = $(this.hash);
				$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
				if ($target.length) {
					var targetOffset = $target.offset().top;
					$('html,body').animate({scrollTop: targetOffset}, {duration:1000,easing:'easeInOutExpo'});
					return false;
				}
			}
		});
	});

	$('.card-toggle').on('click', function () {
		if ($(this).find('svg').attr('data-icon') == 'plus-square' ) {
			$(this).find('svg').attr('data-icon', 'minus-square');
		} else {
			$(this).find('svg').attr('data-icon', 'plus-square');
		};
	});

});

