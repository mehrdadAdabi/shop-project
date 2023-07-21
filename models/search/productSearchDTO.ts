// extend یعنی هرچی پدر داره باید فرزند هم داشته باشد.
import {baseFilterParam} from "~/models/base/baseParamFilter";
import {baseFilterResult} from "~/models/base/productFilterResult";
import {productCardDTO} from "~/models/productCardDTO";

export interface  productFilterResult extends  baseFilterResult<productCardDTO,productFilterParams>{}

export interface  productFilterParams extends baseFilterParam{
    CategorySlug:string,
    Search:string,
    OnlyAvailableProducts:string,
    JustHasDiscount:boolean,
    StartPrice:string,
    EndPrice:string,
    SearchOrderBy:productSearchOrderBy,
}

export enum productSearchOrderBy{
    latest=0,
    expensive=1,
    cheapest=2,
}