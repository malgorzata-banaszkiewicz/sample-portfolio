import $ from "jquery";
import "slick-carousel";

export const slickSlider = () => {
	let opinions = $(".block-testimonials__opinions");
	if (!opinions) return null;

	opinions.slick({
		dots: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		infinite: false,
		prevArrow:
			'<button class="slick-prev slick-arrow"><svg class="arrow-img"  xmlns="http://www.w3.org/2000/svg" width="27" height="16" viewBox="0 0 27 16" fill="none"><path d="M0.792893 7.29289C0.402369 7.68342 0.402369 8.31658 0.792892 8.7071L7.15685 15.0711C7.54738 15.4616 8.18054 15.4616 8.57107 15.0711C8.96159 14.6805 8.96159 14.0474 8.57107 13.6569L2.91421 8L8.57107 2.34314C8.96159 1.95262 8.96159 1.31946 8.57107 0.928931C8.18054 0.538406 7.54738 0.538406 7.15686 0.92893L0.792893 7.29289ZM26.5 7L14 7L14 9L26.5 9L26.5 7ZM14 7L1.5 7L1.5 9L14 9L14 7Z" fill="#0077FF"/></button>',
		nextArrow:
			'<button class="slick-next slick-arrow"><svg class="arrow-img" xmlns="http://www.w3.org/2000/svg" width="27" height="16" viewBox="0 0 27 16" fill="none"><path d="M26.2071 8.70711C26.5976 8.31658 26.5976 7.68342 26.2071 7.29289L19.8431 0.928932C19.4526 0.538408 18.8195 0.538408 18.4289 0.928932C18.0384 1.31946 18.0384 1.95262 18.4289 2.34315L24.0858 8L18.4289 13.6569C18.0384 14.0474 18.0384 14.6805 18.4289 15.0711C18.8195 15.4616 19.4526 15.4616 19.8431 15.0711L26.2071 8.70711ZM0.5 9H13V7H0.5V9ZM13 9H25.5V7H13V9Z" fill="#0077FF"/></svg></button>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 768,
				settings: {
					variableWidth: true,
					slidesToShow: 1,
				},
			},
		],
	});
};

export const slickArrows = () => {
	const arrowNext = $(".slick-next");
	const arrowPrev = $(".slick-prev");
	const allSlides = $(".slick-slide");
	let index = 0;

	const updateArrows = () => {
		arrowPrev.toggleClass("disabled", index === 0);
		arrowNext.toggleClass("disabled", index === allSlides.length - 1);
		arrowPrev.toggleClass("active-blue-class", index != 0);
		arrowNext.toggleClass("active-blue-class", index != allSlides.length - 1);

		allSlides.removeClass("active-slick-slide");
		allSlides.eq(index).addClass("active-slick-slide");
	};

	arrowNext.on("click", () => {
		if (index < allSlides.length - 1) {
			index++;
			updateArrows();
		}
	});

	arrowPrev.on("click", () => {
		if (index > 0) {
			index--;
			updateArrows();
		}
	});

	updateArrows();
};
