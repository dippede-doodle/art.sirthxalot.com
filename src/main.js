import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import 'what-input'
import mitt from 'mitt'
import {VueReadingTime} from 'vue-reading-time'
import StickyElement from 'vue-sticky-element';
//import 'vue-sticky-element/css';

const emitter = mitt()
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('el-sticky', StickyElement)
app.component('time-to-read', VueReadingTime)

app.config.globalProperties.emitter = emitter

app.mount('#app')
