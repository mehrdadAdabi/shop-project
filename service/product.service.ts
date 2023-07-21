import {promises} from "dns";
import {ApiResponse} from "~/models/apiResponse";
import {productFilterParams, productFilterResult} from "~/models/search/productSearchDTO";
import {fetchApi} from "~/utilities/customeFetchApi";

export const getProductByFilter=(filterParam:productFilterParams):Promise<ApiResponse<productFilterResult>> =>{
    return fetchApi("/product/shop",{
        body:filterParam,
        method:"Get",
    });
}