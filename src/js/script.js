import "../scss/app.scss";

import controller from "./app/__init/controller";

let handled = false;

controller.init();

window.addEventListener("load", (e) => {
	controller.loaded(e);
});

window.addEventListener("resize", (e) => {
	controller.resized(e);
});

window.addEventListener("scroll", (e) => {
	controller.scrolled(e);
});

window.addEventListener("keydown", (e) => {
	controller.keyDown(e);
});

const handleMouseAndTouchEvents = (e) => {
	if (e.type === "touchend") {
		handled = true;
		controller.mouseUp(e);
	} else if (e.type === "mouseup" && !handled) {
		controller.mouseUp(e);
	} else {
		handled = false;
	}
};

document.addEventListener("mouseup", handleMouseAndTouchEvents);
document.addEventListener("touchend", handleMouseAndTouchEvents);
