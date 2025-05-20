import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
// import '@fontsource/inter/variable.css'
// import '@fontsource/inter/index.css'


import { OhVueIcon, addIcons } from "oh-vue-icons";
import { RiArrowDropDownLine, BiCartCheck} from "oh-vue-icons/icons";
addIcons(RiArrowDropDownLine, BiCartCheck);

const app = createApp(App)
app.use(router)
app.component("v-icon", OhVueIcon)
app.mount('#app')