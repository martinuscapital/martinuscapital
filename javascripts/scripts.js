$(document).ready(function(){
	(function ($) {

	  $('.model-item').click( function() {
	  	var $filterName = ($(this).data('model'))
	  	var $filtered = $('[data-model-target=' + $filterName + ']')
	  	var $allTargets = $('[data-model-target]')
			
			$(this).addClass('active');
	  	$(this).siblings().removeClass('active');
	  	$allTargets.hide();
	  	$filtered.show();

		});

    $('.models-wrap').owlCarousel({
    	// mouseDrag:false,
    	autoplay:true,
  		loop:true,
  		nav:true,
  		dots:false,
  		center:true,
  		items:4,
  		margin:60,
  		0 : {
				mouseDrag:true,
				nav:false,
				items:1
	    }
    });

    $('.menu-icon').click( function() {
    	$('header').toggleClass('menu-mobile-active');
    });

	})(jQuery);
});
