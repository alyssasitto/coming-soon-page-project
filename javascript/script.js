const form = document.querySelector(".cta-form");
const email = document.querySelector("#email");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	validateForm();
});

function validateForm() {
	const emailVal = email.value.trim();

	if (emailVal === "") {
		form.classList.add("error");
	} else if (emailVal !== "") {
		form.classList.remove("error");
		form.reset();
	}
}
