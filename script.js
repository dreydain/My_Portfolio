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

//Portfolio Functionality

//Selecting elements and assigning to an array
const projects = document.querySelectorAll('.project');
const projectsArr = Array.from(projects);

const buttons = document.querySelectorAll('.btn');
const buttonsArr = Array.from(buttons);
console.log(projectsArr, buttonsArr);

//Button functionality
buttonsArr.forEach((button, index) => {
	button.addEventListener('click', () => {
		removeActiveProjectClasses();
		removeActiveBtnClasses();
		button.classList.add('active');
		projects[index].classList.add('active');
	});
});

//Project Functionality
projectsArr.forEach((project, index) => {
	project.addEventListener('click', () => {
		removeActiveProjectClasses();
		removeActiveBtnClasses();
		project.classList.add('active');
		buttons[index].classList.add('active');
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
