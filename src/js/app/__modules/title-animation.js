export const titleAnimation = () => {
	$(document).ready(function () {
		$(".block-hero__image").hover(function () {
			$(".block-hero__title").animate({ letterSpacing: "3" }, 3000);
		});
		$(".block-hero__image").mouseleave(function () {
			$(".block-hero__title").animate({ letterSpacing: "1" }, 1000);
		});
		$(".block-about-me__image").hover(function () {
			$(".block-about-me h2").animate({ letterSpacing: "3" }, 3000);
		});
		$(".block-about-me__image").mouseleave(function () {
			$(".block-about-me h2").animate({ letterSpacing: "1" }, 1000);
		});
	});
};
