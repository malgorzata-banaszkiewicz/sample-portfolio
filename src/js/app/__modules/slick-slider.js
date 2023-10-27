import $ from "jquery";
import "slick-carousel";

export const slickSlider = () => {
	let opinions = $(".block-testimonials__opinions");
	if (!opinions) {
		return null;
	} else {
		opinions.slick({
			dots: false,
			slidesToShow: 4,
			slidesToScroll: 1,
			infinite: true,
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
						slidesToScroll: 1,
					},
				},
			],
		});
	}
};
