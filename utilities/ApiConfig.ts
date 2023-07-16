const isProduction=process.env.NODE_ENV == "production";
//برای درخواست دادن به سرور در حالت های مختلف

export const Base_URL= isProduction ? "shop-api.codeyad-project.ir/api" : "http://localhost:3000/api"