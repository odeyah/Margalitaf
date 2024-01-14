import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Baking from './components/Baking.vue';
import Contact from './components/Contact.vue';
import Cooking from './components/Cooking.vue';
import Courses from './components/Courses.vue';
import Crafts from './components/Crafts.vue';
import Gallery from './components/Gallery.vue';
import Jewelry from './components/Jewelry.vue';
import Origami from './components/Origami.vue';
import Rhythmics from './components/Rhythmics.vue';

// ... import other components

Vue.use(Router);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/about',
		name: 'About',
		component: About,
	},
	{
		path: '/Courses',
		name: 'Courses',
		component: Courses,
	},
	{
		path: '/Contact',
		name: 'Contact',
		component: Contact,
	},
	{
		path: '/Gallery',
		name: 'Gallery',
		component: Gallery,
	},
	{
		path: '/Course/Baking',
		name: 'Baking',
		component: Baking,
	},
	{
		path: '/Course/Cooking',
		name: 'Cooking',
		component: Cooking,
	},
	{
		path: '/Course/Crafts',
		name: 'Crafts',
		component: Crafts,
	},
	{
		path: '/Course/Jewelry',
		name: 'Jewelry',
		component: Jewelry,
	},
	{
		path: '/Course/Origami',
		name: 'Origami',
		component: Origami,
	},
	{
		path: '/Course/Rhythmics',
		name: 'Rhythmics',
		component: Rhythmics,
	},
];

const router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
