import {promises} from "dns";
import {ApiResponse} from "~/models/apiResponse";
import {userDTO} from "~/models/users/usersDTO";
import {fetchApi} from "~/utilities/customeFetchApi";

export const getCurrentUser=():Promise<ApiResponse<userDTO>> =>{
   return fetchApi("/users/current")
}