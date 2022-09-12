let login = document.getElementById('show-window');
let logout = document.getElementById('close-window');
let exit = document.getElementById('exit');

login.addEventListener('click', () => {
	document.querySelector('.pop-up').classList.add('active');
});

logout.addEventListener('click', () => {
	document.querySelector('.pop-up').classList.remove('active');
});

exit.addEventListener('click', () => {
	document.querySelector('.pop-up').classList.remove('active');
});
