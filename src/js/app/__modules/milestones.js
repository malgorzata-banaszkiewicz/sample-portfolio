export const milestones = () => {
	const counters = [
		{
			start: 8250,
			stop: 8300,
			step: 1,
			selector: "[data-first-counter]",
			suffix: "+",
		},
		{
			start: 50,
			stop: 100,
			step: 1,
			selector: "[data-second-counter]",
			suffix: "%",
		},
		{
			start: 0,
			stop: 3.6,
			step: 0.1,
			selector: "[data-third-counter]",
			suffix: "K",
		},
		{
			start: 190,
			stop: 240,
			step: 1,
			selector: "[data-fourth-counter]",
			suffix: "+",
		},
	];

	let intervals = [];

	function startCounters() {
		intervals = counters.map(({ start, stop, step, selector, suffix }) => {
			let current = start;
			return setInterval(function () {
				if (selector === "[data-third-counter]") {
					$(selector).text(`${current.toFixed(1)}${suffix}`);
				} else {
					$(selector).text(`${current.toFixed(0)}${suffix}`);
				}
				current += step;
				if (current > stop) {
					clearInterval(this);
					current = stop;
				}
			}, 100);
		});
	}

	function stopCounters() {
		intervals.forEach((interval) => clearInterval(interval));
	}

	$(".block-milestones").hover(startCounters, stopCounters);
};
