<script>
export default {
	name: 'App',
	data() {
		return {
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
		};
	},
	mounted() {
		const itemWidth = 100;
		const totalItems = 11;
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
	},
};
</script>

<template>
	<div id="app">
		<header>
			<div class="container" style="width: 900px; height: 125px; background-color: #fe5bac">
				<div class="logo-container">
					<img alt="לוגו של מרגליטף" class="logo" src="./assets/Logo.jpg" width="125" height="125" />
					<span class="overlay-text">בס"ד</span>
				</div>
				<div class="content" style="width: 775px" ref="carousel">
					<div class="carousel-container">
						<div class="carousel" :style="{ transform: `translateX(${currentShift}px)` }">
							<div class="carousel-item"><img src="./assets/cheese.jpg" alt="Image 1" /></div>
							<div class="carousel-item"><img src="./assets/cookies.jpg" alt="Image 2" /></div>
							<div class="carousel-item"><img src="./assets/hart.jpg" alt="Image 1" /></div>
							<div class="carousel-item"><img src="./assets/index.jpg" alt="Image 2" /></div>
							<div class="carousel-item"><img src="./assets/Logo.jpg" alt="Image 1" /></div>
							<div class="carousel-item"><img src="./assets/monster.jpg" alt="Image 2" /></div>
							<div class="carousel-item"><img src="./assets/purim.jpg" alt="Image 1" /></div>
							<div class="carousel-item"><img src="./assets/rainbow.jpg" alt="Image 2" /></div>
							<div class="carousel-item"><img src="./assets/table.jpg" alt="Image 1" /></div>
							<div class="carousel-item"><img src="./assets/table1.jpg" alt="Image 2" /></div>
							<div class="carousel-item"><img src="./assets/cheese.jpg" alt="Image 1" /></div>
						</div>
						<nav class="menu-bar">
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
			</div>
		</header>
		<br />
		<br />
		<main>
			<router-view />
		</main>
	</div>
</template>
<style>
.container {
	display: flex;
	justify-content: space-between;
}

.content {
	flex-grow: 1;
}
.carousel-container {
	overflow: hidden;
	width: 775px;
	height: 200px; /* Adjust based on your design */
}

.carousel {
	display: flex;
	transition: transform 1s ease-in-out;
}

.carousel-item {
	flex: none;
	/* width: 100px; This should correspond to the width of the container */
	height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
}

.carousel-item img {
	max-width: 100%;
	max-height: 100%;
}

.logo-container {
	position: relative;
	display: inline-block; /* Or 'block' depending on your layout */
}

.logo {
	width: 125px;
	height: 125px;
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
</style>
