import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'animate.css'
import'animate.css/animate.min.css'

createApp(App).use(store).use(router).mount('#app')
