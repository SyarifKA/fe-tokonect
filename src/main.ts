import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'


import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
    RiArrowDropDownLine,
    BiCartCheck,
    MdSearchTwotone,
    BiTwitter,
    CoFacebookF,
    BiInstagram,
    BiYoutube
} from "oh-vue-icons/icons";
addIcons(RiArrowDropDownLine,
    BiCartCheck,
    MdSearchTwotone,
    BiTwitter,
    CoFacebookF,
    BiInstagram,
    BiYoutube
);

const app = createApp(App)
app.use(router)
app.component("v-icon", OhVueIcon)
app.mount('#app')