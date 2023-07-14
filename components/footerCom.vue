<template>
    <div class="footer">
        <div class="container">
            <div class="content">
                <div class="options">
                    <NuxtLink to="/" class="expressIcon">
                        <span>امکان تحویل اکسپرس</span>
                    </NuxtLink>
                    <NuxtLink to="/" class="deliverIcon">
                        <span>امکان پرداخت در محل</span>
                    </NuxtLink>
                    <NuxtLink to="/" class="fastDeliverIco">
                        <span>
                            ضمانت اصل بودن کالا
                        </span>
                    </NuxtLink>
                    <NuxtLink to="/" class="granteeIcon">
                        <span>۷ روز هفته، ۲۴ ساعته</span>
                    </NuxtLink>
                </div>
                <div class="fContent">
                    <div class="content">
                        <h1>باما</h1>
                        <NuxtLink>اتاق خبر</NuxtLink>
                        <NuxtLink>فروش در سایت</NuxtLink>
                        <NuxtLink>فرصت های شغلی</NuxtLink>
                        <NuxtLink>تماس با ما</NuxtLink>
                        <NuxtLink>درباره ما</NuxtLink>
                    </div>
                    <div class="content">
                        <h1>خدمات مشتریان</h1>
                        <NuxtLink>پاسخ به پرسشهای متداول</NuxtLink>
                        <NuxtLink>رویه های بازگرداندن کالا</NuxtLink>
                        <NuxtLink>شرایط استفاده</NuxtLink>
                        <NuxtLink>گزارش باگ</NuxtLink>
                        <NuxtLink>حریم خصوصی</NuxtLink>
                    </div>
                    <div class="content">
                        <h1>راهنمای خرید از سایت</h1>
                        <NuxtLink>نحوه ثبت سفارش</NuxtLink>
                        <NuxtLink>رویه ارسال سفارش</NuxtLink>
                        <NuxtLink>شیوه های پرداخت</NuxtLink>
                    </div>
                    <div class="socialMedia">
                        <h1>با ما همراه باشید</h1>
                        <NuxtLink class="icon telegramIcon"></NuxtLink>
                        <NuxtLink class="icon instagramIcon"></NuxtLink>
                        <NuxtLink class="icon twitterIcon"></NuxtLink>
                        <NuxtLink class="icon facebookIcon"></NuxtLink>
                    </div>
                </div>
            </div>

            <div class="sendComments">
                <h4>از جدیدترین تخفیف ها باخبر شوید</h4>
                <div>
                    <input type="text" class="input w100" placeholder="لطفا ایمیل خود را وارد نمایید">
                    <button class="btn info">
                        ثبت
                    </button>
                </div>
            </div>
            <div class="describeShop">
                <div class="more">
                    <h1>فروشگاه اینترنتی یکتاکالا بررسی، انتخاب و خرید آنلاین</h1>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها
                        و
                        متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
                        کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                        آینده،
                        شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
                        الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد</p>

                </div>
                <div class="trustCard">
                    <NuxtLink>
                        <img src="../public/images/footerImage/Enamad.png" alt="">
                    </NuxtLink>
                    <NuxtLink>
                        <img src="../public/images/footerImage/Enamad.png" alt="">
                    </NuxtLink>
                    <NuxtLink>
                        <img src="../public/images/footerImage/Enamad.png" alt="">
                    </NuxtLink>
                </div>
            </div>
            <div class="copyRigth">
                <p>استفاده از مطالب فروشگاه اینترنتی یکتاکالا فقط برای مقاصد غیرتجاری و با ذکر منبع بلامانع است. کلیه حقوق
                    این سایت متعلق به echo_designer می‌باشد.</p>
            </div>
        </div>
    </div>
</template>

<style>
.footer {
    display: flow-root;
    width: 100%;
    text-align: center;
}

.footer .options {
    display: flex;
    gap: 80px;
    justify-content: center;
    border-bottom: var(--border);
    padding-bottom: 40px;
}

