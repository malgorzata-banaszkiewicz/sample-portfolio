const arrowPrev = document.querySelector(".arrow--prev");
const arrowNext = document.querySelector(".arrow--next");
const arrowNextImg = document.querySelector(".arrow--next .arrow-img");
const arrowPrevImg = document.querySelector(".arrow--prev .arrow-img");
let more = ".block-services__more";
let icon = ".block-services__icon";
let moreActive = "block-services__more--active";
let active = "active";
let dataSlide = "data-slide";
let box = document.querySelector(".block-services__service-boxes");
let breakpoint = 992;
let margin = window.innerWidth > breakpoint ? "-230px" : "0";

const deactivateSlider = () => {
	let selectedArticle = document.querySelector("article.active");
	let childText = selectedArticle.querySelector(more);
	let childIcon = selectedArticle.querySelector(icon);
	selectedArticle.classList.remove(active);
	childText.classList.remove(moreActive);
	childIcon.src = "images/icons/front-development-blue.svg";
};

const activateSlider = (slideNumber) => {
	deactivateSlider();
	let selectedArticle = document.querySelector(`[data-slide="${slideNumber}"]`);
	document;
	let childText = selectedArticle.querySelector(more);
	let childIcon = selectedArticle.querySelector(icon);
	selectedArticle.classList.add(active);
	childText.classList.add(moreActive);
	childIcon.src = "images/icons/front-development.svg";
};

export const nextSlide = () => {
	arrowNext.addEventListener("click", () => {
		arrowPrev.classList.remove(active);
		arrowNext.classList.add(active);
		arrowNextImg.src = "images/icons/right-arrow-white.svg";
		arrowPrevImg.src = "images/icons/left-arrow-blue.svg";
		let activeSlide = document.querySelector("article.active");
		let activeSlideNumber = activeSlide.getAttribute(dataSlide);
		if (activeSlideNumber == 4) {
			activeSlideNumber = 1;
			box.style.marginRight = margin;
			box.style.marginLeft = "0";
		} else if (activeSlideNumber == 3) {
			box.style.marginLeft = margin;
			box.style.marginRight = "0";
			activeSlideNumber++;
		} else {
			box.style.marginRight = margin;
			activeSlideNumber++;
		}
		activateSlider(activeSlideNumber);
	});
};

export const prevSlide = () => {
	arrowPrev.addEventListener("click", () => {
		arrowNext.classList.remove(active);
		arrowPrev.classList.add(active);
		arrowNextImg.src = "images/icons/right-arrow-blue.svg";
		arrowPrevImg.src = "images/icons/left-arrow-white.svg";
		let activeSlide = document.querySelector("article.active");
		let activeSlideNumber = activeSlide.getAttribute(dataSlide);
		if (activeSlideNumber == 1) {
			activeSlideNumber = 4;
			box.style.marginLeft = margin;
			box.style.marginRight = "0";
		} else if (activeSlideNumber == 2) {
			box.style.marginRight = margin;
			box.style.marginLeft = "0";
			activeSlideNumber--;
		} else {
			box.style.marginRight = margin;
			box.style.marginLeft = "0";
			activeSlideNumber--;
		}
		activateSlider(activeSlideNumber);
	});
};

export const sliderOnResize = (e) => {
	if (e.currentTarget.innerWidth > breakpoint) {
		let activeSlide = document.querySelector("article.active");
		let activeSlideNumber = activeSlide.getAttribute(dataSlide);
		if (activeSlideNumber == 1) {
			box.style.marginRight = "-230px";
			box.style.marginLeft = "0";
		} else if (activeSlideNumber == 4) {
			box.style.marginRight = "0";
			box.style.marginLeft = "-230px";
		}
	} else if (e.currentTarget.innerWidth < breakpoint) {
		box.style.marginRight = "0";
		box.style.marginLeft = "0";
	}
};
