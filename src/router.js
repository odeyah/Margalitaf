import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Baking from './views/Baking.vue';
import Contact from './views/Contact.vue';
import Cooking from './views/Cooking.vue';
import Courses from './views/Courses.vue';
import Crafts from './views/Crafts.vue';
import Gallery from './views/Gallery.vue';
import Jewelry from './views/Jewelry.vue';
import Origami from './views/Origami.vue';
import Rhythmics from './views/Rhythmics.vue';
import notFound from './views/notFound.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/About',
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
	{ path: '/:pathMatch(.*)*', name: 'NotFound', component: notFound },
];

// Create router instance
const router = createRouter({
	history: createWebHistory('/'),
	routes,
});

export default router;
