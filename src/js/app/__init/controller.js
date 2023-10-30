import { headerChanges, headerOnResize } from "../__modules/mobile-menu";
import { InitializeMovingTitles } from "../__modules/title-animation";
import { slickSlider, slickArrows } from "../__modules/slick-slider";
import { countersOnScroll } from "../__modules/milestones";
import { checkboxChecked, checkboxHover } from "../__modules/contact-form";
import { smoothAnchor } from "../__modules/smoothAnchor";
import { tabs } from "../__modules/tabs";
import { sliderArrows, sliderOnResize } from "../__modules/slider";

// GLOBAL APP CONTROLLER
const controller = {
	init() {},
	loaded(e) {
		headerChanges.init();
		checkboxChecked();
		checkboxHover();
		InitializeMovingTitles();
		slickSlider();
		countersOnScroll();
		smoothAnchor(e);
		tabs();
		sliderArrows(e);
		slickArrows();
	},
	resized(e) {
		headerOnResize(e);
		headerChanges.vhUnit();
		sliderOnResize(e);
	},
	mouseUp(e) {},
	keyDown(e) {},
	scrolled(e) {},
};

export default controller;
