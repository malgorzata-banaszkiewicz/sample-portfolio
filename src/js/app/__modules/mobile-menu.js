const hamburger = document.querySelector(".header__hamburger");
const body = document.querySelector("body");
const nav = document.querySelector(".header__nav");
let layoutBreakpoint = 992;
let header = document.querySelector("header");
let navOpen = "header__nav--open";
let bodyNavOpen = "body--open-nav";
let open = "open";

//function counting header height

export const vhUnit = () => {
	document.documentElement.style.setProperty(
		"--headerHeight",
		`${header.getBoundingClientRect().height}px`
	);
};

//action for hamburger click

export const mobileMenu = () => {
	hamburger.addEventListener("click", () => {
		hamburger.classList.toggle(open);
		body.classList.toggle(bodyNavOpen);
		nav.classList.toggle(navOpen);
	});
};

//tracking resize event

export const headerOnResize = (e) => {
	if (e.currentTarget.innerWidth > layoutBreakpoint) {
		hamburger.classList.remove(open);
		body.classList.remove(bodyNavOpen);
		nav.classList.remove(navOpen);
	}
};
