export const smoothAnchor = () => {
	let anchors = document.querySelectorAll('a[href^="#"]');
	if (!anchors) {
		return null;
	} else {
		anchors.forEach((anchor) => {
			anchor.addEventListener("click", function (e) {
				e.preventDefault();
				let href = anchor.getAttribute("href");
				let targetElement = href !== "#" ? document.querySelector(href) : null;
				if (targetElement) {
					targetElement.scrollIntoView({
						behavior: "smooth",
					});
				}
			});
		});
	}
};
