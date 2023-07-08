import { createApp } from "vue";
import { store } from "./store";
import App from "./App.vue";
import "@/assets/css/style.css"

createApp(App).use(store).mount("#app");
