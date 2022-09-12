let login = document.getElementById('show-window');
let logout = document.getElementById('close-window');
let exit = document.getElementById('exit');
let alert1 = document.getElementById('alert');
let send = document.getElementById('send');
let number_exp = /^(\+?961) ?71[0-9]{6}|76[0-9]{6}|70[0-9]{6}|03[0-9]{6}|3[0-9]{5}/g;
let email_exp = /^[a-zA-Z0-9][a-zA-Z0-9._+/\-!?#${%&|]{2,63}@[a-zA-Z]{5,}.[a-zA-Z]{2,3}/g;

login.addEventListener('click', () => {
	document.querySelector('.pop-up').classList.add('active');
});

logout.addEventListener('click', () => {
	document.querySelector('.pop-up').classList.remove('active');
});

exit.addEventListener('click', () => {
	document.querySelector('.pop-up').classList.remove('active');
});

send.addEventListener('click', () => {
	alert1.innerHTML = '';
	let email = document.getElementById('email').value;
	let fname = document.getElementById('name').value;
	let number = document.getElementById('number').value;
	let text = document.getElementById('text').value;

	if (fname.length < 5) {
		alert1.innerHTML += 'Full name has less than 5 characters' + '<br>';
	}

	if (text.length < 100) {
		alert1.innerHTML += 'Message has less than 100 characters' + '<br>';
	}
	if (!number.match(number_exp)) {
		alert1.innerHTML += 'Wrong number' + '<br>';
	}

	if (!email.match(email_exp)) {
		alert1.innerHTML += 'Wrong email';
	}
});

let text1 = document.getElementById('text');
function EnableDisable(text1) {
	if (text1.value.trim() != '') {
		send.disabled = false;
		send.style.opacity = 1;
	} else {
		send.disabled = true;
		send.style.opacity = 0.4;
	}
}
