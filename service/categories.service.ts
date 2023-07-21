import {fetchApi} from "~/utilities/customeFetchApi";
import {promises} from "dns";
import {ApiResponse} from "~/models/apiResponse";
import {CategoryDto} from "~/models/categories/categoriesDTO";

export const getAllCategories=():Promise<ApiResponse<CategoryDto[]>> =>{
     return fetchApi("/Category");
}