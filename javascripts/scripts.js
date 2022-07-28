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
  		items:5,
  		loop:true,
  		nav:true,
  		dots:false,
  		center:true,
  		stagePadding:20,
  		margin:60
    });

	})(jQuery);
});
