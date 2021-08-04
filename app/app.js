$(function () {
	$(document).scroll(function () {
	  var $nav = $(".bottom");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
  });



$('.main-slider').slick({
	dots: true,
	infinite: false,
	speed: 1000,
	slidesToShow: 1,
	slidesToScroll: 1,
});

/* 
  <div class="container">
		<div class="row slider">
			<div class="col-md-12">
				<div class="details">
					<h2>Head</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				</div>
			</div>
			<div class="col-md-12">
				<div class="details">
					<h2>Head</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				</div>
			</div>
			<div class="col-md-12">
				<div class="details">
					<h2>Head</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				</div>
			</div>
			<div class="col-md-12">
				<div class="details">
					<h2>Head</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				</div>
			</div>
			<div class="col-md-12">
				<div class="details">
					<h2>Head</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				</div>
			</div>
		</div>
	</div>

*/