export const tabs = () => {
	let tabBoxes = document.querySelectorAll(".block-projects, .block-about-me");
	if (!tabBoxes) {
		return null;
	} else {
		Initializetabs(".block-projects");
		Initializetabs(".block-about-me");
	}
};

const Initializetabs = (tabBoxName) => {
	let tabBox = document.querySelector(tabBoxName);
	const tabs = tabBox.querySelectorAll('[data-tab="button"]');
	const blocks = tabBox.querySelectorAll("[data-block]");
	tabs.forEach((tab) =>
		tab.addEventListener("click", () => {
			let id = tab.getAttribute("data-open");
			// Deactivation of other tabs
			tabs.forEach((otherTab) => {
				if (otherTab !== tab) {
					otherTab.classList.remove("button--filled");
					otherTab.classList.add("button--outlined");
				}
			});
			tab.classList.remove("button--outlined");
			tab.classList.add("button--filled");
			if (id === "all") {
				blocks.forEach((block) => (block.style.display = "block"));
			} else {
				blocks.forEach((block) => (block.style.display = "none"));
				let matchingBlocks = document.querySelectorAll(`[data-block="${id}"]`);
				matchingBlocks.forEach(
					(matchingBlock) => (matchingBlock.style.display = "block")
				);
			}
		})
	);
};
