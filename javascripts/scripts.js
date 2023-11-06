$(document).ready(function(){
	(function ($) {
		clicarEmElementosAos10Segundos();
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
function clicarEmElementosAos10Segundos() {
  const elementos = document.querySelectorAll('.model-item'); // Obtém todos os elementos com a classe .model-item
  let indice = 0;

  function cliqueAutomatico() {
    if (indice < elementos.length) {
      elementos[indice].click(); // Aciona o evento de clique no elemento atual
      indice++;
    } else {
      clearInterval(intervalo); // Encerra o intervalo quando todos os elementos foram clicados
    }
  }

  const intervalo = setInterval(cliqueAutomatico, 10000); // Define um intervalo de 10 segundos (10000 milissegundos)
}
