// Accessing the DOM Element
const loginButton = document.getElementById('login-button');
const errorMsg = document.getElementById('error-message');
const passwordInput = document.getElementById('password-input');
const confirmPassword = document.getElementById('confirm-password');


// Listener to blue event when tabbed away from the confirm password
confirmPassword.addEventListener('blur', (event) => {
	event.preventDefault();
	if (passwordInput.value === confirmPassword.value) {
		passwordInput.style.border = 'thin solid green';
		confirmPassword.style.border = 'thin solid green';
		errorMsg.style.display = 'none';
	} else {
		passwordInput.style.border = 'thin solid red';
		confirmPassword.style.border = 'thin solid red';
		errorMsg.style.display = 'inline';
	}
});
