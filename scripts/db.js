const myform = document.getElementById('form_id');

myform.addEventListener('submit', (e) => {
	e.preventDefault();

	const formData = new FormData(myform);

	fetch('http://localhost/freelancer-clone-backend/freelancer-clone-backend/add_user.php', {
		method: 'POST',
		body: formData
	})
		.then((response) => {
			return response.json();
		})
		.then((text) => {
			console.log(text);
		})
		.catch((error) => {
			console.error(error);
		});
});

fetch('http://localhost/freelancer-clone-backend/freelancer-clone-backend/view_users.php')
	.then((Response) => Response.json())
	.then((ResponseJson) => {
		for (const key in ResponseJson) {
			console.log(ResponseJson[key]);
		}
	});
