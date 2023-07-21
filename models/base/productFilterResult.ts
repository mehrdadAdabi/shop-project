
// دلیل ساختن این base این است که ما عوامل تکراری داخل صفحه داریم و دیگه لازم نباشه دائم داخل کوئری هامون بیاریم برای همین یکبار مینویسیم و بار دیگر ارث بری میکنیم ازش
export interface baseFilterResult<T,Tparams> {
    entityCount: number;
    currentPage: number;
    pageCount: number;
    startPage: number;
    endPage: number;
    take: number;
    data:T[];
    filterParams:Tparams;
}