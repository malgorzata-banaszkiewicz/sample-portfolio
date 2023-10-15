export const aboutMe = () => {
	$(document).ready(function () {
		const buttons = $(
			"button:contains('Awards'), button:contains('Education'), button:contains('Skills')"
		);
		const blocks = $(
			".block-about-me__awards, .block-about-me__education, .block-about-me__progress-bars"
		);

		buttons.click(function () {
			const index = buttons.index(this);
			blocks.hide().eq(index).show();
			buttons.removeClass("button--filled").addClass("button--outlined");
			$(this).removeClass("button--outlined").addClass("button--filled");
		});
	});
};
