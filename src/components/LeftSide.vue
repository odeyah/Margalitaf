<script>
import { ref } from 'vue';

export default {
	name: 'LeftSide',
	setup() {
		const email = ref('');
		const firstName = ref('');
		const lastName = ref('');
		const message = ref('');

		const submitForm = async () => {
			if (email.value && firstName.value && lastName.value) {
				try {
					const response = await fetch('http://localhost:3000/send-email', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify({
							firstName: firstName.value,
							lastName: lastName.value,
							email: email.value,
						}),
					});

					if (response.ok) {
						message.value = 'תודה על ההצטרפות!';
						email.value = '';
						firstName.value = '';
						lastName.value = '';
					} else {
						message.value = 'אופס! משהו השתבש נסה שוב בבקשה.';
					}
				} catch (error) {
					message.value = 'אופס! משהו השתבש נסה שוב בבקשה.';
				}
			} else {
				message.value = 'בבקשה מלא את כל השדות.';
			}
		};

		return {
			email,
			firstName,
			lastName,
			message,
			submitForm,
		};
	},
};
</script>

<template>
	<div class="LeftSide-signup">
		<h3 class="box_title">הצטרף לרשימת הדיוור</h3>
		<form @submit.prevent="submitForm">
			<label for="first_name">שם פרטי *</label>
			<input
				v-model="firstName"
				class="inputfield"
				type="text"
				id="first_name"
				maxlength="50"
				placeholder="שם פרטי"
				required
			/>

			<label for="last_name">שם משפחה *</label>
			<input
				v-model="lastName"
				class="inputfield"
				type="text"
				id="last_name"
				maxlength="50"
				placeholder="שם משפחה"
				required
			/>

			<label for="email">דואר אלקטרוני *</label>
			<input v-model="email" class="inputfield" type="email" id="email" maxlength="80" placeholder="כתובת אימייל" required />

			<input type="submit" value="שלח" class="submit-button" />
		</form>
		<p v-if="message">{{ message }}</p>
	</div>
</template>

<style>
.LeftSide-signup {
	position: relative;
	padding: 1rem;
	background-color: #fe5bac;
	border: 1px solid #ddd;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	max-width: 400px; /* Optional: limit the width */
	margin: auto; /* Center align the form */
}

.LeftSide-signup h4 {
	margin: 0 0 1rem;
}

.LeftSide-signup form {
	display: flex;
	flex-direction: column;
}

.LeftSide-signup label {
	margin-bottom: 0.5rem;
}

.LeftSide-signup .inputfield {
	margin-bottom: 1rem;
	padding: 0.5rem;
	border: 1px solid #ccc;
	border-radius: 4px;
}

.LeftSide-signup .submit-button {
	padding: 0.5rem;
	border: none;
	background-color: #007bff;
	color: white;
	border-radius: 4px;
	cursor: pointer;
}

.LeftSide-signup .submit-button:hover {
	background-color: #0056b3;
}

.LeftSide-signup p {
	margin-top: 1rem;
	color: #d9534f; /* Optional: Error color */
}
</style>
