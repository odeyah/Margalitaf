<script>
import cookingIMG from '../assets/cooking.jpg';
import craftsIMG from '../assets/crafts2.jpg';
import origamiIMG from '../assets/Origami.jpg';
import bakingIMG from '../assets/index.jpg';
import jewelryIMG from '../assets/jewelry.png';
import rhythmicsIMG from '../assets/rhythmics.jpg';

export default {
	name: 'Courses',
	data() {
		return {
			courses: [
				{
					img: bakingIMG,
					header: 'חוג אפייה',
					paragraph: 'חוג אפייה בקבוצות 3.5-7 ו-8-12',
					name: 'Baking',
				},
				{
					img: craftsIMG,
					header: 'חוג יצירה בעקבות סיפור',
					paragraph: 'שומעים סיפור ומכינים יצירה שקשורה לסיפור',
					name: 'Crafts',
				},
				{
					img: origamiIMG,
					header: 'חוג אוריגמי ועיצוב מפיות',
					paragraph: 'בכל חוג נכין צורת אוריגמי ונקפל מפיות בצורה חדשה',
					name: 'Origami',
				},
				{
					img: cookingIMG,
					header: 'חוג בישול',
					paragraph: 'חוג בישול לילדים מגיל 9-12',
					name: 'Cooking',
				},
				{
					img: jewelryIMG,
					header: 'חוג תכשיטנות',
					paragraph: 'חוג תכשיטנות לילדים בו נכין צמידים ושרשראות',
					name: 'Jewelry',
				},
				{
					img: rhythmicsIMG,
					header: 'חוג ריתמיקה',
					paragraph: 'חוג ריתמיקה לילדים',
					name: 'Rhythmics',
				},
			],
		};
	},
};
</script>
<template>
	<h1>החוגים של מרגליטף</h1>
	<br /><br /><br /><br />
	<div class="course-area">
		<router-link v-for="(course, index) in courses" :key="index" :to="`/Course/${course.name}`" class="course">
			<img :src="course.img" alt="Course Image" style="height: 150px" />
			<h3>{{ course.header }}</h3>
			<p>{{ course.paragraph }}</p>
		</router-link>
	</div>
</template>
<style>
h1 {
	color: #fe5bac;
}
.course-area {
	width: 700px;
}
</style>
