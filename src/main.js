// main.js or main.ts
// import MenuBar from './components/menu.vue';
// import About from './components/About.vue';
// import Main from './components/main.vue';
import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import router from './router'; // Import the router

Vue.config.productionTip = false;

new Vue({
	router, // Use the router
	render: h => h(App),
}).$mount('#app');
// import Contact from './components/Contact.vue';
// Define your routes
// const routes = [
// 	{ path: '/Home', component: Home }, // :id is a dynamic segment
// 	{ path: '/About', component: About },
// 	{ path: '/Gallery', component: Gallery },
// 	// { path: '/course/4', component: Origami },
// 	// { path: '/course/5', component: Cooking },
// 	// { path: '/course/6', component: Cooking },
// ];

// const router = createRouter({
// 	history: createWebHistory(),
// 	routes,
// });

const app = createApp(App);
app.use(router);
app.mount('#app');
