$(document).ready(function() {
	var slickOpts = {
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  speed: 700,
	  dots: true,
	  arrows: false,
	};
	$('.slider').slick(slickOpts);
  });

$('.slider-2').slick({
    draggable: true,
    arrows: false,
    dots: true,
    fade: true,
    speed: 600,
    infinite: true,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    touchThreshold: 100,
	autoplay: true,
	autoplaySpeed: 2000,
	pauseOnFocus: true,
});

$('.nav-links').click(function () {
	$('.nav-links').removeClass('active').eq($(this).index('.nav-links')).addClass('active');
});

$('.question-link').on('click', function () {
	// if($('.show-text').hasClass('active-state')){
	// 	$('.show-text').removeClass('active-state');
	// }
	// else if(!$('.show-text').hasClass('active-state')){
	// 	$('.show-text').removeClass('active-state').eq($(this).index('.question-link')).addClass('active-state');
	// }
	const text = $(this).next();
	$('.show-text').removeClass('active-state');
	if(text.hasClass('active-state')) {
		text.removeClass('active-state');
	} 
	else {
		text.addClass('active-state');
	}
});

$('.tab').click(function () {
	$('.tab-text').removeClass('active-text').eq($(this).index('.tab')).addClass('active-text');
	$('.tab').removeClass('active-span-state').eq($(this).index('.tab')).addClass('active-span-state');
});

var lastScrollTop = 0;
$(document).ready(function(){
	$(window).scroll(function(){
		var scroll = $(this).scrollTop();
		if (scroll > lastScrollTop) {
			$(".top").removeClass('active-top-head');	
		}
		else {
			$(".top").addClass('active-top-head');	
		}
		if ($(window).width() > 1024 && scroll > lastScrollTop) {
			$(".bottom").removeClass('active-bottom-head');
		}
		else {
			$(".bottom").addClass('active-bottom-head');
		}
		lastScrollTop = scroll;
	})
})

$(".single-image").fancybox();

$(".open-menu").click(function () {
	$(".open-menu").toggleClass("active-menu");
	$(".navigation-bar").toggleClass("show-menu");
});

