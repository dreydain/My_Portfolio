'use strict';

// 2. Porfolio Functionality:
//C. Add slide project slide show feature to active projects

// 3. Bonus addition:
//A. CSS on hover change color of social btns to blue or green

// 4. Make website responsive:

//NavBar Active Classes
//add logic for navbuttons to light up green when scrolling.
const btns = document.querySelectorAll('.navBtns');

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

//Functions for project slide show:
// slide show should only start if project is active
// slide show should stop once project is closed
// slide show should default to cover image when not active

const projects = document.querySelectorAll('.project');
const projectsArr = Array.from(projects);

const ecommerceImages = document.querySelectorAll('.ecommerce');
const trainsImages = document.querySelectorAll('.trains');
const trainingImages = document.querySelectorAll('.training');

let idx = 0;
const time = 2000;

function displayCover(images) {
	images.forEach((image) => {
		image.classList.add('hide');
	});
	images[0].classList.remove('hide');
	clearTimeout(imgSlideShow, 2000);
}

function runSlides(imagesArr) {
	if (idx === imagesArr.length - 1) {
		imagesArr[idx].classList.add('hide');
		imagesArr[0].classList.remove('hide');
		idx = 0;
	}

	imagesArr[idx].classList.add('hide');
	imagesArr[idx + 1].classList.remove('hide');
	console.log(imagesArr[idx], imagesArr[idx + 1]);

	console.log(idx);
}

function imgSlideShow() {
	//if active project is equal to eCommerce
	if (projects[0].classList.value != 'project') {
		//run for or while loop function...
		runSlides(ecommerceImages);
		setInterval(imgSlideShow, time);
	} else {
		displayCover(ecommerceImages);
	}

	if (projects[1].classList.value != 'project') {
		//run for or while loop function...
		runSlides(trainsImages);
		setInterval(imgSlideShow, time);
	} else {
		displayCover(trainsImages);
	}

	if (projects[2].classList.value != 'project') {
		//run for or while loop function...
		runSlides(trainingImages);
		setInterval(imgSlideShow, time);
	} else {
		displayCover(trainingImages);
	}

	idx++;
	console.log(projects[1].classList.value);
}

//Portfolio Functionality

//Selecting elements and assigning to an array

const buttons = document.querySelectorAll('.btn');
const buttonsArr = Array.from(buttons);
console.log(projects, buttonsArr);

//Button functionality
buttonsArr.forEach((button, index) => {
	button.addEventListener('click', () => {
		idx = 0;
		clearInterval(imgSlideShow);
		removeActiveProjectClasses();
		removeActiveBtnClasses();
		button.classList.add('active');
		projects[index].classList.add('active');
		imgSlideShow();
	});
});

//Project Functionality
projectsArr.forEach((project, index) => {
	project.addEventListener('click', () => {
		idx = 0;
		clearInterval(imgSlideShow);
		removeActiveProjectClasses();
		removeActiveBtnClasses();
		project.classList.add('active');
		buttons[index].classList.add('active');
		imgSlideShow();
	});
});

//Functions for removing active classes
function removeActiveProjectClasses() {
	projects.forEach((project) => {
		project.classList.remove('active');
	});
}

function removeActiveBtnClasses() {
	buttons.forEach((btn) => {
		btn.classList.remove('active');
	});
}
