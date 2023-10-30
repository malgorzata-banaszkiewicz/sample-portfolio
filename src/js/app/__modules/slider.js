const arrowPrev = document.querySelector(".arrow--prev");
const arrowNext = document.querySelector(".arrow--next");
let more = ".block-services__more";
let icon = ".block-services__icon";
let active = "active-blue-class";
let dataSlide = "data-slide";
let box = document.querySelector(".block-services__service-boxes");
let breakpoint = 993;
let margin = window.innerWidth > breakpoint ? "-230px" : "0";
let desktopSlides = window.innerWidth > breakpoint;
let slides = document.querySelectorAll(".block-services__service-box");
let totalSlides = slides.length;
let activeSlideNumber = 1;
let selectedArticle = document.querySelector("article.active-blue-class");

const deactivateSlider = () => {
	selectedArticle = document.querySelector("article.active-blue-class");
	let childText = selectedArticle.querySelector(more);
	let childIcon = selectedArticle.querySelector(icon);
	selectedArticle.classList.remove(active);
	childText.classList.remove(active);
	childIcon.src = "images/icons/front-development-blue.svg";
};

const activateSlider = (slideNumber) => {
	deactivateSlider();
	let selectedArticle = document.querySelector(
		`[${dataSlide}="${slideNumber}"]`
	);
	let childText = selectedArticle.querySelector(more);
	let childIcon = selectedArticle.querySelector(icon);
	selectedArticle.classList.add(active);
	childText.classList.add(active);
	childIcon.src = "images/icons/front-development.svg";
};

const nextSlide = () => {
	arrowNext.addEventListener("click", () => {
		arrowPrev.classList.remove(active);
		arrowNext.classList.add(active);
		activeSlideNumber++;
		if (activeSlideNumber === totalSlides) {
			slides.forEach((slide) => {
				box.style.marginRight = "0";
				let attribute = slide.getAttribute(dataSlide);
				if (
					attribute == totalSlides - 2 ||
					attribute == totalSlides - 1 ||
					attribute == totalSlides
				) {
					slide.style.display = "flex";
				} else {
					slide.style.display = "none";
				}
			});
		} else if (activeSlideNumber > totalSlides) {
			activeSlideNumber = 1;
			box.style.marginRight = margin;
			slides.forEach((slide) => {
				let attribute = slide.getAttribute(dataSlide);
				if (attribute <= (desktopSlides ? 4 : 3)) {
					slide.style.display = "flex";
				} else {
					slide.style.display = "none";
				}
			});
		} else if (
			activeSlideNumber >= (desktopSlides ? 4 : 3) &&
			activeSlideNumber < totalSlides
		) {
			slides.forEach((slide) => {
				let attribute = slide.getAttribute(dataSlide);
				let number = desktopSlides ? -2 : -1;
				if (
					attribute < activeSlideNumber + number ||
					attribute > activeSlideNumber + 1
				) {
					slide.style.display = "none";
				} else {
					slide.style.display = "flex";
				}
			});
		}
		activateSlider(activeSlideNumber);
	});
};

const prevSlide = () => {
	arrowPrev.addEventListener("click", () => {
		arrowNext.classList.remove(active);
		arrowPrev.classList.add(active);
		activeSlideNumber--;
		if (activeSlideNumber < 1) {
			activeSlideNumber = totalSlides;
			slides.forEach((slide) => {
				box.style.marginRight = "0";
				let attribute = slide.getAttribute(dataSlide);
				if (
					attribute == totalSlides - 2 ||
					attribute == totalSlides - 1 ||
					attribute == totalSlides
				) {
					slide.style.display = "flex";
				} else {
					slide.style.display = "none";
				}
			});
		} else if (activeSlideNumber <= totalSlides - 1 && activeSlideNumber > 2) {
			box.style.marginRight = margin;
			slides.forEach((slide) => {
				let attribute = slide.getAttribute(dataSlide);
				let number = desktopSlides ? -2 : null;
				if (
					attribute == activeSlideNumber ||
					attribute == activeSlideNumber + 1 ||
					attribute == activeSlideNumber - 1 ||
					attribute == activeSlideNumber + number
				) {
					slide.style.display = "flex";
				} else {
					slide.style.display = "none";
				}
			});
		} else if (activeSlideNumber === 2) {
			box.style.marginRight = margin;
			slides.forEach((slide) => {
				let attribute = slide.getAttribute(dataSlide);
				let number = desktopSlides ? 2 : null;
				if (
					attribute == activeSlideNumber ||
					attribute == activeSlideNumber - 1 ||
					attribute == activeSlideNumber + 1 ||
					attribute == activeSlideNumber + number
				) {
					slide.style.display = "flex";
				} else {
					slide.style.display = "none";
				}
			});
		}
		activateSlider(activeSlideNumber);
	});
};

const mobileView = () => {
	slides.forEach((slide) => {
		let attribute = slide.getAttribute(dataSlide);
		if (attribute <= (desktopSlides ? 4 : 3)) {
			slide.style.display = "flex";
			desktopSlides
				? (box.style.marginRight = "-230px")
				: (box.style.marginRight = "0");
		} else {
			slide.style.display = "none";
		}
	});
};

export const sliderOnResize = (e) => {
	if (!slides.length) {
		return null;
	}
	activateSlider(1);
	activeSlideNumber = 1;
	if (e.currentTarget.innerWidth > breakpoint) {
		box.style.marginRight = "-230px";
		slides.forEach((slide) => {
			let attribute = slide.getAttribute(dataSlide);
			if (attribute <= 4) {
				slide.style.display = "flex";
			} else {
				slide.style.display = "none";
			}
		});
	} else if (e.currentTarget.innerWidth < breakpoint) {
		box.style.marginRight = "0";
		slides.forEach((slide) => {
			let attribute = slide.getAttribute(dataSlide);
			if (attribute <= 3) {
				slide.style.display = "flex";
			} else {
				slide.style.display = "none";
			}
		});
	}
};

export const sliderArrows = (e) => {
	if (!slides.length) {
		let arrows = document.querySelector(".block-services__arrows");
		arrows.style.display = "none";
		return null;
	}
	mobileView();
	nextSlide();
	prevSlide();
	sliderOnResize(e);
};
