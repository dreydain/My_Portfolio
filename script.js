'use strict';

//NavBar Active Classes
const btns = document.querySelectorAll('.navBtns');
console.log(btns);

btns.forEach((btn) => {
	btn.addEventListener('click', () => {
		removeActiveClasses();
		btn.classList.add('active');
	});
});

function removeActiveClasses() {
	btns.forEach((btn) => {
		btn.classList.remove('active');
	});
}

//Portfolio Projects Functionality
const projects = document.querySelectorAll('.project');
const buttons = document.querySelectorAll('.btn');

const ecommerceImages = document.querySelectorAll('.ecommerce');
const trainsImages = document.querySelectorAll('.trains');
const trainingImages = document.querySelectorAll('.training');

let idx = 0;
const time = 2500;
setInterval(imgSlideShow, time);

function runSlides(imagesArr) {
	if (idx === imagesArr.length - 1) {
		imagesArr[idx].classList.add('hide');
		imagesArr[0].classList.remove('hide');
		idx = 0;
	}

	imagesArr[idx].classList.add('hide');
	imagesArr[idx + 1].classList.remove('hide');
}

function displayCover(images) {
	images.forEach((image) => {
		image.classList.add('hide');
	});
	images[0].classList.remove('hide');
	clearInterval(imgSlideShow);
}

// Image Slide Show interval function
function imgSlideShow() {
	//if active project is equal to eCommerce
	if (projects[0].classList.value != 'project') {
		runSlides(ecommerceImages);
	} else {
		displayCover(ecommerceImages);
	}
	//if active project is equal to model trains
	if (projects[1].classList.value != 'project') {
		runSlides(trainsImages);
	} else {
		displayCover(trainsImages);
	}
	//if active project is equal to training project
	if (projects[2].classList.value != 'project') {
		runSlides(trainingImages);
	} else {
		displayCover(trainingImages);
	}

	idx++;
}

//Function for removing active project and button classes
function removeActivePortfolioClasses() {
	projects.forEach((project) => {
		project.classList.remove('active');
	});

	buttons.forEach((btn) => {
		btn.classList.remove('active');
	});
}

//Button functionality
buttons.forEach((button, index) => {
	button.addEventListener('click', () => {
		idx = 0;
		removeActivePortfolioClasses();
		button.classList.add('active');
		projects[index].classList.add('active');
		imgSlideShow();
	});
});

//Project Functionality
projects.forEach((project, index) => {
	project.addEventListener('click', () => {
		idx = 0;
		removeActivePortfolioClasses();
		project.classList.add('active');
		buttons[index].classList.add('active');
		imgSlideShow();
	});
});
