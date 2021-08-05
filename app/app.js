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

$(document).ready(function(){
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if (scroll > 60) {
		  $(".top").css("transform" , "translateY(-100%)");
		}
  
		else {
			$(".top").css("transform" , "translateY(0%)");  	
		}
		if (scroll > 60) {
			$(".bottom").css("transform" , "translateY(-50%)");
		  }	
		  else {
			  $(".bottom").css("transform" , "translateY(0%)");  	
		  }
	})
})