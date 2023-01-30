import { defineStore } from 'pinia'
import {useLayoutStore} from "@/store/layout"
import {useAuthenticationStore} from "@/store/authentication"

export const useMainStore = defineStore("main", {
  state: () => ({ }),
  actions: {
    clearAllStores() {
      const layout = useLayoutStore();
      const auth = useAuthenticationStore();
      layout.$reset();
      auth.$reset();
    },
  },
});
