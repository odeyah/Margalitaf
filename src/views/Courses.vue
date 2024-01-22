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
import Baking from './Baking.vue';
import Origami from './Origami.vue';
import Cooking from './Cooking.vue';
import Rhythmics from './Rhythmics.vue';
import Crafts from './Crafts.vue';
import Jewelry from './Jewelry.vue';

export default {
	name: 'Courses',
	data() {
		return {
			courses: [
				{
					img: cheeseIMG,
					header: 'חוג אפייה',
					paragraph: 'חוג אפייה בקבוצות 3.5-7 ו-8-12',
					name: Baking,
				},
				{
					img: monsterIMG,
					header: 'חוג יצירה בעקבות סיפור',
					paragraph: 'שומעים סיפור ומכינים יצירה שקשורה לסיפור',
					name: Crafts,
				},
				{
					img: rainbowIMG,
					header: 'חוג אוריגמי ועיצוב מפיות',
					paragraph: 'בכל חוג נכין צורת אוריגמי ונקפל מפיות בצורה חדשה',
					name: Origami,
				},
				{
					img: indexIMG,
					header: 'חוג בישול',
					paragraph: 'חוג בישול לילדים מגיל 9-12',
					name: Cooking,
				},
				{
					img: table1IMG,
					header: 'חוג תכשיטנות',
					paragraph: 'חוג תכשיטנות לילדים בו נכין צמידים ושרשראות',
					name: Jewelry,
				},
				{
					img: hartIMG,
					header: 'חוג ריתמיקה',
					paragraph: 'חוג ריתמיקה לילדים',
					name: Rhythmics,
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
		<router-link v-for="(course, index) in courses" :key="index" :to="`/${courses.name}`" class="course">
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
