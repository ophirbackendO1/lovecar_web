import { createApp } from 'vue'
import './main.css';
import App from './views/App.vue'
import router from './routes';

//bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.js'

// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars,faPencil,faEnvelope,faPhone,faTrashCan,faXmark} from '@fortawesome/free-solid-svg-icons';
library.add(faBars,faPencil,faEnvelope,faPhone,faTrashCan,faXmark);

//toastification
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import { faInstagram,faFacebook,faFacebookMessenger, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
library.add(faInstagram,faFacebook,faFacebookMessenger,faLinkedin,faYoutube);

createApp(App)
.use(bootstrap).use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.provide('baseUrl', 'https://lovecar.autos/api')
.use(Toast).mount('#app');
