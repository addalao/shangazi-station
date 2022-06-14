import { createApp } from 'vue'
import App from './App.vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import router from './route';
import axios from 'axios'
import VueAxios from 'vue-axios'
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
createApp(App).use(VueAxios, axios).use(router).component('Swiper', Swiper).component('SwiperSlide', SwiperSlide).mount('#app')
