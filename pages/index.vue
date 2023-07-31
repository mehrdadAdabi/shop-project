<template>
    <div class="aboutProduct">
        <div class="categories">
            <span class="txtIcon categoriesIcon categoriesTitle">
                دسته بندی کالا ها
            </span>
            <div class="moreCat">
<!--                <ul class="catTitle">-->
<!--                    <li>-->
<!--                        <NuxtLink class="title">لوازم دیجیتال</NuxtLink>-->
<!--                        <ul class="branch">-->
<!--                            <li>-->
<!--                                <NuxtLink>لوازم جانبی</NuxtLink>-->
<!--                            </li>-->
<!--                            <li>-->
<!--                                <NuxtLink>لوازم گوشی</NuxtLink>-->
<!--                            </li>-->
<!--                            <li>-->
<!--                                <NuxtLink>پاوربانک</NuxtLink>-->
<!--                            </li>-->
<!--                            <li>-->
<!--                                <NuxtLink>مچ بند و ساعت هوشمند</NuxtLink>-->
<!--                            </li>-->
<!--                            <li>-->
<!--                                <NuxtLink>واقعیت مجازی</NuxtLink>-->
<!--                            </li>-->
<!--                            <li>-->
<!--                                <NuxtLink>گوشی موبایل</NuxtLink>-->
<!--                            </li>-->
<!--                        </ul>-->
<!--                    </li>-->
<!--                    <li>-->
<!--                        <NuxtLink class="title">لوازم منزل</NuxtLink>-->
<!--                    </li>-->
<!--                    <li>-->
<!--                        <NuxtLink class="title">لوازم آشپزخانه</NuxtLink>-->
<!--                    </li>-->
<!--                    <li>-->
<!--                        <NuxtLink class="title">لوازم ماشین</NuxtLink>-->
<!--                    </li>-->
<!--                </ul>-->
              <search-BreadCrumb/>
            </div>
        </div>
        <div class="search">
            <input type="text" class="input w100" placeholder="جست و جو کنید...">
            <NuxtLink class="btn info icon searchBtn">

            </NuxtLink>
        </div>
    </div>
    <div class="filterProduct">
        <search-sideBar/>
        <div class="selectProduct">
            <nav>
                <ol>
                    <li class="icon arrowIcon">
                        <NuxtLink>خانه</NuxtLink>
                    </li>
                    <li class="icon arrowIcon">
                        <NuxtLink>کالای دیجیتال</NuxtLink>
                    </li>
                    <li class="icon arrowIcon">
                        <NuxtLink>موبایل</NuxtLink>
                    </li>
                    <li class="icon arrowIcon">
                        <NuxtLink>گوشی موبایل</NuxtLink>
                    </li>
                </ol>
            </nav>
            <filter>
                <span>مرتب سازی بر اساس:</span>
                <ul>
                    <li>پربازدید ترین</li>
                    <li>پرفروش ترین</li>
                    <li>محبوب ترین</li>
                    <li>جدید ترین</li>
                    <li>ارزان ترین</li>
                    <li>گران ترین</li>
                </ul>
            </filter>
            <div class="selectPd">
                <div class="product" @click="isOpenModal = true">
                    <div class="pImage">
                        <img src="../public/images/products/02.png" alt="">
                    </div>
                    <div>
                        <NuxtLink class="title">
                            گوشی موبایل شیائومی مدل Mi 11i 5G
                            M2012K11G دو
                            سیم‌
                            کارت
                            ظرفیت
                            256 گیگابایت و 8 گیگابایت رم
                        </NuxtLink>
                        <span class="price">
                            <main>16,199,000</main>
                            <h2>15,900,000</h2>
                            <span>تومان</span>
                        </span>
                        <div class="optionBox">
                            <span class="icon basketShopIcon"></span>
                            <span class="icon searchBtn"></span>
                            <span class="icon likeIcon "></span>
                            <span class="icon starIcon">
                                4.3
                            </span>
                        </div>
                    </div>
                </div>
                <div class="product">
                    <div class="pImage">
                        <img src="../public/images/products/02.png" alt="">
                    </div>
                    <div>
                        <NuxtLink class="title">
                            گوشی موبایل شیائومی مدل Mi 11i 5G
                            M2012K11G دو
                            سیم‌
                            کارت
                            ظرفیت
                            256 گیگابایت و 8 گیگابایت رم
                        </NuxtLink>
                        <span class="price">
                            <main>16,199,000</main>
                            <h2>15,900,000</h2>
                            <span>تومان</span>
                        </span>
                        <div class="optionBox">
                            <span class="icon basketShopIcon"></span>
                            <span class="icon searchBtn"></span>
                            <span class="icon likeIcon "></span>
                            <span class="icon starIcon">
                                4.3
                            </span>
                        </div>
                    </div>
                </div>
                <div class="product">
                    <div class="pImage">
                        <img src="../public/images/products/02.png" alt="">
                    </div>
                    <div>
                        <NuxtLink class="title">
                            گوشی موبایل شیائومی مدل Mi 11i 5G
                            M2012K11G دو
                            سیم‌
                            کارت
                            ظرفیت
                            256 گیگابایت و 8 گیگابایت رم
                        </NuxtLink>
                        <span class="price">
                            <main>16,199,000</main>
                            <h2>15,900,000</h2>
                            <span>تومان</span>
                        </span>
                        <div class="optionBox">
                            <span class="icon basketShopIcon"></span>
                            <span class="icon searchBtn"></span>
                            <span class="icon likeIcon "></span>
                            <span class="icon starIcon">
                                4.3
                            </span>
                        </div>
                    </div>
                </div>
                <div class="product">
                    <div class="pImage">
                        <img src="../public/images/products/02.png" alt="">
                    </div>
                    <div>
                        <NuxtLink class="title">
                            گوشی موبایل شیائومی مدل Mi 11i 5G
                            M2012K11G دو
                            سیم‌
                            کارت
                            ظرفیت
                            256 گیگابایت و 8 گیگابایت رم
                        </NuxtLink>
                        <span class="price">
                            <main>16,199,000</main>
                            <h2>15,900,000</h2>
                            <span>تومان</span>
                        </span>
                        <div class="optionBox">
                            <span class="icon basketShopIcon"></span>
                            <span class="icon searchBtn"></span>
                            <span class="icon likeIcon "></span>
                            <span class="icon starIcon">
                                4.3
                            </span>
                        </div>
                    </div>
                </div>
                <div class="product">
                    <div class="pImage">
                        <img src="../public/images/products/02.png" alt="">
                    </div>
                    <div>
                        <NuxtLink class="title">
                            گوشی موبایل شیائومی مدل Mi 11i 5G
                            M2012K11G دو
                            سیم‌
                            کارت
                            ظرفیت
                            256 گیگابایت و 8 گیگابایت رم
                        </NuxtLink>
                        <span class="price">
                            <main>16,199,000</main>
                            <h2>15,900,000</h2>
                            <span>تومان</span>
                        </span>
                        <div class="optionBox">
                            <span class="icon basketShopIcon"></span>
                            <span class="icon searchBtn"></span>
                            <span class="icon likeIcon "></span>
                            <span class="icon starIcon">
                                4.3
                            </span>
                        </div>
                    </div>
                </div>
                <div class="product">
                    <div class="pImage">
                        <img src="../public/images/products/02.png" alt="">
                    </div>
                    <div>
                        <NuxtLink class="title">
                            گوشی موبایل شیائومی مدل Mi 11i 5G
                            M2012K11G دو
                            سیم‌
                            کارت
                            ظرفیت
                            256 گیگابایت و 8 گیگابایت رم
                        </NuxtLink>
                        <span class="price">
                            <main>16,199,000</main>
                            <h2>15,900,000</h2>
                            <span>تومان</span>
                        </span>
                        <div class="optionBox">
                            <span class="icon basketShopIcon"></span>
                            <span class="icon searchBtn"></span>
                            <span class="icon likeIcon "></span>
                            <span class="icon starIcon">
                                4.3
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <modal v-model="isOpenModal" />
    <pagination />
