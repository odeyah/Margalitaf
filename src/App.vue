<script>
import LeftSide from './components/LeftSide.vue';
import CarouselResponsive from './components/CarouselResponsive.vue';
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import cheeseImg from './assets/cheese.jpg';
import cookiesImg from './assets/cookies.jpg';
import cookingImg from './assets/hart.jpg';
import monsterImg from './assets/monster.jpg';
import indexImg from './assets/index.jpg';
import tableImg from './assets/table1.jpg';
import purimImg from './assets/purim.jpg';
import rainbowImg from './assets/rainbow.jpg';
import tabImg from './assets/table.jpg';

export default {
	name: 'App',
	components: {
		LeftSide,
		CarouselResponsive,
	},
	setup() {
		const menuItems = ref([
			{ label: 'בית', to: '/' },
			{ label: 'אודות', to: '/About' },
			{
				label: 'חוגים ▼',
				items: [
					{ label: 'חוג אפייה', to: '/Courses/Baking' },
					{ label: 'חוג בישול', to: '/Courses/Cooking' },
					{ label: 'חוג יצירה', to: '/Courses/Crafts' },
					{ label: 'חוג ריתמיקה', to: '/Courses/Rhythmics' },
				],
			},
			{ label: 'גלריה', to: '/Gallery' },
			{ label: 'צור קשר', to: '/Contact' },
		]);

		const courses = computed(() => {
			const courseMenu = menuItems.value.find(item => item.label === 'חוגים ▼');
			return courseMenu?.items || [];
		});

		const images = [cheeseImg, cookingImg, cookiesImg, purimImg, monsterImg, indexImg, tabImg, rainbowImg, tableImg];

		const currentIndex = ref(0);
		let intervalId = null;
		const visibleSlides = 3;

		const carouselStyle = computed(() => {
			return {
				transform: `translateX(-${currentIndex.value * (100 / visibleSlides)}%)`,
			};
		});

		const nextSlide = () => {
			if (currentIndex.value < images.length - visibleSlides) {
				currentIndex.value++;
			}
		};

		const prevSlide = () => {
			if (currentIndex.value > 0) {
				currentIndex.value--;
			}
		};
		const carouselResponsiveOptions = [
			{
				breakpoint: '1800px',
				numVisible: 6,
				numScroll: 1,
			},
			{
				breakpoint: '1200px',
				numVisible: 5,
				numScroll: 1,
			},
			{
				breakpoint: '992px',
				numVisible: 4,
				numScroll: 1,
			},
			{
				breakpoint: '600px',
				numVisible: 2,
				numScroll: 1,
			},
			{
				breakpoint: '480px',
				numVisible: 1,
				numScroll: 1,
			},
		];

		onMounted(() => {
			intervalId = setInterval(nextSlide, 3000);
		});

		onBeforeUnmount(() => {
			clearInterval(intervalId);
			window.removeEventListener('resize', checkScreenSize);
		});

		return {
			menuItems,
			courses,
			nextSlide,
			prevSlide,
			carouselStyle,
			images,
			showCourses: false, // To control the display of the courses submenu
			// currentShift: 0,
			// direction: 1, // 1 for right, -1 for left
			isMenuOpen: false,
			isSmallScreen: false,
		};
	},
	mounted() {
		this.checkScreenSize();
		window.addEventListener('resize', this.checkScreenSize);
	},

	methods: {
		toggleCoursesMenu(itemName) {
			if (this.isSmallScreen) {
				// Toggle submenu on click for small screens
				this.showCourses = this.showCourses ? false : itemName === 'חוגים ▼';
			} else {
				// Hover behavior for larger screens
				this.showCourses = itemName === 'חוגים ▼';
			}
		},

		toggleMenu() {
			this.isMenuOpen = !this.isMenuOpen;
		},
		checkScreenSize() {
			this.isSmallScreen = window.innerWidth <= 600; // Adjust breakpoint as needed
			// console.log(window.innerWidth);
			if (!this.isSmallScreen) {
				this.isMenuOpen = false;
			}
		},
	},
};
</script>

<template>
	<div id="app">
		<header>
			<div class="container">
				<div class="logo-container">
					<img alt="לוגו של מרגליטף" class="logo" src="./assets/Logo.jpg" />
					<span class="overlay-text">בס"ד</span>
				</div>

				<div class="content" ref="carousel">
					<div class="carousel-container">
						<div class="carousel-wrapper">
							<CarouselResponsive :images="images" />
						</div>
					</div>

					<button class="hamburger" v-if="isSmallScreen" @click="toggleMenu">
						{{ isMenuOpen ? '✖' : '&#9776;' }}
					</button>

					<nav class="menu-bar">
						<!-- MOBILE NAV -->
						<div v-if="isSmallScreen" class="mobile-nav">
							<div v-for="(item, index) in menuItems" :key="index" class="mobile-nav-item">
								<router-link v-if="item.label !== 'חוגים ▼'" :to="item.to" @click="toggleMenu">
									{{ item.label }}
								</router-link>
								<span v-else @click="toggleCoursesMenu(item.label)" class="submenu-toggle">
									{{ item.label }}
								</span>
								<div v-if="item.label === 'חוגים ▼' && showCourses" class="mobile-submenu">
									<router-link
										v-for="(course, cIndex) in courses"
										:key="cIndex"
										:to="course.to"
										class="mobile-submenu-item"
										@click="toggleMenu"
									>
										{{ course.label }}
									</router-link>
								</div>
							</div>
						</div>

						<!-- DESKTOP / TABLET MENU -->
						<div class="menu" :class="{ active: isMenuOpen && isSmallScreen }">
							<ul v-if="isMenuOpen || !isSmallScreen">
								<li
									v-for="item in menuItems"
									:key="item.label"
									@mouseover="toggleCoursesMenu(item.label)"
									@mouseleave="showCourses = false"
								>
									<router-link :to="item.to" @click="toggleMenu">{{ item.label }}</router-link>
									<ul v-if="item.label === 'חוגים ▼' && showCourses" class="submenu">
										<li v-for="course in courses" :key="course.to">
											<router-link :to="course.to" @click="toggleMenu">{{ course.label }}</router-link>
										</li>
									</ul>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</div>
		</header>

		<main>
			<div class="main-container">
				<div class="left-side">
					<LeftSide />
				</div>
				<div class="right-side">
					<router-view />
				</div>
			</div>
		</main>
	</div>
