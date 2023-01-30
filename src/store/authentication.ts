import { defineStore } from "pinia";
import {router} from "@/router"
import {useMainStore} from "@/store/main"

export const useAuthenticationStore = defineStore("authentication", {
  state: () => ({
    email: "",
    password: "",
    user: ''
  }),
  getters: {
    isLoggedIn: (state) => state.user !== '',
  },
  actions: {
    login() {
      this.user = `${this.email}-${this.password}`
      router.push('/home')
    },
    logout(){
      const main = useMainStore();
      main.clearAllStores();
      router.push('/login')
    }
  },
});
