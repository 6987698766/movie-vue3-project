import { defineStore } from "pinia";
// menu狀態集中管理
export const useMenuStore = defineStore("menu", {
  state: () => ({
    menuOpen: false,
  }),
  actions: {
    setMenuOpen() {
      this.menuOpen = !this.menuOpen;
    },
  },
});
