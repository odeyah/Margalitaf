<script>
import cookingIMG from '../assets/cooking.jpg';
import craftsIMG from '../assets/crafts2.jpg';
import origamiIMG from '../assets/Origami.jpg';
import indexIMG from '../assets/index.jpg';
import jewelryIMG from '../assets/jewelry.png';
import rhythmicsIMG from '../assets/rhythmics.jpg';
import Baking from './Baking.vue';
import Origami from './Origami.vue';
import Cooking from './Cooking.vue';
import Rhythmics from './Rhythmics.vue';
import Crafts from './Crafts.vue';
import Jewelry from './Jewelry.vue';

export default {
	name: 'Home',
	data() {
		return {
			courses: [
				{
					img: indexIMG,
					header: 'חוג אפייה',
					paragraph: 'חוג אפייה בקבוצות 3.5-7 ו-8-12',
					path: 'Baking',
				},
				{
					img: craftsIMG,
					header: 'חוג יצירה בעקבות סיפור',
					paragraph: 'שומעים סיפור ומכינים יצירה שקשורה לסיפור',
					path: 'Crafts',
				},
				{
					img: origamiIMG,
					header: 'חוג אוריגמי ועיצוב מפיות',
					paragraph: 'בכל חוג נכין צורת אוריגמי ונקפל מפיות בצורה חדשה',
					path: 'Origami',
				},
				{
					img: cookingIMG,
					header: 'חוג בישול',
					paragraph: 'חוג בישול לילדים מגיל 9-12',
					path: 'Cooking',
				},
				{
					img: jewelryIMG,
					header: 'חוג תכשיטנות',
					paragraph: 'חוג תכשיטנות לילדים בו נכין צמידים ושרשראות',
					path: 'Jewelry',
				},
				{
					img: rhythmicsIMG,
					header: 'חוג ריתמיקה',
					paragraph: 'חוג ריתמיקה לילדים',
					path: 'Rhythmics',
				},
			],
		};
	},
};
</script>
<template>
	<div class="mainDiv">
		<h1 style="color: #fe5bac">בית החוגים של מרגליטף</h1>
		<br /><br /><br /><br />
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
		<ul style="align-self: center; list-style: none">
			<li><span> &#9672;</span>יחס אישי</li>
			<li><span> &#9672;</span>חום ואהבה</li>
			<li><span> &#9672;</span>ביטחון עצמי</li>
			<li><span> &#9672;</span>חדוות יצירה</li>
			<li><span> &#9672;</span>שפע של תוצרת</li>
			<li><span> &#9672;</span>חוויה מהנה ובלתי נשכחת</li>
		</ul>
		<br /><br />
		<span style="padding-right: 120px; font-size: large">נשמח לראותכם אצלנו - צוות </span
		><span style="color: #fe5bac; font-size: large"><strong style="font-weight: 1000">מרגליטף</strong></span>
		<p style="padding-right: 50px">לפרטים נוספים והרשמה התקשרו למרגלית 0528460331</p>
		<br />
		<div class="course-area">
			<router-link v-for="(course, index) in courses" :key="index" :to="`/Course/${course.path}`" class="course">
				<img :src="course.img" alt="Course Image" style="height: 150px" />
				<h3>{{ course.header }}</h3>
				<p>{{ course.paragraph }}</p>
			</router-link>
		</div>
	</div>
</template>

<style>
h1 {
	position: absolute; /* Absolute positioning for the title */
	right: 15%; /* Adjust position as needed */
	top: 0; /* Ensure it aligns properly */
	left: 15%;
	color: #fe5bac;
	text-align: center;
}

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
.mainDiv {
	width: 700px;
	font-size: 18px;
	font-family: Helvetica, sans-serif;
	padding-right: 70px;
}
</style>
