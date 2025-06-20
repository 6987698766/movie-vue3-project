import { createI18n } from "vue-i18n";
import message from "./common.json";

const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "zh-TW",
  messages: message,
});

export { i18n };
