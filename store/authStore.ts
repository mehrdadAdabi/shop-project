import  {defineStore} from 'pinia';
import {computed, Ref} from "vue";
import {loginResultDTO} from "~/models/auth/successLogin";
import {userDTO} from "~/models/users/usersDTO";
import {loginUser} from "~/service/auth.service";
import {AppStatusCode} from "~/models/apiResponse";
import {getCurrentUser} from "~/service/user.service";

export  const useauthStore = defineStore("auth-data",(): {
    loginResult: Ref<loginResultDTO | null>;
    isLogin: ComputedRef<boolean>;
    currentUser: Ref<userDTO | null>;
    setCurrentUserValue: () => Promise<void>;
    loading: Ref<boolean>
} =>{
    const  loginResult:Ref<loginResultDTO | null>=ref(null);
    const currentUser:Ref<userDTO | null>=ref(null)
    const isLogin=computed(()=>loginResult.value!=null);
    const loading=ref(false);
    const setCurrentUserValue=async ()=>{
        const localStorageData=localStorage.getItem("auth-data");
        if (!localStorageData) return;
        const loginData=JSON.parse(localStorageData)
        loginResult.value=loginData;
        loading.value=true
        const result= await  getCurrentUser();
        if (result.isSuccess) currentUser.value=result.data
        else if(result.metaData.appStatusCode==AppStatusCode.UnAuthorize){
            loginResult.value=null;
            localStorage.removeItem("auth-data")
        }
        loading.value=false
    }
    return {loginResult,currentUser,isLogin,loading,setCurrentUserValue}
})
