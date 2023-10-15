export const projects = () => {
	$(document).ready(function () {
		const allButton = $("button:contains('All')");
		const $buttons = $(
			"button:contains('All'), button:contains('UI'), button:contains('Branding'), button:contains('Wordpress')"
		);
		const $projects = $(".block-projects__blog-link");

		$buttons.click(function () {
			const filter = $(this).text();
			$buttons.removeClass("button--filled").addClass("button--outlined");
			$(this).removeClass("button--outlined").addClass("button--filled");

			$projects.hide();
			$projects
				.filter(
					`.block-projects__project--${filter
						.toLowerCase()
						.replace(/\s/g, "")
						.replace("/", "-")}`
				)
				.show();
		});
		allButton.click(function () {
			$(
				".block-projects__project--ui-uxdesign, .block-projects__project--brandingdesign, .block-projects__project--wordpress"
			).show();
			$buttons.removeClass("button--filled").addClass("button--outlined");
			$(this).removeClass("button--outlined").addClass("button--filled");
		});
	});
};
