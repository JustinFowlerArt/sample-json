const data = {
	user_id: '123456',
	username: 'example_user',
	first_name: 'John',
	last_name: 'Doe',
	gender: 'm',
	email: 'johndoe@fireboxtools.com',
	age: 30,
	is_active: true,
	registration_date: '2023-01-15',
	address: {
		street: '123 Main Street',
		city: 'Exampleville',
		state: 'CA',
		'postal code': '12345',
		country: 'USA',
	},
	interests: ['reading', 'hiking', 'cooking', 'swimming', 'music'],
	preferences: {
		theme: 'dark',
		notifications: {
			email: true,
			push: false,
		},
	},
};

const dataElement = document.getElementById('data');

const notifications = data.preferences.notifications;
// Nested object data stored in a variable
dataElement.innerText = notifications.email;

// Nested object data with bracket notation
// dataElement.innerText = data['preferences']['notifications']['email'];

// Nested object data with dot notation
// dataElement.innerText = data.preferences.notifications.email;

// Array data
// dataElement.innerText = data.interests[1];

// Concatenating fields from nested object
// dataElement.innerText =
// data.address.street +
// ', ' +
// data.address.city +
// ', ' +
// data.address.state +
// ', ' +
// data.address.postal_code;