</template>


<style>
.categoriesTitle {
    font-size: 10pt;
    font-weight: bold;
    cursor: pointer;
}

.categories {
    display: inline-block;
    width: max-content;
    transition: var(--transition);
    margin: 15px 0 0 15px;
}

.catTitle {
    list-style: none;
    padding: 0;
}

.btn.info.icon.searchBtn::before {
    background-color: var(--mainColor);
}

.catTitle .brnch li::before {
    content: "";
    display: inline-block;
    width: 30px;
    height: 30px;
    background-image: url(../public/icons/mainIcon/back.svg);
    background-position: center;
    background-repeat: no-repeat;
    vertical-align: middle;
    background-size: 25px;
    rotate: -90deg;
}

.catTitle .branch {
    list-style-type: none;
}

.catTitle .branch a {
    transition: var(--transition);
}

.catTitle .branch li::before,
.catTitle a.title::before,
.resultCategories ul li a::before,
.resultCategories ul.branch li::before {
    content: "";
    display: inline-block;
    width: 10px;
    height: 20px;
    background-image: url(/_nuxt/public/icons/mainIcon/back.svg);
    background-position: center;
    background-repeat: no-repeat;
    vertical-align: middle;
    margin-left: 10px;
    background-size: 13px;
}

.catTitle a.title::before {
    rotate: -90deg;
}

