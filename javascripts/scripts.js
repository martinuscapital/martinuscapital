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
  		autoplay:true,
  		loop:true,
  		dots:false,
  		center:true,
  		stagePadding:20,
  		margin:60,
  		0 : {
  			nav:false,
        items:1
	    },
	    640 : {
  			mouseDrag:false,
  			nav:true,
        items:5
	    }
    });

    $('.menu-icon').click( function() {
    	$('header').toggleClass('menu-mobile-active');
    });

	})(jQuery);
});
