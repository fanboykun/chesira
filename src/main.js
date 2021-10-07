import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/styles/app.css";

// importing AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)
app.use(AOS.init({
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    // offset: 100, // offset (in px) from the original trigger point
    // delay: 0, // values from 0 to 3000, with step 50ms
    // duration: 1000, // values from 0 to 3000, with step 50ms
    // easing: 'ease-in-out', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
}));
app.use(router)
app.mount("#app");