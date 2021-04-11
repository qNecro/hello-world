(function($) {

	// $("a").click(function(event){
	// 	event.preventDefault();
	// });

//pridanie atr selected jednemu elementu a odobranie vsetkym innym
	$('.controls').find('a').on('click', function(event) {
	
		$(this)
			.parent().addClass('selected') // toto rodicovi (li element) prida class selected
			.siblings().removeClass('selected'); // toto surodencom rodica (vsetky ostatne li) odoberie class selected
	
		// zabranime klasickej akcii, nech nikam neodideme
		event.preventDefault();
		
	});
// prepinanie medzi galeriamy 
	var galleries = $('.gallery-set'),
		menuLinks = $('.controls a');

	// skryjeme vsetky galerie, okrem prvej
	galleries.not(':first').hide();

	// po kliknuti na link ideme robit veci
	menuLinks.on('click', function(event) {

		// ked sa pozrieme do HTML, vidime, ze hodnota href linku sa rovna idcku prislusnej sekcie
		var id = $(this).attr('href');

		// skryjeme galerie
		galleries.hide();

		// kedze href je rovny idcku galeriu, mozeme ju podla neho vytiahnut a nechat zobrazit
		// toto je to iste, ako keby sme napisali napr. $('#video').fadeIn();
		$(id).fadeIn(400);

		// klasika
		event.preventDefault();

	});
	
//zmena opacity a velkosti ked sa prejde myskou cez jednotlive obrazky
	var gallery = $(".gallery"),
		startingOpacity = gallery.find('img').css("opacity");

	gallery.find("img").on("mouseenter mouseleave", function(event){

		var opacity = event.type === "mouseenter" ? 1 : startingOpacity;
		$(this).stop().fadeTo(0.3, opacity);
	});
//overlay po kliknuti na obrazok aby sa otvorila vo velkom rozliseni 
	var overlay = $('<div/>' , { id: 'overlay'});
		overlay.appendTo('body').hide();

	gallery.find("a").on("click", function(){

		var href  = $(this).attr('href'),
			image = $('<img>', {src : href});

			overlay.html( image ).show();

		// overlay.show();
		event.preventDefault;
		
	});
	overlay.on('click', function (){
		overlay.hide();
	});

	$(document).on("keyup" , function(){
		if ( event.which === 27 ) overlay.hide();
	});





	




})(jQuery);