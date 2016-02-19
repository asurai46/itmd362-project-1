var email = document.getElementById('email').required=true;

var btn = document.getElementById('submit');

btn.addEventListener('click', btnClick);

function btnClick(){
	var valid = true;
	
	if(valid === true) {
		alert("Thank you for signing up!");
	}
	else if(email.value === '') {
		valid = false;
	}
	}