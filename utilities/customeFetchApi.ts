import {FetchError, FetchOptions} from "ohmyfetch"
import {ApiResponse, AppStatusCode} from "@/models/apiResponse";
import { BASE_URL } from "~/utilities/Api"
import {useauthStore} from "~/store/authStore";
import {loginResultDTO} from "~/models/auth/successLogin";


export async function fetchApi<T>(url: string, config: FetchOptions = {}): Promise<ApiResponse<T>> {
    config = {
        baseURL: BASE_URL, ...config,
    };
    const authStore=useauthStore()
    if (!config.headers){
        config.headers={}
    }

    if (authStore && authStore.isLogin){
        const loginRes=authStore.loginResult;
        // @ts-ignore
        config.headers["Authorization"]=`Bearer ${loginRes?.token}`
    }
    // @ts-ignore
    return $fetch(url, config).then((res)=>{
        return res
    }).catch((e:FetchError)=>{
        return{
            data:null,
            isSuccess:false,
            metaData:{
                appStatusCode:AppStatusCode.serverError,
                message:
                    e.response?._data ?.MetaData?.Message ?? "درعملیات مورد نظر مشکلی به وجود امده است!"
            }
        }
    })



}


