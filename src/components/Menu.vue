<script>
import cheeseIMG from '../assets/cheese.jpg';
import cookiesIMG from '../assets/cookies.jpg';
import indexIMG from '../assets/index.jpg';
import monsterIMG from '../assets/monster.jpg';
import tableIMG from '../assets/table.jpg';
import table1IMG from '../assets/table1.jpg';
import LogoIMG from '../assets/Logo.jpg';
import purimIMG from '../assets/purim.jpg';
import hartIMG from '../assets/hart.jpg';
import rainbowIMG from '../assets/rainbow.jpg';

export default {
	name: 'MenuBar',
	data() {
		const initialImages = [cheeseIMG, cookiesIMG, indexIMG, monsterIMG, tableIMG, table1IMG, purimIMG, hartIMG, rainbowIMG];
		// Clone the first image
		// const clonedFirstImage = initialImages[0];

		return {
			images: [...initialImages, ...initialImages],
			mainMenu: [
				{ he: 'בית', en: '' },
				{ he: 'אודות', en: 'About' },
				{ he: 'חוגים', en: 'Courses' },
				{ he: 'גלריה', en: 'Gallery' },
				{ he: 'צור קשר', en: 'Contact' },
			],
			courses: [
				{ he: 'חוג אפייה', en: 'Baking' },
				{ he: 'חוג בישול', en: 'Cooking' },
				{ he: 'חוג יצירה', en: 'Crafts' },
				{ he: 'חוג ריתמיקה', en: 'Rhythmics' },
				{ he: 'חוג תכשיטנות', en: 'Jewelry' },
				{ he: 'חוג אוריגמי', en: 'Origami' },
			],
			showCourses: false, // To control the display of the courses submenu
			currentOffset: 0,
			slideWidth: -40, // Adjust the width of each slide as needed
			currentShift: 0,
			direction: 1, // 1 for right, -1 for left
			isMenuVisible: false, // Add this line
		};
	},
	mounted() {
		const itemWidth = 100;
		const totalItems = this.images.length;
		const maxShift = totalItems * itemWidth - this.$refs.carousel.offsetWidth;

		setInterval(() => {
			this.currentShift += this.direction * itemWidth;

			if (this.currentShift <= 0 || this.currentShift >= 350) {
				this.direction *= -1; // Change direction
			}
		}, 3000); // Shift every 3 seconds
		// setInterval(this.slideToLeft, 5000); // Change slide every 5 seconds
	},
	methods: {
		toggleCoursesMenu(itemName) {
			this.showCourses = itemName === 'חוגים';
		},
		toggleMenu() {
			this.isMenuVisible = !this.isMenuVisible;
		},
	},
};
</script>
<template>
	<div class="container">
		<div class="logo-carousel-container">
			<div class="logo-container">
				<img alt="לוגו של מרגליטף" class="logo" src="../assets/Logo.jpg" />
				<span class="overlay-text">בס"ד</span>
			</div>
			<div class="content" ref="carousel">
				<div class="carousel-container">
					<div class="carousel" :style="{ transform: `translateX(${currentShift}px)` }">
						<div class="carousel-item"><img src="../assets/cheese.jpg" alt="Image 1" /></div>
						<div class="carousel-item"><img src="../assets/cookies.jpg" alt="Image 2" /></div>
						<div class="carousel-item"><img src="../assets/hart.jpg" alt="Image 1" /></div>
						<div class="carousel-item"><img src="../assets/index.jpg" alt="Image 2" /></div>
						<div class="carousel-item"><img src="../assets/monster.jpg" alt="Image 2" /></div>
						<div class="carousel-item"><img src="../assets/purim.jpg" alt="Image 1" /></div>
						<div class="carousel-item"><img src="../assets/rainbow.jpg" alt="Image 2" /></div>
						<div class="carousel-item"><img src="../assets/table.jpg" alt="Image 1" /></div>
						<div class="carousel-item"><img src="../assets/table1.jpg" alt="Image 2" /></div>
						<div class="carousel-item"><img src="../assets/cheese.jpg" alt="Image 1" /></div>
					</div>
				</div>
			</div>
			<button class="hamburger" @click="toggleMenu">&#9776;</button>
			<nav class="menu-bar" v-show="isMenuVisible">
				<ul>
					<li
						v-for="item in mainMenu"
						:key="item.en"
						@mouseover="toggleCoursesMenu(item.he)"
						@mouseleave="showCourses = false"
					>
						<router-link :to="`/${item.en}`">{{ item.he }}</router-link>
						<ul v-if="item.he === 'חוגים' && showCourses" class="submenu">
							<li v-for="course in courses" :key="course.en">
								<router-link :to="`/${course.en}`">{{ course.he }}</router-link>
							</li>
						</ul>
					</li>
				</ul>
			</nav>
		</div>
	</div>
</template>

<style>
li {
	margin-right: 80px;
}
.menu-bar {
	background-color: #fe5bac;
	height: 25px; /* Adjust height as needed */
	display: flex; /* Align items in a row */
	justify-content: flex-end; /* Align items to the right; use 'flex-start' for left alignment */
}