.catTitle .branch li a:hover {
    color: var(--hover);
    transition: var(--transition);
}

.moreCat {
    position: absolute;
    width: max-content;
    top: 100px;
    background: #f4f4f4;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.05);
    min-width: 250px;
    min-height: 250px;
    border-radius: 10px;
    opacity: 0;
    z-index: 100;
    transition: var(--transition);
    right: -500px;
}

.categories:hover .moreCat {
    opacity: 1;
    right: 113px;
    transition: var(--transition);
}

.search {
    display: inline-block;
    width: calc(50% - 100px);
    position: relative;
}


.search .searchBtn {
    position: absolute;
    top: 3px;
    left: 13px;
    padding: 6px;
}

.aboutProduct .icon::after {
    display: none;
}


.filterProduct {
    display: grid;
    grid-template-columns: 30% 70%;
}

.advanceSearch {
    display: inline-block;
    max-width: 360px;
    width: -moz-max-content;
    width: max-content;
    background-color: #f8f8f8;
    float: right;
    box-sizing: border-box;
    padding: 10px;
    border-radius: 10px;
    margin-top: 20px;
}

.headImage {
    display: flex;
    width: 100%;
    text-align: center;
    background: white;
    flex-direction: row-reverse;
    align-items: center;
    border-radius: 10px;
    overflow: hidden;
    justify-content: space-between;
}

.headImage img {
    width: 40%;
    height: 100%;
}

.headImage div {
    font-size: 10pt;
    text-align: right;
    padding-right: 15px;
}

.headImage div h1 {
    margin: 0;
    font-size: 11pt;
}

.boxPanel {
    background-color: var(--mainColor);
    padding: 15px;
    margin-top: 15px;
    border-radius: 10px;
}

.boxtTitle {
    margin: 0;
    font-size: 12pt;
    font-weight: 600;
    border-bottom: var(--border);
    padding-bottom: 5px;
}

.boxtTitle.icon.arrowIcon::after {
    float: left;
    transform: rotate(-90deg);
    -webkit-mask-size: 13px;
}

.resultCategories ul.branch {
    padding-right: 10px;
}

.resultCategories ul.branch li {
    padding-right: 10px;
}



.resultCategories ul li {
    list-style-type: none;
    cursor: pointer;
}

.resultCategories ul li a {
    display: block;
    margin: 10px 0 0 0;
    width: max-content;
}

.resultCategories ul {
    margin: 0;
    padding: 0;
    font-size: 11pt;
}

.searchBox {
    margin-top: 10px;
    position: relative;
}

.searchBox input {
    width: 100%;
    min-height: 40px;
}

.searchBox::after {
    content: "";
    display: inline-block;
    width: 30px;
    height: 30px;
    background-image: url(../public/icons/mainIcon/search.svg);
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    cursor: pointer;
    background-size: 20px;
    left: 0;
    top: 50%;
    transform: translate(13%, -50%);
}

.brandName {
    display: flex;
    margin-top: 10px;
    gap: 10px;
    font-size: 11pt;
}

.brandName .name {
    display: flex;
    width: 100%;
    justify-content: space-between;
}

.brandList {
    overflow: hidden scroll;
    height: 0;
    padding: 0 0 0px 6px;
    margin-top: 10px;
    transition: var(--transition);
}

