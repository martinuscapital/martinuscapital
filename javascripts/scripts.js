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

/** Códigos relacionados ao google translate */
var comboGoogleTradutor = null; //Varialvel global
function googleTranslateElementInit() {
	new google.translate.TranslateElement({
		pageLanguage: 'pt',
		includedLanguages: 'en,es,pt',
		layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL
	}, 'google_translate_element');

	comboGoogleTradutor = document.getElementById("google_translate_element").querySelector(".goog-te-combo");
}					
function changeEvent(el) {
	if (el.fireEvent) {
		el.fireEvent('onchange');
	} else {
		var evObj = document.createEvent("HTMLEvents");

		evObj.initEvent("change", false, true);
		el.dispatchEvent(evObj);
	}
}
function trocarIdioma(sigla) {
	if (comboGoogleTradutor) {
		comboGoogleTradutor.value = sigla;
		changeEvent(comboGoogleTradutor);//Dispara a troca
	}

	meuParagrafoElemento = jQuery('.skiptranslate');
	if (meuParagrafoElemento !== null) {
		jQuery(".skiptranslate").css({"display": "none"})
	}

}
