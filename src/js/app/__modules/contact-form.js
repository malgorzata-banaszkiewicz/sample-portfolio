const NAME_REQUIRED = "Please enter your name";
const EMAIL_INVALID = "Please enter a correct email address format";
const CHECKBOX_REQUIRED = "Please read and agree to terms and conditions";
const form = document.querySelector(".block-contact__form");
const { name: nameField, email: emailField } = form.elements;
const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
const errorBoxes = document.querySelectorAll(".block-contact__error-message"); //trzeba dodać visibility: visible
const checkboxError = document.querySelector("#checkbox-error");
const submitButton = document.querySelector(".block-contact__button");
const checkboxLink = document.querySelector(".block-contact__link");
const checkboxBox = document.querySelector(".block-contact__checkbox-box");
const hoverDisabled = "hover-disabled";
const checkbox = document.querySelector(".block-contact__checkbox");
const checkboxContainer = document.querySelector(
	".block-contact__checkbox-box"
);
const thanksBox = document.querySelector(".block-contact__thanks-box");

const validateForm = (event) => {
	const nameValid = nameField.validity.valid;
	const emailValid = emailField.validity.valid;
	const checkboxChecked = checkbox.checked;
	const nameErrorText = nameValid ? "ok!" : NAME_REQUIRED;
	const emailErrorText = emailValid ? "ok!" : EMAIL_INVALID;
	const checkboxErrorText = checkboxChecked ? "ok!" : CHECKBOX_REQUIRED;
	nameError.textContent = nameErrorText;
	emailError.textContent = emailErrorText;
	checkboxError.textContent = checkboxErrorText;
	errorBoxes.forEach((errorBox) => {
		errorBox.style.visibility = "visible";
	});

	if (!nameValid || !emailValid || !checkboxChecked) {
		event.preventDefault();
	} else if (nameValid && emailValid && checkboxChecked) {
		thanksBox.classList.add("block-contact__thanks-box--active");
	}
};

form ? form.addEventListener("submit", validateForm) : null;
submitButton ? submitButton.addEventListener("click", validateForm) : null;

export const checkboxHover = () => {
	if (!checkboxLink) {
		return null;
	} else {
		checkboxLink.addEventListener("mouseover", () => {
			checkboxBox.classList.add(hoverDisabled);
		});

		checkboxLink.addEventListener("mouseout", () => {
			checkboxBox.classList.remove(hoverDisabled);
		});
	}
};

export const checkboxChecked = () => {
	if (!checkboxContainer) {
		return null;
	} else {
		checkboxContainer.addEventListener("click", () => {
			if (!checkbox.checked) {
				checkbox.setAttribute("checked", "");
				checkbox.checked = true;
			} else if (checkbox.checked) {
				checkbox.removeAttribute("checked");
				checkbox.checked = false;
			}
		});
	}
};
