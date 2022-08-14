'use strict';
// Navigation
const sections = document.querySelectorAll('section');
const navBtns = document.querySelectorAll('.link');
const mobileNav = document.querySelector('.nav-list');
const hamburger = document.getElementById('hamburger');
mobileNav.style.maxHeight = '0px';

//Portfolio
const all = document.getElementById('all');
const design = document.getElementById('design');
const develop = document.getElementById('develop');
const games = document.getElementById('games');
const full_stack = document.getElementById('full-stack');
const projects = document.querySelectorAll('.project');
const modals = document.querySelectorAll('.modal');
const closeBtns = document.querySelectorAll('.close-modal');
const overlays = document.querySelectorAll('.overlay');
const body = document.body;

//Testimonies
const reviews = document.querySelectorAll('.review');
const left_arrow = document.querySelector('.arrow-left');
const right_arrow = document.querySelector('.arrow-right');

// ----- Navigation ----- //
window.addEventListener('scroll', () => {
	let current = '';

	sections.forEach((section) => {
		const sectionTop = section.offsetTop;
		const sectionHeight = section.clientHeight;

		if (pageYOffset >= sectionTop - sectionHeight / 3) {
			current = section.getAttribute('id');
		}
	});

	navBtns.forEach((btn) => {
		btn.classList.remove('active');
		if (btn.classList.contains(current)) {
			btn.classList.add('active');
		}
	});
});

// Mobile Navigation Display
hamburger.addEventListener('click', () => {
	if (mobileNav.style.maxHeight === '0px') {
		mobileNav.style.maxHeight = 'fit-content';
		mobileNav.style.opacity = '1';
		mobileNav.style.padding = '0.5em 0';
	} else {
		mobileNav.style.maxHeight = '0px';
		mobileNav.style.opacity = '0';
		mobileNav.style.padding = '0';
	}
});

// ----- Portfolio Project Sort Functions ----- //

// Array of all Projects
const projectsArr = [...projects.entries()];
let projectList = [];
projectsArr.forEach((project) => {
	projectList.push([...project]);
});

// Function to Sort and display projects dynamically
function sort(projectType) {
	projectList.forEach((project) => {
		project[1].classList.contains(projectType)
			? (project[1].style.display = 'block')
			: (project[1].style.display = 'none');
	});
}

// OnClick Events calling Sort function
all.addEventListener('click', () => {
	projectList.forEach((project) => {
		project[1].style.display = 'block';
	});
});

design.addEventListener('click', () => {
	sort('design');
});

develop.addEventListener('click', () => {
	sort('develop');
});

games.addEventListener('click', () => {
	sort('games');
});

full_stack.addEventListener('click', () => {
	sort('full-stack');
});

// --- MODAL DISPLAY FUNCTIONS --- //

// Close Modal
const closeModal = function () {
	modals.forEach((modal) => {
		modal.classList.remove('show');
	});
};
closeBtns.forEach((btn) => {
	btn.addEventListener('click', closeModal);
});

// Open Modal
overlays.forEach(function (overlay, i) {
	overlay.addEventListener('click', () => {
		closeModal();
		modals[i].classList.add('show');
	});
});

/*

// ----- Testimonies Display & Navigation ----- //

// --- Testimony Slide Show --- //
let idx = 0;
const slideShow = setInterval(function () {
	if (idx === reviews.length - 1) {
		reviews[idx].classList.remove('active');
		reviews[0].classList.add('active');
		idx = 0;
	} else {
		reviews[idx].classList.remove('active');
		reviews[idx + 1].classList.add('active');
		idx++;
	}
}, 3000);

// --- Testimony Click Functions --- //
// --- make more dry later --- //
function prev() {
	clearInterval(slideShow);
	idx--;
	idx < 0 ? (idx = reviews.length - 1) : ' ';
	reviews.forEach((review) => {
		review.classList.remove('active');
	});
	reviews[idx].classList.add('active');
}

function next() {
	clearInterval(slideShow);
	idx++;
	idx > reviews.length - 1 ? (idx = 0) : ' ';
	reviews.forEach((review) => {
		review.classList.remove('active');
	});
	reviews[idx].classList.add('active');
}

left_arrow.addEventListener('click', prev);
right_arrow.addEventListener('click', next);

*/
