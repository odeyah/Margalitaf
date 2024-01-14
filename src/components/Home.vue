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
	name: 'MainBar',
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
			methods: {
				goToCourse(id) {
					this.$router.push(`/course/${id}`);
				},
			},
		};
	},
};
</script>
<template>
	<div style="width: 700px; font-size: 18px; font-family: Helvetica, sans-serif; padding-right: 70px">
		<h1 style="color: #fe5bac">בית החוגים של מרגליטף</h1>
		<br />
		<br />
		<br /><br />
		<span>בית החוגים של </span>
		<span style="color: #fe5bac"><strong style="font-weight: 1000">מרגליטף</strong></span>
		<span>
			מציע מגוון חוגים חוויתיים לילדים מגיל 3.5 עד 12
			<br />
			<br />
			בחוגים שלנו הילדים עושים הכל הם מכינים הם יוצרים
			<br />
			<br />
			והכל בליווי צמוד של מרגלית מורה וגננת עם ניסיון רב בהנחיית חוגים לילדים
		</span>
		<br />
		<P>אצלנו הילדים יקבלו:</P>
		<span>יחס אישי, חום ואהבה, ביטחון עצמי, חדוות יצירה, שפע של תוצרת, חוויה מהנה ובלתי נשכחת </span>
		<br /><br />
		<span style="padding-right: 120px; font-size: large">נשמח לראותכם אצלנו - צוות </span
		><span style="color: #fe5bac; font-size: large"><strong style="font-weight: 1000">מרגליטף</strong></span>
		<p style="padding-right: 50px">לפרטים נוספים והרשמה התקשרו למרגלית 0528460331</p>
		<br />
		<div class="course-area">
			<router-link v-for="(course, index) in courses" :key="index" :to="`/${courses.name}`" class="course">
				<img :src="course.img" alt="Course Image" style="height: 150px" />
				<h3>{{ course.header }}</h3>
				<p>{{ course.paragraph }}</p>
			</router-link>
		</div>
	</div>
</template>

<style>
.course-area {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between; /* Adjust as needed */
}

.course {
	border: 1px solid #ccc; /* Example border */
	padding: 10px;
	text-align: center;
	flex-basis: calc(33.333% - 10px); /* Adjust the percentage and margin to fit three items per row */
	margin: 5px; /* Spacing between courses */
	box-sizing: border-box; /* Include padding and border in the element's total width and height */
}

.course img {
	max-width: 100%;
	height: auto;
}

/* Responsive adjustments if needed */
@media (max-width: 600px) {
	.course {
		flex-basis: calc(50% - 10px); /* Two items per row on smaller screens */
	}
}
</style>