.menu-bar ul {
	list-style-type: none;
	display: flex; /* Align list items in a row */
	margin: 0;
	padding: 0;
}

.menu-bar li {
	position: relative;
	margin-right: 20px; /* Space between menu items */
	padding-right: 40px;
	padding-left: 50px;
}

.menu-bar ul li a {
	display: block;
	color: white;
	text-align: center;
	padding: 5px; /* Adjust padding as needed */
	text-decoration: none;
}

.menu-bar ul li a:hover {
	background-color: #ddd;
	color: black;
}
.menu-bar li ul.submenu {
	display: none; /* Initially hidden */
	position: absolute;
	top: 100%; /* Position just below the menu item */
	left: 0; /* Align with the left edge of the parent menu item */
	z-index: 100; /* Ensure it's above other content */
	background-color: #fe5bac; /* Optional: background color */
	width: 160px;
	height: 400px; /* Adjust as needed or remove if not necessary */
}

.menu-bar li:hover ul.submenu {
	display: block; /* Show on hover */
	height: 400px;
}

/* Styles for submenu items */
.submenu li {
	background-color: #fe5bac;
	width: 80px;
	color: black;
	text-align: right;
	/* Add more styles as needed */
}

.hamburger {
	display: none;
	background-color: #fe5bac;
	color: white;
	border: none;
	padding: 10px;
	font-size: 20px;
}

@media (min-width: 481px) and (max-width: 780px) {
	/* Adjust for tablets */
	.logo-carousel-container {
		display: flex;
		width: 100%;
	}

	.logo-container {
		flex-basis: 25%; /* Set the base size to 15% */
		flex-shrink: 0; /* Prevent shrinking */
		display: flex;
		justify-content: center; /* Center logo within the container */
	}

	.logo {
		width: 100%; /* Allow the logo image to fill the container */
		height: auto; /* Maintain aspect ratio */
	}

	.content {
		flex-grow: 1; /* Allow the carousel to grow and fill the available space */
		flex-basis: 75%; /* Start with the remaining space */
	}

	.carousel-container {
		width: 100%; /* Ensure the carousel container fills its flex container */
		overflow: hidden;
	}

	.carousel-item img {
		width: 100%; /* Ensure images within carousel items are responsive */
		height: auto; /* Maintain aspect ratio */
	}

	.overlay-text {
		position: absolute;
		top: 5%; /* Center vertically */
		left: 85%; /* Center horizontally */
		transform: translate(-50%, -50%); /* Adjust for exact centering */
		color: #fe5bac; /* Or any color that stands out */
		/* Additional styling for the text */
	}

	li {
		margin-right: 80px;
	}
	.menu-bar {
		background-color: #fe5bac;
		height: 25px; /* Adjust height as needed */
		display: flex; /* Align items in a row */
		justify-content: flex-end; /* Align items to the right; use 'flex-start' for left alignment */
	}

	.menu-bar ul {
		list-style-type: none;
		display: flex; /* Align list items in a row */
		margin: 0;
		padding: 0;
	}

	.menu-bar li {
		position: relative;
		margin-right: 20px; /* Space between menu items */
		padding-right: 40px;
		padding-left: 50px;
	}

	.menu-bar ul li a {
		display: block;
		color: white;
		text-align: center;
		padding: 5px; /* Adjust padding as needed */
		text-decoration: none;
	}

	.menu-bar ul li a:hover {
		background-color: #ddd;
		color: black;
	}
	.menu-bar li ul.submenu {
		display: none; /* Initially hidden */
		position: absolute;
		top: 100%; /* Position just below the menu item */
		left: 0; /* Align with the left edge of the parent menu item */
		z-index: 100; /* Ensure it's above other content */
		background-color: #fe5bac; /* Optional: background color */
		width: 160px;
		height: 400px; /* Adjust as needed or remove if not necessary */
	}

	.menu-bar li:hover ul.submenu {
		display: block; /* Show on hover */
		height: 400px;
	}

	/* Styles for submenu items */
	.submenu li {
		background-color: #fe5bac;
		width: 80px;
		color: black;
		text-align: right;
		/* Add more styles as needed */
	}
	.logo-carousel-container {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}

	.hamburger {
		display: none;
		background-color: #fe5bac;
		color: white;
		border: none;
		padding: 10px;
		font-size: 20px;
	}
	.menu-bar {
		display: none;
	}
	.hamburger {
		display: block;
	}
}

@media (max-width: 480px) {
	.logo-carousel-container {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}

	.logo-container,
	.content {
		flex-grow: 1;
		flex-basis: 50%; /* Adjust as necessary */
	}

	.logo {
		width: 15vw; /* Adjust based on design needs */
		height: auto; /* Maintain aspect ratio */
	}

	.carousel-container,
	.carousel,
	.carousel-item img {
		max-width: 100%;
		height: auto; /* Adjust based on your design needs */
	}

	/* Optionally hide the hamburger menu on small screens if it overlaps */
	.hamburger {
		display: none;
	}
}
</style>
