export interface RootObject {
    banners: Banner[];
    sliders: Slider[];
    latestProduct: LatestProduct[];
    amazingProducts: LatestProduct[];
}

export interface LatestProduct {
    id: number;
    title: string;
    slug: string;
    inventoryId: number;
    price: number;
    discountPercentage: number;
    imageName: string;
    rate: string;
    shopName: string;
    commentCount: number;
    totalPrice: number;
}

export interface Slider {
    id: number;
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
    position: number;
}

export enum bannerPosition{
    بالای صفحه,
    پایین صفحه,
    سمت راست شگفت انگیز,
    وسط صفحه,


}