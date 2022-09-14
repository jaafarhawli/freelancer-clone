const myform = document.getElementById('form_id');
const contact_list = document.getElementById('contact_list');
let table = document.getElementById('table');

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

	fetch('http://localhost/freelancer-clone-backend/freelancer-clone-backend/view_users.php')
		.then((Response) => Response.json())
		.then((ResponseJson) => {
			let row = table.insertRow(0);
			let cell1 = row.insertCell(0);
			let cell2 = row.insertCell(1);
			let cell3 = row.insertCell(2);
			let cell4 = row.insertCell(3);
			let keys = Object.keys(ResponseJson);
			let lastelement = keys.length - 1;
			cell1.innerHTML = ResponseJson[lastelement].full_name;
			cell2.innerHTML = ResponseJson[lastelement].email_address;
			cell3.innerHTML = ResponseJson[lastelement].phone_number;
			cell4.innerHTML = ResponseJson[lastelement].message;
		});
});

fetch('http://localhost/freelancer-clone-backend/freelancer-clone-backend/view_users.php')
	.then((Response) => Response.json())
	.then((ResponseJson) => {
		for (const key in ResponseJson) {
			let row = table.insertRow(0);
			let cell1 = row.insertCell(0);
			let cell2 = row.insertCell(1);
			let cell3 = row.insertCell(2);
			let cell4 = row.insertCell(3);
			cell1.innerHTML = ResponseJson[key].full_name;
			cell2.innerHTML = ResponseJson[key].email_address;
			cell3.innerHTML = ResponseJson[key].phone_number;
			cell4.innerHTML = ResponseJson[key].message;
		}
	});
