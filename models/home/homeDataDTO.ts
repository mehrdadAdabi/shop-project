import {productCardDTO} from "~/models/productCardDTO";
export interface SliderDTO {
    creationDate: string;
    title: string;
    link: string;
    imageName: string;
}

export interface Banner {
    id: number;
    creationDate: string;
    link: string;
    imageName: string;
    position: bannerPosition;
}

export enum bannerPosition{
    زیر_اسلایدر=0,
    سمت_چپ_اسلایدر=1,
    بالای_اسلایدر=2,
    سمت_راست_شگفت_انگیز=3,
    وسط_صفحه=4,

}

// export HomePage Content

export interface HomeDataDTO {
    banner: Banner[];
    lateProduct: productCardDTO[];
    slider: SliderDTO[];
    amazingProductDTO:productCardDTO[];
}