.brandList.open {
    height: 100px;
    transition: var(--transition);
}


.brandList::-webkit-scrollbar {
    height: 50px;
    display: flow-root;
    width: 5px;
    background-color: #dfe0e0;
    border-radius: 5px;
}

.brands .boxtTitle.icon::before {
    display: none;
}

.notificationBox .boxtTitle span {
    display: inline-block;
    width: 70%;
    font-weight: 100;
    font-size: 9pt;
    vertical-align: text-top;
}

.notificationBox .icon::after {
    display: none;
}

/* mainProduct */

.selectProduct nav ol {
    padding: 0;
}

.selectProduct nav ol li {
    display: inline-block;
    margin-left: 10px;
    list-style: none;
}

.selectProduct nav ol li:hover {
    color: var(--hover);
}

.selectProduct .icon.arrowIcon::before {
    display: none;
}

.selectProduct .icon.arrowIcon::after {
    -webkit-mask-size: 10px;
}

.selectProduct filter span {
    display: inline-block;
}

.selectProduct ul {
    display: inline-block;
    padding: 0;
}

.selectProduct filter {
    display: flow-root;
    width: 100%;
    border-bottom: var(--border);
    margin-bottom: 10px;
}

.selectProduct filter ul li {
    display: inline-block;
    list-style: none;
    background-color: var(--hover);
    color: var(--mainColor);
    cursor: pointer;
    margin: 0 10px;
    border-radius: 5px;
    padding: 5px 15px;
    font-size: 10pt;
}

.selectProduct .selectPd {
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    width: calc(100% - 2px);
    min-height: 720px;
    overflow: hidden;
    border: var(--border);
    background-color: #f8f8f8;
    border-radius: 10px;
}

.selectPd .product {
    display: inline-block;
    width: 200px;
    max-height: 320px;
    background-color: var(--mainColor);
    box-sizing: border-box;
    padding: 15px;
    border-radius: 10px;
    margin: 10px;
    border: var(--border);
}

.selectPd .title {
    color: var(--txtColor);
    font-size: 10pt;
    line-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    margin-bottom: 10px;
    font-weight: bold;
}

.selectPd .pImage {
    display: flow-root;
    width: 130px;
    height: 130px;
    margin: 0 auto;
}

.selectPd .pImage img {
    width: 100%;
    height: 100%;
}

.selectPd .price {
    display: flow-root;
    text-align: left;
    font-weight: bold;
    border-bottom: var(--border);
    font-size: 11pt;
    padding-bottom: 15px;
    margin-bottom: 6px;
}

.selectPd .price main {
    display: flex;
    width: 100%;
    text-decoration: line-through;
    color: var(--danger);
    justify-content: flex-end;
    margin-bottom: 10px;
    gap: 10px;
    font-size: 13pt;
}

.selectPd .price main::after {
    content: "2%";
    display: flex;
    width: 33px;
    height: 21px;
    background-color: #f44336;
    vertical-align: text-bottom;
    border-radius: 10px;
    color: var(--mainColor);
    justify-content: center;
    align-items: center;
    font-size: 9pt;
}

.selectPd .price h2 {
    display: inline-block;
    margin: 0 0 0 5px;
    font-size: 13pt;
}

.selectPd .price span {
    color: var(--primaryTextColor);
    font-size: 10pt;
}

.selectPd .optionBox .icon::after {
    display: none;
}

.optionBox .icon.starIcon {
    float: left;
    direction: ltr;
}

.optionBox .icon::before {
    -webkit-mask-size: 20px;
}

/* active */
.boxtTitle.icon.arrowIcon.active::after {
    transform: rotate(90deg);
    transition: var(--transition);
}
</style>

<script setup lang="ts">
import * as Yup from "yup"
import { Form } from "vee-validate";
import { fetchApi } from "utilities/customeFetchApi";
import {useLazyAsyncData} from "#app";
import {homePageContent} from "~/models/home/homeDataDTO";

const isOpenModal = ref(false);
const showMore = ref(false);
const email = ref("");
const formSchema = Yup.object().shape({
    email: Yup.string().required().email()
})

// onMounted(async () => {
//     var res = await fetchApi("/Banner");
//     console.log(res);
// })


</script>