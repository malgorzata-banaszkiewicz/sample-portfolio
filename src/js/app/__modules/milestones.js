const milestonesBox = document.querySelector(
	".block-milestones__milestones-box"
);
const milestones = document.querySelectorAll(".block-milestones__milestone h4");

const countersInterval = (stop, milestone) => {
	let start = 0;
	const interval = setInterval(() => {
		// Extract the text before and after the numeric part
		const parts = milestone.textContent.match(/(.*?)(\d+)(.*)/);

		if (parts) {
			const beforeText = parts[1];
			const afterText = parts[3];

			milestone.textContent = `${beforeText}${start}${afterText}`;
			start++;

			if (start > stop) {
				clearInterval(interval);
			}
		}
	}, 300);
};

const counters = () => {
	milestones.forEach((milestone) => {
		let milestoneText = milestone.textContent;
		let stop = parseInt(milestoneText.match(/\d+/)[0], 10);
		countersInterval(stop, milestone);
	});
};

export const countersOnScroll = () => {
	if (!milestonesBox) {
		return null;
	} else {
		const steps = 70.0;
		createObserver();
	}
};

const createObserver = () => {
	let options = {
		root: null,
		rootMargin: "0px",
		threshold: 1,
	};
	let observer = new IntersectionObserver(counters, options);
	observer.observe(milestonesBox);
};
