$(function(){
	
	var username = "aedan";
	var password = "topsecret";

	$('.js--login').click(function(){
		if($('.js--username').val() === username && $('.js--password').val()=== password){
			window.location.href = "https://aedan333.github.io/Calculator/"; 
		}
		else{
			$('.js--login-error').addClass('s-visible');
		}
	});

	
});