</template>

<style>
@media (max-width: 600px) {
	/* header {
		right: -100vw;
	} */
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
		max-height: 150px;
		height: 150px;
		overflow: hidden;
		position: relative;
		width: 100%;
	}

	.carousel {
		display: flex;
		transition: transform 1s ease-in-out;
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
	.submenu-toggle {
		color: white;
		padding: 10px;
		display: block;
		cursor: pointer;
	}

	.mobile-submenu {
		background-color: #2c3e50;
		padding-left: 20px;
	}

	.mobile-submenu-item {
		display: block;
		color: white;
		padding: 8px 10px;
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
		margin-right: 4vh; /* Space between menu items */
		/* padding-right: 4vh; */
		padding-left: 4vh;
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
	.main-container {
		display: flex; /* Use flexbox layout */
		width: 100vw; /* Full viewport width */
		height: 100vh; /* Full viewport height */
		direction: rtl; /* Set direction to RTL */
	}

	.right-side {
		flex: 1;
		background-color: #d0d0d0; /* Slightly darker grey for visibility */
		padding: 1rem; /* Padding for spacing */
	}

	.left-side {
		width: 15%; /* Fixed width for the right side */
		background-color: #f0f0f0; /* Light grey background for visibility */
		padding: 1rem; /* Padding for spacing */
	}
}

@media (min-width: 800px) {
	.menu-bar li {
		position: relative;
		margin-right: 7vh; /* Space between menu items */
		/* padding-right: 4vh; */
		padding-left: 7vh;
	}
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
		display: inline-block;
		width: 13%;
		height: 10%;
		flex-shrink: 0;
		padding-top: 0.25%;
	}
	.content {
		position: relative;
		display: inline-block;
		width: 86%;
		height: 9%;
		flex-shrink: 0;
	}
	.carousel-container {
		position: relative;
		display: inline-block;
		overflow: hidden;
		max-width: 100%;
		max-height: 100%;
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
		top: 5%;
		left: 88%;
		transform: translate(-50%, -50%);
		color: #fe5bac;
	}

	.menu-bar {
		margin-top: 0.7%;
		display: flex;
		justify-content: flex-start;
		background-color: #fe5bac; /* Ensure background is visible */
	}

	.menu-bar ul {
		display: flex; /* Align menu items horizontally */
		list-style-type: none;
		margin: 0;
		padding: 0;
	}

	.menu-bar li {
		position: relative;
		margin-right: 8vh; /* Space between menu items */
		padding-left: 8vh;
	}

	.menu-bar ul li a {
		display: block;
		color: white;
		text-align: center;
		text-decoration: none;
		padding: 10px; /* Add some padding */
	}

	.menu-bar ul li a:hover {
		background-color: #ddd;
		color: black;
	}

	.menu-bar li ul.submenu {
		display: none; /* Initially hidden */
		position: relative;
		top: 0; /* Position just below the menu item */
		left: 0; /* Align with the left edge of the parent menu item */
		z-index: 100; /* Ensure it's above other content */
		background-color: #fe5bac; /* Optional: background color */
		width: 90%;
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
	.submenu li a:hover {
		background-color: #ddd;
		color: black;
	}
	.main-container {
		display: flex; /* Use flexbox layout */
		width: 100vw; /* Full viewport width */
		height: 100vh; /* Full viewport height */
	}
	.right-side {
		flex: 1;
		padding: 1rem; /* Padding for spacing */
	}

	.left-side {
		width: 15%; /* Fixed width for the right side */
		padding: 1rem; /* Padding for spacing */
	}
}
.carousel-wrapper {
	width: 100%;
	height: 100%;
	overflow-x: visible;
	position: relative;
}
.carousel-track {
	display: flex;
	height: 100%;
	transition: transform 0.5s ease;
}

.carousel-slide {
	flex: 0 0 calc(100% / 5); /* Show 4 slides */
	height: 150px;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
}

.carousel-slide img {
	height: 100%;
	width: 100%;
	object-fit: cover;
	display: block;
}

.carousel-control {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	background: rgba(0, 0, 0, 0.5);
	color: white;
	font-size: 2rem;
	border: none;
	padding: 0.5rem;
	cursor: pointer;
	z-index: 2;
}

.carousel-control.left {
	left: 10px;
}

.carousel-control.right {
	right: 10px;
}
.img {
	width: 100%;
	height: auto;
	object-fit: cover;
}
</style>
