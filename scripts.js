$(function(){
	
	$(".js-button").click(function(){
		alert("hi Aedan!");
	});

	$('.js-readout').text('0');

	$('.js-num0').click(function(){
		num += '0';
		$('.js-readout').text(num);
	});
	
	$('.js-num1').click(function(){
		num += '1';
		$('.js-readout').text(num);
	});
	
	$('.js-num2').click(function(){
		num += '2';
		$('.js-readout').text(num);
	});

	$('.js-num3').click(function(){
		num += '3';
		$('.js-readout').text(num);
	});



$('.js-num4').click(function(){
		num += '4';
		$('.js-readout').text(num);
	});

$('.js-num5').click(function(){
		num += '5';
		$('.js-readout').text(num);
	});

$('.js-num6').click(function(){
		num += '6';
		$('.js-readout').text(num);
	});

$('.js-num7').click(function(){
		num += '7';
		$('.js-readout').text(num);
	});


$('.js-num8').click(function(){
		num += '8';
		$('.js-readout').text(num);
	});

$('.js-num9').click(function(){
		num += '9';
		$('.js-readout').text(num);
	});

	
	$('.js-multiply').click(function(){
		updateStorage('multiply');
		$('.js-readout').text('');
	});

	$('.js-add').click(function(){
		updateStorage('add');
		$('.js-readout').text('');
	});

	$('.js-subtract').click(function(){
		updateStorage('subtract');
		$('.js-readout').text('');
	});



	$('.js-divide').click(function(){
		updateStorage('divide');
		$('.js-readout').text('');
	});


	$('.js-calculate').click(function(){
		var output;
		if(action == "add") output = storage + parseInt(num);
		else if(action == "subtract") output = storage - parseInt(num);
		else if(action == "multiply") output = storage * parseInt(num);
		else if(action == "divide") output = storage / parseInt(num);

		storage = num = parseInt(output);

		$('.js-storage').text(storage);

		$('.js-readout').text(output);

		$('.js-readout').addClass('s-success');

		setTimeout( function(){
			$('.js-readout').removeClass('s-success');
		},1000);
	
	});

	$(".js-clear").click(function(){
		num = 0; 
		storage = 0;
	$('.js-storage').text("");
	$('.js-readout').text("");
	})




});

var num = 0;
var action = '';
var storage = 0;

function updateStorage(tempaction){
	storage = parseInt(num);
	action = tempaction;
	$('.js-storage').text(storage + tempaction);
	num = 0;
}