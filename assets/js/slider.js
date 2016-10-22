$(document).ready(function() {

	//configuration
	var animationSpeed = 1000;
	var pause = 3000;
	var numberImages = 1;
	var width = 629;
	

	//animation Slider
	var areaSlider = $('.slider').find('ul');
	var elementSlider = areaSlider.find('li');
	// setInterval(function(){
	// 	areaSlider.animate({'margin-left': '-='+width}, animationSpeed, function() {
	// 		numberImages++;
	// 		if(numberImages === elementSlider.length) {
	// 			numberImages = 1;
	// 			areaSlider.css({'margin-left': 0});
	// 		}
	// 	});
	// }, pause);

	//Slider click animation
	//right click
	var rightPointer = $('.arrow_right');
	rightPointer.click(function () {
		if (numberImages === elementSlider.length) {
			numberImages = 1;
			areaSlider.animate({'margin-left': 0}, animationSpeed);
		}
		else {
			numberImages++;
			areaSlider.animate({'margin-left': '-=' +width}, animationSpeed);
		}
	});
	//left click
	var leftPointer = $('.arrow_left');
	leftPointer.click(function() {
		if (numberImages === 1) {
			numberImages = elementSlider.length;
			areaSlider.animate({'margin-left': '-=' +width * (elementSlider.length -1)}, animationSpeed);
		}
		else {
			numberImages--;
			areaSlider.animate({'margin-left': '+=' +width}, animationSpeed);
		}
	});
});