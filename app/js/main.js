$(function(){
	function sizing(){
		$('#backCanvas').attr({height:$(window).height()}).attr({width:$(window).width()});
	}

	window.onload = function() {
		var canvas = document.getElementsByTagName('canvas')[0];
		var codeElm = document.getElementById('processing-code');
		var code = codeElm.textContent || codeElm.innerText;

		Processing(canvas, code);
	};

	sizing();
	$(window).resize(function(){
		sizing();
	});

	$(window).scroll(function(){
		if($(this).scrollTop() > 400){
			$('#menu-left').addClass('small');
			$('#menu-right').addClass('move');
		}else{
			$('#menu-left').removeClass('small');
			$('#menu-right').removeClass('move');
		}
	});

	$('#menu-left a').bind('click', function(e){
		e.preventDefault();
		var target = $($(this).attr('href')).offset();
		var targetHeight = $($(this).attr('href')).height();
		$('html,body').animate({scrollTop: target.top - $(window).height() / 2 + targetHeight / 2 + 'px'}, 500, 'easeInOutQuad');
	});

	$('#itson img').bind('click', function(){
		if($('#itsonDetail').css('height') == '0px'){
			$('#itsonBox').animate({height: 340}, 500);
			$('#itsonDetail')
				.css({'overflow': 'visible'})
				.animate({height: 290}, 500);
		}else if($('#itsonDetail').css('height') == '290px'){
			$('#itsonBox').animate({height: 0}, 500);
			$('#itsonDetail')
				.css({'overflow': 'hidden'})
				.animate({height: 0}, 500);
		}
	});

	$('#log img').bind('click', function(){
		if($('#logDetail').css('height') == '0px'){
			$('#logBox').animate({height: 340}, 500);
			$('#logDetail')
				.css({'overflow': 'visible'})
				.animate({height: 290}, 500);
		}else if($('#logDetail').css('height') == '290px'){
			$('#logBox').animate({height: 0}, 500);
			$('#logDetail')
				.css({'overflow': 'hidden'})
				.animate({height: 0}, 500);
		}
	});

	$('#festival img').bind('click', function(){
		if($('#festivalDetail').css('height') == '0px'){
			$('#festivalBox').animate({height: 340}, 500);
			$('#festivalDetail')
				.css({'overflow': 'visible'})
				.animate({height: 290}, 500);
		}else if($('#festivalDetail').css('height') == '290px'){
			$('#festivalBox').animate({height: 0}, 500);
			$('#festivalDetail')
				.css({'overflow': 'hidden'})
				.animate({height: 0}, 500);
		}
	});

	$('#test img').bind('click', function(){
		if($('#testDetail').css('height') == '0px'){
			$('#testBox').animate({height: 340}, 500);
			$('#testDetail')
				.css({'overflow': 'visible'})
				.animate({height: 290}, 500);
		}else if($('#testDetail').css('height') == '290px'){
			$('#testBox').animate({height: 0}, 500);
			$('#testDetail')
				.css({'overflow': 'hidden'})
				.animate({height: 0}, 500);
		}
	});
});