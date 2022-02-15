$(function() {

	$('.links').eq(0).click(function() {
		$('.mainContent').empty();
		let $about = '<p>Olivia Isabel Rodrigo is an American singer-songwriter and actress. She is known for her roles as Paige Olvera on the Disney Channel series Bizaardvark and Nini Salazar-Roberts on the Disney+ mockumentary series High School Musical: The Musical: The Series. <br><br><a href="https://en.wikipedia.org/wiki/Olivia_Rodrigo">Click here for the source</a><p>';
		$('.mainContent').html($about);
	})

	$('.links').eq(1).click(function() {
		$('.links').removeClass('selected');
		$(this).addClass('selected');
		$('.section').empty();
		let $video = '<iframe width="560" height="315" src="https://www.youtube.com/embed/SRh-i61xY80" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
		$('.mainContent').html($video);
		

	})

	$('.links').eq(2).click(function() {
		$('.links').removeClass('selected');
		$(this).addClass('selected');
		$('.mainContent').empty();
		let $nyphoto = '<img src="pic1.jpg">';
		$('.mainContent').html($nyphoto);
		
	})

	$('.links').eq(3).click(function() {
		$('.links').removeClass('selected');
		$(this).addClass('selected');
		$('.mainContent').empty();
		let $concerts = ' <img src="tourdates.jpeg">';
		$('.mainContent').html($concerts);
	})

});