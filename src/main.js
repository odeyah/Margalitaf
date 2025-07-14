import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import PrimeVue from 'primevue/config';
import Carousel from 'primevue/carousel';

const app = createApp(App);

app.use(router);
app.use(PrimeVue, { ripple: true, rtl: true });
app.component('Carousel', Carousel); // ✅ default export, NOT destructured

app.mount('#app');
