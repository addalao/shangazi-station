import { createApp } from 'vue'
import App from './App.vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import router from './route';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
createApp(App).use(router).component('Swiper', Swiper).component('SwiperSlide', SwiperSlide).mount('#app')
