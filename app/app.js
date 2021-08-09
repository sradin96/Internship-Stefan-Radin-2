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

	}else{
		$('.show-text').removeClass('active-state');
		$('.fa-chevron-right').removeClass('angle-right');
	}
		
});

$('.tab').click(function () {
	$('.tab-text').removeClass('active-text').eq($(this).index('.tab')).addClass('active-text');
	$('.tab').removeClass('active-span-state').eq($(this).index('.tab')).addClass('active-span-state');
});

$(document).ready(function(){
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if (scroll > 60) {
		  $(".top").css({"transform": "translateY(-100%)" , "transition": "all .2s ease-out"});
		}
  
		else {
			$(".top").css({"transform": "translateY(0%)" , "transition": "all .2s ease-out"});  	
		}
		if (scroll > 60) {
			$(".bottom").css({"transform": "translateY(-50%)" , "transition": "all .2s ease-out"});
		  }	
		  else {
			  $(".bottom").css({"transform": "translateY(0%)" , "transition": "all .2s ease-out"});  	
		  }
	})
})

$(document).ready(function() {
	$("a.single-image").fancybox();	
});
