$(function() {
	var a = document.body, e = document.documentElement;
	$(".scroll").click(function(event) {
		event.preventDefault();
		$('html,body').animate({
			scrollTop : $(this.hash).offset().top
		}, 2000, 'easeInOutExpo');
	});

	function mouseEventHandler() {
		$(document).mousemove(function(e) {
			var realtiveX = Math.round((e.pageX * 100) / $(window).width());
			var realtiveY = Math.round((e.pageY * 100) / $(window).height());

			var x_rel_3 = 280 - (15 * realtiveX) / 100;
			var x_rel_2 = 300 - (60 * realtiveX) / 100;
			var x_rel_1 = 350 - (100 * realtiveX) / 100;

			var y_rel_3 = 100 - (50 * realtiveY) / 100;
			var y_rel_2 = 150 - (150 * realtiveY) / 100;
			var y_rel_1 = 300 - (300 * realtiveY) / 100;

			mainPositionX = x_rel_1;
			mainPositionY = y_rel_1;

			$('.card.one').css({
				paddingLeft : x_rel_1,
				paddingTop : y_rel_1
			});
			$('.card.two').css({
				paddingLeft : x_rel_2,
				paddingTop : y_rel_2
			});
			$('.card.three').css({
				paddingLeft : x_rel_3,
				paddingTop : y_rel_3
			});
		});
	}

	var viewport = $(window).width();
	if (viewport >= 700) {
		mouseEventHandler()
	}

});
