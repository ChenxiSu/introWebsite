var imgIndex = 0;
imgShow(imgIndex);

function plusSlides(n) {
  imgShow(imgIndex += n);
}

function currentSlide(n) {
  imgShow(imgIndex = n);
}

function imgShow(n){
	var images = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	if(n == images.length){
		imgIndex = 0;
	}
	if(n < 0){
		imgIndex = images.length;
	}
	for(var i = 0; i < images.length; i++){
		images[i].style.display = "none";
	}
	for(i = 0; i < dots.length; i++){
		dots[i].className = dots[i].className.replace(" active", "");
	}

	images[imgIndex].style.display = "block"; 
  	dots[imgIndex].className += " active";
}