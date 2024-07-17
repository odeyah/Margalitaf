<script>
import '@fortawesome/fontawesome-free/css/all.css';
import cheeseIMG from '../assets/testcheese.jpg';
import cookiesIMG from '../assets/testcookies.jpg';
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
	<div class="gallery">
		<div><h1>גלריית תמונות</h1></div>
		<div class="flipDiv">
			<Flipbook
				style="width: 100%; max-width: 70vw"
				ref="flipbook"
				class="flipbook"
				:pages="courses.map(course => course.img)"
			/>
			<div class="nav-arrow left-arrow" @click="flipRight">
				<i class="fa-sharp fa-solid fa-forward"></i>
			</div>
			<div class="nav-arrow right-arrow" @click="flipLeft">
				<i class="fa-sharp fa-solid fa-backward"></i>
			</div>
		</div>
	</div>
</template>

<style>
.gallery {
	width: 70%; /* Set gallery width to 70% of the screen */
	margin: auto; /* Center the gallery horizontally */
	position: relative; /* Ensure proper positioning */
	/*background-color: #fe5bac; */
}
.flipbook {
	width: 100%;
	max-width: 70vw;
	height: 70vh;
	display: flex;
	justify-content: center;
	padding-top: 10px; /* Adjust padding as needed */
}
.flipbook img {
	max-width: 100%; /* Ensures image does not exceed parent width */
	height: auto; /* Maintain aspect ratio */
}
.nav-arrow {
	position: absolute;
	font-size: 30px;
	width: 30px;
	height: 30px;
	top: 60%; /* Adjust vertically centered position */
	transform: translateY(-50%);
	color: #fe5bac; /* Arrow color */
	cursor: pointer; /* Make it a pointer on hover */
}
.left-arrow {
	right: 10px; /* Position the left arrow */
}
.right-arrow {
	left: 10px; /* Position the right arrow */
}
@media (max-width: 568px) {
	.flipbook::after {
		display: none;
	}
	.flipbook {
		padding-top: 5px; /* Adjust for smaller screens */
	}
	h1 {
		padding-top: 10vh;
	}
}
@media (min-width: 569px) {
	.flipbook::after {
		content: '';
		position: absolute;
		top: 90px;
		left: 49.9%;
		width: 3px; /* Width of the line */
		height: 84%;
		background-color: peachpuff;
		transform: translateX(-50%);
	}
	h1 {
		position: relative; /* Absolute positioning for the title */
		right: 0; /* Adjust position as needed */
		top: 10vh; /* Ensure it aligns properly */
		/* left: 15%;*/
		color: #fe5bac;
		text-align: center;
		margin-top: 1rem;
		font-size: 6vw;
	}
}
@media (min-width: 920px) {
	.flipDiv {
		padding-top: 15vh;
	}
	h1 {
		position: relative; /* Absolute positioning for the title */
		/* right: 15%; /* Adjust position as needed */
		top: 10vh; /* Ensure it aligns properly */
		/* left: 15%;*/
		color: #fe5bac;
		text-align: center;
		margin-top: 1rem;
		font-size: 6vw;
	}
}
@media (min-width: 1700px) {
	.flipDiv {
		padding-top: 30vh;
	}
}
</style>
