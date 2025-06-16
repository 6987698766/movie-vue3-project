import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import "./assets/index.css";
import { setupWatchlistSubscription } from "@/stores/watchlist";
import { i18n } from "@/i18n";

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(i18n);

setupWatchlistSubscription();

app.mount("#app");
