
import { createApp } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.vue'
import router from './router'

library.add(fas)

createApp(App).use(router).component('fa', FontAwesomeIcon).mount('#app');