.footer .options a {
    display: flex;
    flex-direction: column;
    font-weight: bold;
    color: var(--txtColor);
    font-size: 10.5pt;
    justify-content: center;
}

.footer .options a::before {
    content: "";
    display: block;
    width: 130px;
    height: 130px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 90px;
    margin: 0 auto;
}

.expressIcon::before {
    background-image: url(../public/images/footerImage/express.svg);
}

.deliverIcon::before {
    background-image: url(../public/images/footerImage/deliver.svg);
}

.fastDeliverIco::before {
    background-image: url(../public/images/footerImage/fastDeliver.svg);
}

.granteeIcon::before {
    background-image: url(../public/images/footerImage/Garantee.svg);
}

.fContent {
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
}

.fContent div h1 {
    font-size: 12pt;
    display: flow-root;
    text-align: right;
}

.fContent div.content a {
    display: flow-root;
    text-align: right;
    color: #81858b;
    line-height: 2;
    font-size: 10pt;
}


.socialMedia {
    text-align: right;
}

.socialMedia h1 {
    margin-right: 6px;
}

.socialMedia a {
    display: inline-block;
    margin: 0 10px;
}

.socialMedia a:last-child {
    margin-right: 0;
}

.socialMedia .icon::before {
    background-color: var(--txtColor);
    -webkit-mask-size: 28px;
}

.socialMedia .telegramIcon::before {
    -webkit-mask-image: url(../public/icons/social/telegram.svg);
    transition: var(--transition);
}

.socialMedia .instagramIcon::before {
    -webkit-mask-image: url(../public/icons/social/Instagram.svg);
    transition: var(--transition);
}

.socialMedia .facebookIcon::before {
    -webkit-mask-image: url(../public/icons/social/facebook_f.svg);
    transition: var(--transition);
}

.socialMedia .twitterIcon::before {
    -webkit-mask-image: url(../public/icons/social/twitter.svg);
    transition: var(--transition);
}

.socialMedia .telegramIcon:hover::before,
.facebookIcon:hover::before {
    background-color: var(--hover);
    transition: var(--transition);
}

.socialMedia .instagramIcon:hover::before {
    background-color: var(--danger);
    transition: var(--transition);
}

.socialMedia .twitterIcon:hover::before {
    background-color: #038da1;
    transition: var(--transition);
}

.sendComments {
    display: block;
    float: left;
    width: calc(33% - 10px);
    text-align: right;
    margin-bottom: 30px;
}

.sendComments h4 {
    margin: 0 0px 10px;
    font-size: 13pt;
    font-weight: 800;
}

.sendComments div {
    position: relative;
}

.sendComments .info {
    position: absolute;
    top: 4px;
    left: 14px;
}

/* .more{
    display: flow-root;
    margin-top: 25px;
} */

.more h1 {
    margin: 0;
    font-size: 14pt;
    margin-bottom: 10px;
}


.more p {
    margin: 0;
    font-size: 10pt;
    color: var(--primaryTextColor);
    text-align: justify;
    line-height: 2;
}

.trustCard a {
    display: inline-block;
    width: 100px;
    height: 100px;
    border-radius: 10px;
    margin: 0 10px;
    padding: 5px;
    border: var(--border);
    overflow: hidden;
}

.trustCard a:last-child {
    margin-left: 0;
}

.describeShop {
    display: flow-root;
    width: 100%;
    margin-top: 25px;
}


.describeShop div {
    display: inline-block;
    width: calc(50% - 10px);
    vertical-align: top;
}

.describeShop .more {
    text-align: right;
}

.describeShop .trustCard {
    text-align: left;
}

.describeShop img {
    width: 100%;
    height: 100%;
}

.copyRigth p{
    color: var(--primaryTextColor);
    font-size: 11pt;
    margin-top: 30px;
    margin-bottom: 15px;
}

</style>