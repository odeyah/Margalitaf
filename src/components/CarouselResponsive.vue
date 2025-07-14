<template>
	<Carousel
		:items-to-show="itemsToShow"
		:wrap-around="true"
		:autoplay="3000"
		:pauseAutoplayOnHover="true"
		class="my-carousel"
	>
		<Slide v-for="(img, index) in images" :key="index">
			<img v-if="img" :src="img" alt="carousel image" class="carousel-image" />
			<div v-else class="carousel-fallback">Image Not Found</div>
		</Slide>
	</Carousel>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

const props = defineProps({
	images: Array,
});

const itemsToShow = ref(5);

const updateItemsToShow = () => {
	const width = window.innerWidth;
	if (width >= 1200) {
		itemsToShow.value = 5;
	} else if (width >= 600) {
		itemsToShow.value = 3;
	} else {
		itemsToShow.value = 1;
	}
};

onMounted(() => {
	updateItemsToShow();
	window.addEventListener('resize', updateItemsToShow);
});

onBeforeUnmount(() => {
	window.removeEventListener('resize', updateItemsToShow);
});
</script>

<style scoped>
.carousel-image {
	width: 100%;
	height: 150px;
	object-fit: cover;
	border-radius: 8px;
}
.carousel-fallback {
	width: 100%;
	height: 150px;
	background: #ccc;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.2rem;
	color: #555;
}
</style>
