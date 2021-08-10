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

$('.question-link').click(function () {
	if(!$('.show-text').hasClass('active-state')){
		$('.fa-chevron-right').removeClass('angle-right').eq($(this).index('.question-link')).addClass('angle-right');
		$('.show-text').removeClass('active-state').eq($(this).index('.question-link')).addClass('active-state');
		
	}
	else if($('.show-text').hasClass('active-state')){
		$('.show-text').removeClass('active-state').eq($(this).index('.question-link')).removeClass('active-state');
		$('.fa-chevron-right').removeClass('angle-right');
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
		  	$(".top").css({"transform": "translateY(-100%)" , "transition": "all .2s ease-out"});
		}
		else {
			$(".top").css({"transform": "translateY(0%)"});  	
		}
		if ($(window).width() > 1024 && scroll > lastScrollTop) {
			$(".bottom").css({"transform": "translateY(-50%)" , "transition": "all .2s ease-out"});
			$(".navigation").css({"paddingLeft": "30px", "paddingRight": "30px", "transition": "all .2s ease-out"});
		}
		else if($(window).width() <= 1024 && scroll > lastScrollTop){
			$(".bottom").css({"transform": "translateY(-10%)" , "transition": "all .2s ease-out"});
			$(".navigation").css({"paddingLeft": "20px", "paddingRight": "20px", "transition": "all .2s ease-out"});
		}
		else {
			$(".bottom").css({"transform": "translateY(0%)"});  
			$(".navigation").css({"paddingLeft": "0px", "paddingRight": "0px"});
		}
		lastScrollTop = scroll;
	})
})

$(".open-menu").click(function () {
	$(".open-menu").toggleClass("active-menu");
	$(".navigation-bar").toggleClass("show-menu");
  });