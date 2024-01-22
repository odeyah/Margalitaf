<script>
import '@fortawesome/fontawesome-free/css/all.css';
import cheeseIMG from '../assets/cheese.jpg';
import cookiesIMG from '../assets/cookies.jpg';
import indexIMG from '../assets/index.jpg';
import monsterIMG from '../assets/monster.jpg';
import tableIMG from '../assets/table.jpg';
import table1IMG from '../assets/table1.jpg';
import LogoIMG from '../assets/Logo.jpg';
import purimIMG from '../assets/purim.jpg';
import Flipbook from 'flipbook-vue';
// import 'flipbook-vue/dist/flipbook-vue.css';

export default {
	name: 'Gallery',
	components: {
		Flipbook,
	},
	data() {
		return {
			courses: [
				// Populate with course data
				{ img: cookiesIMG, title: 'Baking course', description: 'baking course for kids from age 3.5 till 12.' },
				{ img: cheeseIMG, title: 'Cocking course', description: 'just checking' },
				{ img: indexIMG, title: 'Course 1', description: 'Description of Course 1.' },
				{ img: monsterIMG, title: 'Course 2', description: 'Description of Course 2.' },
				{ img: tableIMG, title: 'Course 1', description: 'Description of Course 1.' },
				{ img: table1IMG, title: 'Course 3', description: 'Description of Course 3.' },
				{ img: LogoIMG, title: 'Course 5', description: 'Description of Course 5.' },
				{ img: purimIMG, title: 'Course 6', description: 'Description of Course 6.' },
				// ... more courses
			],
			currentPage: 0, // Start from the first page
		};
	},
	methods: {
		flipRight() {
			if (this.currentPage >= this.courses.length - 1) {
				console.log('in flipRight if');
				this.currentPage = 0;
				this.$refs.flipbook.goToPage(1); // Reset to the first page
			} else {
				console.log('in flipRight else');
				this.currentPage += 2; // Move two pages forward
				this.$refs.flipbook.flipRight(); // Use the flipbook's method to flip right
			}
		},
		flipLeft() {
			if (this.currentPage > 1) {
				console.log('in flipLeft if');
				this.currentPage -= 2; // Move two pages backward
				this.$refs.flipbook.flipLeft(); // Use the flipbook's method to flip left
			} else {
				console.log('in flipRight if');
				this.currentPage = this.courses.length - 1;
				this.$refs.flipbook.goToPage(this.courses.length - 1); // Reset to the first page
			}
		},
	},
};
</script>

<template>
	<div class="gallery" style="width: 700px">
		<h1 style="color: #fe5bac">גלריית תמונות</h1>
		<Flipbook
			style="width: 700px; padding-right: 80px"
			ref="flipbook"
			class="flipbook"
			:pages="courses.map(course => course.img)"
		/>
		<div class="nav-arrow left-arrow" @click="flipRight"><i class="fa-sharp fa-solid fa-forward"></i></div>
		<div class="nav-arrow right-arrow" @click="flipLeft"><i class="fa-sharp fa-solid fa-backward"></i></div>
	</div>
</template>

<style>
.flipbook {
	position: relative;
	width: 70vw;
	height: 70vh;
}
.flipbook img {
	max-width: 100%; /* Ensures image is not larger than its container */
	height: auto; /* Maintains aspect ratio */
	width: 250px; /* Set your desired width */
	padding-left: 15px;
	padding-right: 15px;
	background-color: #fe5bac;
}
h1 {
	position: absolute;
	right: 360px;
}
.nav-arrow {
	position: absolute;
	font-size: 30px;
	width: 30px;
	height: 30px;
	top: 80%;
	transform: translateY(-50%);
	/* Style your buttons (size, colors, etc.) */
}

.left-arrow {
	right: 75px; /* Adjust as needed based on the width of your button */
	top: 380px;
	color: #fe5bac;
}
.flipbook::after {
	content: '';
	position: absolute;
	top: 85px;
	left: 45.72%;
	width: 3px; /* Width of the line */
	height: 64%;
	background-color: peachpuff;
	transform: translateX(-50%);
}
.right-arrow {
	left: 595px; /* Adjust as needed based on the width of your button */
	top: 380px;
	color: #fe5bac;
}
</style>
