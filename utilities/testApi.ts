import {FetchError, FetchOptions} from "ohmyfetch"
import {Base_URL} from "~/utilities/ApiConfig";
export function fetchCountry<t>(url: string, config: FetchOptions = {}){
    config = {
        baseURL: "https://restcountries.com/v3.1", ...config,
    };
    // @ts-ignore
    return $fetch(url, config).then(res=>{
        return res;
    })
}