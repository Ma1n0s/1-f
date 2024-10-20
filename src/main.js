import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'


import router from '@/router'
import axios, { Axios } from 'axios'
// axios.defaults.baseURL = 'http://http://localhost:5173/login';

const url = import.meta.env.VITE_BACKEND_URL
axios.get(`http://localhost:80/sanctum/csrf-cookie`);


const app = createApp(App)
app.use(router)
app.mount('#app')



import { createApp } from 'vue';
import App from './App.vue';
import Comments from './components/Comments.vue';

app.component('comments', Comments);
app.mount('#app');