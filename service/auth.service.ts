import { ApiResponse } from 'models/apiResponse';
import { fetchApi } from '@/utilities/customeFetchApi';
import { registerDTO } from '~/models/auth/registerDTO';
import {loginDTO} from "~/models/auth/loginDTO";
import {loginResultDTO} from "~/models/auth/successLogin";

export function registerUser(command: registerDTO): Promise<ApiResponse<undefined>> {
    return fetchApi("/auth/register", {
        method: "post",
        body: command,
    })
}


export function  loginUser(phoneNumber:string,password:string): Promise<ApiResponse<loginResultDTO>>{
    return  fetchApi("/auth/login",
        {
            method: "post",
            body: {
                phoneNumber: phoneNumber,
                password: password
            }
        })
}