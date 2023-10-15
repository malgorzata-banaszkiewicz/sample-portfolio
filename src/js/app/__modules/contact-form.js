const NAME_REQUIRED = "Please enter your name";
const EMAIL_INVALID = "Please enter a correct email address format";
const form = document.querySelector(".block-contact__form");
const { name: nameField, email: emailField } = form.elements;
const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
const submitButton = document.querySelector(".block-contact__button");

export const validateForm = (event) => {
	const nameValid = nameField.validity.valid;
	const emailValid = emailField.validity.valid;
	const nameErrorText = nameValid ? "" : NAME_REQUIRED;
	const emailErrorText = emailValid ? "" : EMAIL_INVALID;
	nameError.textContent = nameErrorText;
	emailError.textContent = emailErrorText;
	if (!nameValid || !emailValid) {
		event.preventDefault();
	} else if (nameValid && emailValid) {
		alert(
			"Thank you for your message. I will get back to you as soon as possible."
		);
	}
};

form.addEventListener("submit", validateForm);
submitButton.addEventListener("click", validateForm);
