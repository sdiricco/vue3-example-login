import { defineStore } from 'pinia'

export const useLayoutStore = defineStore("layout", {
  state: () => ({ drawer: false }),
  actions: {
    toggleDrawer(){
        this.drawer = !this.drawer;
    },
    showDrawer(){
        this.drawer = true;
    },
    hideDrawer(){
        this.drawer = false;
    }
  }
});
