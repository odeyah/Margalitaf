<script>
export default {
	name: 'Contact',
	data() {
		return {
			form: {
				name: '',
				email: '',
				message: '',
			},
			isSubmitting: false,
		};
	},
	methods: {
		submitForm() {
			this.isSubmitting = true;
			// Here you would typically send the form data to a server
			console.log('Form submitted:', this.form);

			// Simulate async operation like server response
			setTimeout(() => {
				this.isSubmitting = false;
				alert('Form submitted successfully!');
				this.resetForm();
			}, 1000);
		},
		resetForm() {
			this.form.name = '';
			this.form.email = '';
			this.form.message = '';
		},
	},
};
</script>

<template>
	<div class="contact">
		<h1>צור קשר</h1>
		<br /><br /><br /><br />
		<form @submit.prevent="submitForm">
			<div class="form-group">
				<label for="name">שם:</label>
				<input type="text" id="name" v-model="form.name" required />
			</div>

			<div class="form-group">
				<label for="email">דו"אל:</label>
				<input type="email" id="email" v-model="form.email" required />
			</div>

			<div class="form-group">
				<label for="message">הודעה:</label>
				<textarea id="message" v-model="form.message" required></textarea>
			</div>

			<button type="submit" :disabled="isSubmitting">שלח</button>
		</form>
	</div>
</template>

<style>
template {
	align-self: right;
	align-content: right;
	align-items: right;
}
.contact {
	max-width: 500px;
	margin: 0, 50;
	padding: 20px;
}

.form-group {
	margin-bottom: 15px;
}

.form-group label {
	display: block;
	margin-bottom: 5px;
}

.form-group input,
.form-group textarea {
	width: 100%;
	padding: 8px;
	border: 1px solid #ccc;
	border-radius: 4px;
}

button {
	background-color: #007bff;
	color: white;
	padding: 10px 20px;
	border: none;
	border-radius: 4px;
	cursor: pointer;
}

button:disabled {
	background-color: #cccccc;
	cursor: not-allowed;
}
</style>
