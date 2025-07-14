import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
	service: 'Gmail',
	auth: {
		user: 'odeabeles@gmail.com',
		pass: 'Abod198#',
	},
});

// Endpoint to handle form submission
app.post('/send-email', async (req, res) => {
	const { firstName, lastName, email } = req.body;

	const mailOptions = {
		from: 'odeabeles@gmail.com',
		to: 'odeabeles@gmail.com; ${email}',
		subject: 'Newsletter Signup',
		text: `New Signup:
    First Name: ${firstName}
    Last Name: ${lastName}
    Email: ${email}`,
	};

	try {
		const info = await transporter.sendMail(mailOptions);
		console.log('Email sent: ' + info.response);
		res.status(200).send('Email sent successfully.');
	} catch (error) {
		console.error(error);
		res.status(500).send('Error sending email.');
	}
});

app.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}`);
});
