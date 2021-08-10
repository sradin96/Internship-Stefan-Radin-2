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

// kad se klikne btn sve aktivne klase treba da se obrisu i da se dodeli aktivna klasa kliknutom btn-u
// arrow treba da odradi animaciju preko css-a a ne preko jquery-a
// prvo proveri da li kliknuto dugme ima aktivnu klasu, ako ima, obrisi svima aktivne klase
// ako nema, obrisi svima aktivnu klasu i samo njemu dodeli istu klasu
// 

/*$('.question-link').click(function () {
	if(!$('.show-text').hasClass('active-state')){
		$('.fa-chevron-right').removeClass('angle-right').eq($(this).index('.question-link')).addClass('angle-right');
		$('.show-text').removeClass('active-state').eq($(this).index('.question-link')).addClass('active-state');
	}
	else if($('.show-text').hasClass('active-state')){
		$('.show-text').removeClass('active-state').eq($(this).index('.question-link')).removeClass('active-state');
		$('.fa-chevron-right').removeClass('angle-right');
	}
});*/

$('.question-link').click(function () {
	$('.show-text').removeClass('active-state').eq($(this).index('.question-link')).addClass('active-state');
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

$(".open-menu").click(function () {
	$(".open-menu").toggleClass("active-menu");
	$(".navigation-bar").toggleClass("show-menu");
  });