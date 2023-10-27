class HeaderChanges {
	constructor() {
		this.hamburger = document.querySelector(".header__hamburger");
		this.body = document.querySelector("body");
		this.nav = document.querySelector(".header__nav");
		this.header = document.querySelector("header");
		this.navOpen = "header__nav--open";
		this.bodyNavOpen = "body--open-nav";
		this.open = "open";
		this.navListElement = document.querySelectorAll(".header__nav-link");
	}
	init() {
		if (!this.nav) {
			this.hamburger.style.display = "none";
			console.log("this hamburger" + this.hamburger);
			return null;
		} else {
			this.vhUnit();
			this.mobileMenu();
			this.navWorks();
		}
	}

	//function counting header height

	vhUnit() {
		document.documentElement.style.setProperty(
			"--headerHeight",
			`${this.header.getBoundingClientRect().height}px`
		);
	}

	//action for hamburger click
	mobileMenu() {
		this.hamburger.addEventListener("click", () => {
			console.log(this.navOpen);
			this.hamburger.classList.toggle(this.open);
			this.body.classList.toggle(this.bodyNavOpen);
			this.nav.classList.toggle(this.navOpen);
		});
	}
	navWorks() {
		this.navListElement.forEach((link) => {
			link.addEventListener("click", (e) => {
				this.hamburger.classList.remove(this.open);
				this.body.classList.remove(this.bodyNavOpen);
				this.nav.classList.remove(this.navOpen);
			});
		});
	}
}
export const headerChanges = new HeaderChanges();

//tracking resize event
let layoutBreakpoint = 992;
let hamburger = document.querySelector(".header__hamburger");
let body = document.querySelector("body");
let nav = document.querySelector(".header__nav");

export const headerOnResize = (e) => {
	if (!nav) {
		hamburger.style.display = "none";
		return null;
	} else {
		if (e.currentTarget.innerWidth > layoutBreakpoint) {
			hamburger.classList.remove("open");
			body.classList.remove("body--open-nav");
			nav.classList.remove("header__nav--open");
		}
	}
};
