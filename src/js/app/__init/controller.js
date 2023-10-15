import { mobileMenu, vhUnit, headerOnResize } from "../__modules/mobile-menu";
import { checkboxChecked } from "../__modules/checkbox-checked";
import { checkboxHover } from "../__modules/checkbox-hover";
import { nextSlide, prevSlide, sliderOnResize } from "../__modules/slider";
import { titleAnimation } from "../__modules/title-animation";
import { slickSlider } from "../__modules/slick-slider";
import { aboutMe } from "../__modules/about-me";
import { projects } from "../__modules/projects";
import { milestones } from "../__modules/milestones";
import { validateForm } from "../__modules/contact-form";

// GLOBAL APP CONTROLLER
const controller = {
	init() {},
	loaded(e) {
		mobileMenu();
		vhUnit();
		checkboxChecked();
		checkboxHover();
		nextSlide();
		prevSlide();
		titleAnimation();
		slickSlider();
		aboutMe();
		projects();
		milestones();
		validateForm(e);
	},
	resized(e) {
		headerOnResize(e);
		vhUnit();
		sliderOnResize(e);
	},
	mouseUp(e) {},
	keyDown(e) {},
	scrolled(e) {},
};

export default controller;
