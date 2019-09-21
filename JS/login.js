
let userData = JSON.parse(localStorage.getItem("userData")) || [];//getting local storage data
let name;
let username;
let email;
let pass;
const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
let attempt = 3; // Variable to count number of attempts.

userProfile = () => { userData.map(profile => {
	user_name = profile.username;
	email = profile.email;
	pass = profile.pass;
	return;
 });
};

// Below function Executes on click of login button.
validate = e => {
e.preventDefault();
const useremail = document.getElementById("email").value;
const password = document.getElementById("password").value;
userProfile();
 if(!useremail){
    alert ("Please input an email and password!");
    return false;
  }
if ( useremail == email && password == pass){
	alert ("Login successfully ");
	window.location.assign("success.html"); // Redirecting to other page.
}
else{
const error = document.getElementById('errorLog');
attempt --;// Decrementing by one.
error.innerHTML = `<p style="color:red;font-size:.8em;">Wrong login detailes entered! <br>You have ${attempt} attempt left!</p>`;

// Disabling fields after 3 attempts.
if( attempt == 0){
	username.disabled = true;
	password.disabled = true;
	document.getElementById("submit").disabled = true;
	return false;
		}
	}
};
