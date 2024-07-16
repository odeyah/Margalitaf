<script>
export default {
	name: 'Menu',
	data() {
		return {
			mainMenu: [
				{ he: 'בית', en: '' },
				{ he: 'אודות', en: 'About' },
				{ he: 'חוגים ▼', en: 'Courses' },
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
			currentShift: 0,
			direction: 1, // 1 for right, -1 for left
			isMenuOpen: false,
			isSmallScreen: false,
		};
	},
	mounted() {
		setInterval(() => {
			this.currentShift += this.direction * 100;

			if (this.currentShift <= 0 || this.currentShift >= 350) {
				this.direction *= -1; // Change direction
			}
		}, 3000); // Shift every 3 seconds
		// setInterval(this.slideToLeft, 5000); // Change slide every 5 seconds
		this.checkScreenSize();
		window.addEventListener('resize', this.checkScreenSize);
	},
	beforeDestroy() {
		window.removeEventListener('resize', this.checkScreenSize);
	},
	methods: {
		toggleCoursesMenu(itemName) {
			this.showCourses = itemName === 'חוגים ▼'; // Set showCourses to true only for the 'חוגים ▼' item
			console.log(this.showCourses);
		},
		toggleMenu() {
			this.isMenuOpen = !this.isMenuOpen;
		},
		checkScreenSize() {
			this.isSmallScreen = window.innerWidth <= 600; // Adjust breakpoint as needed
			console.log(window.innerWidth);
			if (!this.isSmallScreen) {
				this.isMenuOpen = false;
			}
		},
	},
	beforeDestroy() {
		window.removeEventListener('resize', this.checkScreenSize);
	},
};
</script>
<template>
	<div class="container">
		<div class="logo-container">
			<img alt="לוגו של מרגליטף" class="logo" src="./assets/Logo.jpg" />
			<span class="overlay-text">בס"ד</span>
		</div>
		<div class="content" ref="carousel">
			<div class="carousel-container">
				<div class="carousel" :style="{ transform: `translateX(${currentShift}px)` }">
					<div class="carousel-item"><img src="./assets/cheese.jpg" alt="Image 1" /></div>
					<div class="carousel-item"><img src="./assets/cookies.jpg" alt="Image 2" /></div>
					<div class="carousel-item"><img src="./assets/hart.jpg" alt="Image 1" /></div>
					<div class="carousel-item"><img src="./assets/index.jpg" alt="Image 2" /></div>
					<div class="carousel-item"><img src="./assets/monster.jpg" alt="Image 2" /></div>
					<div class="carousel-item"><img src="./assets/purim.jpg" alt="Image 1" /></div>
					<div class="carousel-item"><img src="./assets/rainbow.jpg" alt="Image 2" /></div>
					<div class="carousel-item"><img src="./assets/table.jpg" alt="Image 1" /></div>
					<div class="carousel-item"><img src="./assets/table1.jpg" alt="Image 2" /></div>
					<div class="carousel-item"><img src="./assets/cheese.jpg" alt="Image 1" /></div>
				</div>
				<button class="hamburger" v-if="isSmallScreen" @click="toggleMenu">{{ isMenuOpen ? '✖' : '&#9776;' }}</button>
				<nav class="menu-bar">
					<div class="menu regular-menu" v-if="!isSmallScreen">
						<ul>
							<li v-for="item in mainMenu" :key="item.en">
								<router-link :to="`/${item.en}`" @mouseover="toggleCoursesMenu(item.he)" @mouseleave="showCourses = false">{{
									item.he
								}}</router-link>
								<ul v-if="item.he === 'חוגים ▼' && showCourses" class="submenu">
									<li v-for="course in courses" :key="course.en">
										<router-link :to="`/${course.en}`">{{ course.he }}</router-link>
									</li>
								</ul>
							</li>
						</ul>
					</div>
					<div class="menu" :class="{ active: isMenuOpen && isSmallScreen }">
						<ul v-if="isMenuOpen">
							<li
								v-for="item in mainMenu"
								:key="item.en"
								@mouseover="toggleCoursesMenu(item.he)"
								@mouseleave="showCourses = false"
							>
								<router-link :to="`/${item.en}`">{{ item.he }}</router-link>
								<ul v-if="item.he === 'חוגים ▼' && showCourses" class="submenu">
									<li v-for="course in courses" :key="course.en">
										<router-link :to="`/${course.en}`">{{ course.he }}</router-link>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</div>
	</div>
</template>

<style>
@media (max-width: 600px) {
	.container {
		display: flex;
		width: 99%;
		height: 9%;
		background-color: #fe5bac;
	}
	.logo-container {
		position: relative;
		display: inline-block; /* Or 'block' depending on your layout */
		width: 30%;
		height: 10%;
		flex-shrink: 0;
		padding-top: 0.25%;
	}
	.content {
		position: relative;
		display: inline-block;
		width: 69.9%;
		height: 9%;
		flex-shrink: 0;
	}
	.carousel-container {
		position: relative;
		display: inline-block;
		overflow: hidden;
		max-width: 100%;
		max-height: 100%; /* Adjust based on your design */
	}

	.carousel {
		display: flex;
		transition: transform 1s ease-in-out;
	}
	a {
		width: 300%;
	}
	.carousel-item {
		position: inherit;
		flex: none;
		max-height: 100%;
		justify-content: center;
		align-items: center;
	}

	.carousel-item img {
		max-width: 100%;
		max-height: 100%;
	}

	.logo {
		max-width: 100%;
		min-width: 100%;
		max-height: 110%;
		min-height: 100%;
	}
	.overlay-text {
		position: absolute;
		top: 5%; /* Center vertically */
		left: 88%; /* Center horizontally */
		transform: translate(-50%, -50%); /* Adjust for exact centering */
		color: #fe5bac; /* Or any color that stands out */
		/* Additional styling for the text */
	}
	.hamburger {
		display: block;
		background-color: #fe5bac;
		color: white;
		border: none;
		font-size: 20px;
	}
	.menu-bar {
		font-size: larger;
	}
	.menu-bar ul {
		list-style-type: none;
		margin-top: -2%;
		margin-right: 5%;
		padding-right: 5%;
	}
	.menu-bar li {
		position: relative;
		margin-top: 1%; /* Space between menu items */
		padding-top: 1%;
		padding-bottom: 1%;
	}
	.menu-bar ul li a {
		color: white;
		text-align: center;
		padding: 1%; /*Adjust padding as needed */
		text-decoration: none;
	}

	.menu-bar li ul.submenu {
		display: none; /* Initially hidden */
		position: relative;
		top: 0; /* Position just below the menu item */
		left: 0; /* Align with the left edge of the parent menu item */
		z-index: 100; /* Ensure it's above other content */
		background-color: #fe5bac; /* Optional: background color */
		width: 200%;
		height: 100%; /* Adjust as needed or remove if not necessary */
	}

	.menu-bar li:hover ul.submenu {
		display: block; /* Show on hover */
	}

	/* Styles for submenu items */
	.submenu li {
		display: block;
		background-color: #fe5bac;
		color: black;
		text-align: right;
	}
}

/* Style for tablets */
@media (min-width: 601px) and (max-width: 1024px) {
	.container {
		display: flex;
		width: 99%;
		height: 9%;
		background-color: #fe5bac;
	}
	.logo-container {
		position: relative;
		display: inline-block; /* Or 'block' depending on your layout */
		align-self: right;
		flex-shrink: 0;
		max-width: 100%;
		max-height: 100%; /* Adjust based on your design */
		padding-top: 0.25%;
	}
	.content {
		position: relative;
		display: inline-block;
		align-self: left;
		width: 82%;
		height: 9%;
		flex-shrink: 0;
	}
	.carousel-container {
		position: relative;
		display: inline-block;
		overflow: hidden;
		max-width: 100%;
		max-height: 100%; /* Adjust based on your design */
	}

	.carousel {
		display: flex;
		transition: transform 1s ease-in-out;
	}
	a {
		width: 300%;
	}
	.carousel-item {
		position: inherit;
		flex: none;
		max-height: 100%;
		justify-content: center;
		align-items: center;
	}

	.carousel-item img {
		max-width: 100%;
		max-height: 100%;
	}

	.logo {
		max-width: 100%;
		max-height: 100%;
	}
	.overlay-text {
		position: absolute;
		top: 5%; /* Center vertically */
		left: 88%; /* Center horizontally */
		transform: translate(-50%, -50%); /* Adjust for exact centering */
		color: #fe5bac; /* Or any color that stands out */
		/* Additional styling for the text */
	}
	li {
		margin-right: 10%;
	}
	.hamburger {
		display: none;
	}
	.menu-bar {
		margin-top: 0.7%;
		/* background-color: #fe5bac; */
		/*height: 2%; /* Adjust height as needed */
		display: flex; /* Align items in a row */
		justify-content: flex-start; /* Align items to the right; use 'flex-start' for left alignment */
	}

	.menu-bar ul {
		list-style-type: none;
		display: flex; /* Align list items in a row */
		margin: 0;
		padding: 0;
	}

	.menu-bar li {
		position: relative;
		margin-right: 10%; /* Space between menu items */
		padding-right: 10%;
		padding-left: 10%;
	}

	.menu-bar ul li a {
		display: block;
		color: white;
		text-align: center;
		/* padding: 1%; /*Adjust padding as needed */
		text-decoration: none;
	}

	.menu-bar ul li a:hover {
		background-color: #ddd;
		color: black;
	}
	/*.menu-bar li ul.submenu {
		display: none; /* Initially hidden
		position: absolute; /* Position relative to the parent
		top: 100%; /* Position just below the menu item
		left: 0; /* Align with the left edge of the parent menu item
		z-index: 10; /* Ensure it's above other content
		background-color: #fe5bac; /* Optional: background color
		width: 200px; /* Adjust width as needed
		/* Add more styles as needed
	}*/
	/*.menu-bar li:hover ul.submenu {
		display: block; /* Show on hover
	}*/

	/* Styles for submenu items */
	/*.submenu li {
		display: none;
		background-color: #fe5bac;
		/* width: 50%;
		color: black;
		text-align: right;
		/* Add more styles as needed
	}*/
}

/* Style for desktops */
@media (min-width: 1025px) {
	.container {
		display: flex;
		width: 99%;
		height: 9%;
		background-color: #fe5bac;
	}
	.logo-container {
		position: relative;
		display: inline-block; /* Or 'block' depending on your layout */
		align-self: right;
		width: 13%;
		height: 10%;
		flex-shrink: 0;
		padding-top: 0.25%;
	}
	.content {
		position: relative;
		display: inline-block;
		align-self: left;
		width: 86%;
		height: 9%;
		flex-shrink: 0;
	}
	.carousel-container {
		position: relative;
		display: inline-block;
		overflow: hidden;
		max-width: 100%;
		max-height: 100%; /* Adjust based on your design */
	}
	.carousel {
		display: flex;
		transition: transform 1s ease-in-out;
	}
	a {
		width: 300%;
	}
	.carousel-item {
		position: inherit;
		flex: none;
		max-height: 100%;
		justify-content: center;
		align-items: center;
	}

	.carousel-item img {
		max-width: 100%;
		max-height: 100%;
	}

	.logo {
		max-width: 100%;
		min-width: 100%;
		max-height: 110%;
		min-height: 110%;
	}
	.overlay-text {
		position: absolute;
		top: 5%; /* Center vertically */
		left: 88%; /* Center horizontally */
		transform: translate(-50%, -50%); /* Adjust for exact centering */
		color: #fe5bac; /* Or any color that stands out */
		/* Additional styling for the text */
	}

	li {
		margin-right: 10%;
	}
	.hamburger {
		display: none;
	}
	.menu-bar {
		margin-top: 0.7%;
		/* background-color: #fe5bac; */
		/*height: 2%; /* Adjust height as needed */
		display: flex; /* Align items in a row */
		justify-content: flex-start; /* Align items to the right; use 'flex-start' for left alignment */
	}

	.menu-bar ul {
		list-style-type: none;
		display: flex; /* Align list items in a row */
		margin: 0;
		padding: 0;
	}
	.menu-bar li {
		position: relative;
		margin-right: 20%; /* Space between menu items */
		padding-right: 20%;
		padding-left: 20%;
	}
	.menu-bar ul li a {
		display: block;
		color: white;
		/*text-align: center;*/
		padding: 10px; /*Adjust padding as needed */
		text-decoration: none;
	}
	.menu-bar ul li a:hover {
		background-color: #ddd;
		color: black;
	}
	.menu-bar li ul.submenu {
		display: none; /* Initially hidden*/
		position: absolute; /* Position relative to the parent*/
		top: 100%; /* Position just below the menu item*/
		left: 0; /* Align with the left edge of the parent menu item*/
		z-index: 1000; /* Ensure it's above other content*/
		background-color: #fe5bac; /* Optional: background color*/
		width: 25%; /* Adjust width as needed*/
	}

	.menu-bar li:hover ul.submenu {
		display: block; /* Show on hover*/
	}

	/* Styles for submenu items*/
	.submenu li {
		display: block;
		background-color: #fe5bac;
		color: black;
		/* text-align: right; */
	}
}
</style>
