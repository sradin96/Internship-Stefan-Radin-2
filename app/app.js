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
    speed: 1000,
    infinite: true,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    touchThreshold: 100
  })

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
