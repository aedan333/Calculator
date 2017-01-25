$(function(){
	
	$('.js--show-alert').click(function(){
		$('.js--alert').slideDown("fast");
	});

	$('.js--alert-close').click(function(){
		$('.js--alert').slideUp("fast");
	});

});