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
    touchThreshold: 100
});

$('.question-link').click(function () {
	$('.fa-angle-right').removeClass('angle-right').eq($(this).index('.question-link')).addClass('angle-right');
	$('.show-text').removeClass('active-state').eq($(this).index('.question-link')).addClass('active-state');
});

$('.tab').click(function () {
	$('.tab-text').removeClass('active-text').eq($(this).index('.tab')).addClass('active-text');
	$('.tab').removeClass('active-span-state').eq($(this).index('.tab')).addClass('active-span-state');
});

$(document).ready(function(){
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if (scroll > 60) {
		  $(".top").css("transform" , "translateY(-100%)");
		  $(".top").css("transition" , "all .2s ease-out");  
		}
  
		else {
			$(".top").css("transform" , "translateY(0%)");  
			$(".top").css("transition" , "all .2s ease-in");  	
		}
		if (scroll > 60) {
			$(".bottom").css("transform" , "translateY(-50%)");
			$(".bottom").css("transition" , "all .2s ease-in");
		  }	
		  else {
			  $(".bottom").css("transform" , "translateY(0%)");  	
			  $(".bottom").css("transition" , "all .2s ease-in");
		  }
	})
})

$(document).ready(function() {
	$(".single-image").fancybox();	
});