<script>
import About from './components/About.vue';
import MenuBar from './components/Menu.vue';
import Home from './components/Home.vue';
import Gallery from './components/Gallery.vue';
import GalleryTest from './components/GalleryTest.vue';

export default {
	components: {
		MenuBar,
		About,
		Home,
		Gallery,
		GalleryTest,
	},
};
</script>

<template>
	<div>
		<header>
			<MenuBar />
		</header>
		<br />
		<br />
		<main>
			<Home />
		</main>
	</div>
</template>
