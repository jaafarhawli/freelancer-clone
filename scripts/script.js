let login = document.getElementById('show-window');
let logout = document.getElementById('close-window');
let exit = document.getElementById('exit');
let fname = document.getElementById('name').value;
let email = document.getElementById('email').value;
let number = document.getElementById('number').value;
let text = document.getElementById('text').value;
let alert1 = document.getElementById('alert');
let number_exp = '^[+961][0-9]{8}$';

login.addEventListener('click', () => {
	document.querySelector('.pop-up').classList.add('active');
});

logout.addEventListener('click', () => {
	document.querySelector('.pop-up').classList.remove('active');
});

exit.addEventListener('click', () => {
	document.querySelector('.pop-up').classList.remove('active');
});

if (fname.length < 5) {
	alert1.innerHTML = 'Full name has less than 5 characters';
}

if (text.length < 100) {
	alert1.innerHTML = 'Message has less than 100 characters';
}
if (number.match(number_exp)) {
	alert1.innerHTML += '';
} else {
	alert1.innerHTML += 'Wrong number';
}
