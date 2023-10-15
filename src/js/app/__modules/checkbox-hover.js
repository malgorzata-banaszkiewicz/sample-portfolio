const checkboxLink = document.querySelector(".block-contact__link");
const checkboxBox = document.querySelector(".block-contact__checkbox-box");
const hoverDisabled = "hover-disabled";

export const checkboxHover = () => {
	checkboxLink.addEventListener("mouseover", () => {
		checkboxBox.classList.add(hoverDisabled);
	});

	checkboxLink.addEventListener("mouseout", () => {
		checkboxBox.classList.remove(hoverDisabled);
	});
};
