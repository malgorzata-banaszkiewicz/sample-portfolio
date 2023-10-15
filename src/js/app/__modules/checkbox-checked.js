const checkbox = document.querySelector(".block-contact__checkbox");
const checkboxContainer = document.querySelector(
	".block-contact__checkbox-box"
);

export const checkboxChecked = () => {
	checkboxContainer.addEventListener("click", () => {
		if (!checkbox.checked) {
			checkbox.setAttribute("checked", "");
			checkbox.checked = true;
		} else if (checkbox.checked) {
			checkbox.removeAttribute("checked");
			checkbox.checked = false;
		}
	});
};
