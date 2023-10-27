import $ from "jquery";

export const InitializeMovingTitles = () => {
	let titles = $(".highlighted-on-the-move");
	if (!titles.length) {
		return null;
	} else {
		movingTitles(".block-hero");
		movingTitles(".block-about-me");
	}
};

const movingTitles = (block) => {
	const $titles = $(block).find(".highlighted-on-the-move");
	$titles.on("mouseenter mouseleave", (e) => {
		const letterSpacing = e.type === "mouseenter" ? "3" : "1";
		$titles.animate({ letterSpacing }, e.type === "mouseenter" ? 3000 : 1000);
	});
};
