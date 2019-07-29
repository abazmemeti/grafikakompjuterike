$(document).ready(function(){

	$('#kopertina-scroll').click(function(){
		$('html, body').animate({scrollTop:$('#kopertina').position().top}, 2500);
		return false;
	});

	$('#parathenie-scroll').click(function(){
		$('html, body').animate({scrollTop:$('#parathenie').position().top}, 2500);
		return false;
	});
	
	$('#hyrje-scroll').click(function(){
		$('html, body').animate({scrollTop:$('#hyrje').position().top}, 2500);
		return false;
	});

	$('#nocioni-scroll').click(function(){
		$('html, body').animate({scrollTop:$('#nocioni').position().top}, 2500);
		return false;
	});

	$('#teksti-scroll').click(function(){
		$('html, body').animate({scrollTop:$('#teksti').position().top}, 2500);
		return false;
	});

	$('#fotografit-scroll').click(function(){
		$('html, body').animate({scrollTop:$('#fotografit').position().top}, 2500);
		return false;
	});

	$('#audio-scroll').click(function(){
		$('html, body').animate({scrollTop:$('#audio').position().top}, 2500);
		return false;
	});

	$('#video-scroll').click(function(){
		$('html, body').animate({scrollTop:$('#video').position().top}, 2500);
		return false;
	});

	$('#animacioni-scroll').click(function(){
		$('html, body').animate({scrollTop:$('#animacioni').position().top}, 2500);
		return false;
	});

	$('#prezantimet-scroll').click(function(){
		$('html, body').animate({scrollTop:$('#prezantimet').position().top}, 2500);
		return false;
	});

	$('#projekti-scroll').click(function(){
		$('html, body').animate({scrollTop:$('#projekti').position().top}, 2500);
		return false;
	});

	$('#referencat-scroll').click(function(){
		$('html, body').animate({scrollTop:$('#referencat').position().top}, 2500);
		return false;
	});

$('input:checkbox').change(function(){
     if($(this).is(":checked")) {
        $('body').addClass("listimi-naten");
    } else {
        $('body').removeClass("listimi-naten");
    }
});

});