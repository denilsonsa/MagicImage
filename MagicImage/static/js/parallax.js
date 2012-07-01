$(function() {
    var a = document.body,
        e = document.documentElement;
    $(window).unbind("scroll").scroll(function () {
        a.style.backgroundPosition = "0px " + -(Math.max(e.scrollTop, a.scrollTop) / 9) + "px"
    })
	$(".scroll").click(function(event){		
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 400);
	});
	
	$(document).mousemove(function(e) {
		var realtiveX = Math.round((e.pageX * 100) / $(window).width());
		var realtiveY = Math.round((e.pageY * 100) / $(window).height());
		var mouseDiference = Math.floor((e.pageX / $(window).width()) * 100);
		var x_rel_3 = 38 - (35 * realtiveX) / 100;
		var x_rel_2 = 60 - (100 * realtiveX) / 100;
		var x_rel_1 = 80 - (200 * realtiveX) / 100;
		var y_rel_3 = 0 - (40 * realtiveY) / 100;
		var y_rel_2 = 110 - (150 * realtiveY) / 100;
		var y_rel_1 = 225 - (325 * realtiveY) / 100;
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
});
