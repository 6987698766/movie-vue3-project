import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import "./assets/index.css";
import { setupWatchlistSubscription } from "@/stores/watchlist";

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);

setupWatchlistSubscription();

app.mount("#app");
