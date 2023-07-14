import {useauthStore} from "~/store/authStore";

export default defineNuxtPlugin(nuxtApp  => {
   console.log("plugin is runing");
   const authStore=useauthStore();
   authStore.setCurrentUserValue();

})