var canvas;
var ctx;
var timer;
var posX = 0;
var posY = 0;
var square = new Image();
square.src = "square.png";
var squareWidth = 20;
var squareHeight = 20;

function init(){
	
	canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');
	
	
	timer=setInterval(draw, 10);

	ctx.canvas.width  = window.innerWidth;
  	ctx.canvas.height = window.innerHeight;

};

window.addEventListener('keydown', function(event){

	switch(event.keyCode){
		case 38:
			posY -= 10;
			break;
		case 40:
			posY += 10;
			break;
		case 37:
			posX -= 10;
			break;
		case 39:
			posX += 10;
			break;
	}

});

function draw(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.drawImage(square, posX, posY, squareWidth, squareHeight); 
}