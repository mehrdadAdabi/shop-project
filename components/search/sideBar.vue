<template>
    <div class="advanceSearch">
        <div class="headImage">
            <img src="../public/images/theme/free-shipping--banner.png" alt="">
            <div>
                <h1>ارسال سفارش رایگان</h1>
                <span>سفارش‌های بالای ۳۰۰ هزار تومان</span>
            </div>
        </div>
        <div class="resultCategories boxPanel">
            <h1 class="boxtTitle">دسته بندی نتایج</h1>
            <ul>
                <li>
                    <NuxtLink>کالای دیجیتال</NuxtLink>
                    <ul class="branch">
                        <li>موبایل
                            <ul>
                                <li>تلفن همراه</li>
                            </ul>
                        </li>
                        <li>کنسول بازی</li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="searchResult boxPanel">
            <h1 class="boxtTitle">جستجو در نتایج:</h1>
            <div class="searchBox">
                <input type="text" class="input" placeholder="نام محصول یا...">
            </div>
        </div>
        <div class="brands boxPanel">
            <!-- ToggleJQ -->
            <h1 :class="['boxtTitle icon arrowIcon', { 'active': showMore }]" @click="showMore = !showMore">برند</h1>
            <div class="searchBox">
                <input type="text" class="input" placeholder="نام محصول یا...">
            </div>
            <div :class="['brandList', { 'open': showMore }]">
                <div class="brandName">
                    <input type="checkbox" id="brand1">
                    <div class="name">
                        <label for="brand1">سامسونگ</label>
                        <label for="brand1">SamSung</label>
                    </div>
                </div>
                <div class="brandName">
                    <input type="checkbox" id="brand1">
                    <div class="name">
                        <label for="brand1">سامسونگ</label>
                        <label for="brand1">SamSung</label>
                    </div>
                </div>
                <div class="brandName">
                    <input type="checkbox" id="brand1">
                    <div class="name">
                        <label for="brand1">سامسونگ</label>
                        <label for="brand1">SamSung</label>
                    </div>
                </div>
                <div class="brandName">
                    <input type="checkbox" id="brand1">
                    <div class="name">
                        <label for="brand1">سامسونگ</label>
                        <label for="brand1">SamSung</label>
                    </div>
                </div>
                <div class="brandName">
                    <input type="checkbox" id="brand1">
                    <div class="name">
                        <label for="brand1">سامسونگ</label>
                        <label for="brand1">SamSung</label>
                    </div>
                </div>
                <div class="brandName">
                    <input type="checkbox" id="brand1">
                    <div class="name">
                        <label for="brand1">سامسونگ</label>
                        <label for="brand1">SamSung</label>
                    </div>
                </div>
                <div class="brandName">
                    <input type="checkbox" id="brand1">
                    <div class="name">
                        <label for="brand1">سامسونگ</label>
                        <label for="brand1">SamSung</label>
                    </div>
                </div>
                <div class="brandName">
                    <input type="checkbox" id="brand1">
                    <div class="name">
                        <label for="brand1">سامسونگ</label>
                        <label for="brand1">SamSung</label>
                    </div>
                </div>
                <div class="brandName">
                    <input type="checkbox" id="brand1">
                    <div class="name">
                        <label for="brand1">سامسونگ</label>
                        <label for="brand1">SamSung</label>
                    </div>
                </div>
                <div class="brandName">
                    <input type="checkbox" id="brand1">
                    <div class="name">
                        <label for="brand1">سامسونگ</label>
                        <label for="brand1">SamSung</label>
                    </div>
                </div>
                <div class="brandName">
                    <input type="checkbox" id="brand1">
                    <div class="name">
                        <label for="brand1">سامسونگ</label>
                        <label for="brand1">SamSung</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="notificationBox boxPanel">
            <h1 class="boxtTitle icon notif">
                <span>با خرید از کالاهایی با امکان ارسال توسط فروشنده سفارش خود را زودتر تحویل بگیرید</span>
            </h1>
            <div class="toggleParent">
                <input type="checkBox" id="toggleBtn" class="checkBox">
                <label class="toggle" for="toggleBtn">
                </label>
                <label for="toggleBtn">فقط ارسال فوری</label>
            </div>
            <div class="toggleParent">
                <input type="checkBox" id="toggleBtn-2" class="checkBox">
                <label class="toggle" for="toggleBtn-2">
                </label>
                <label for="toggleBtn-2">فقط کالا های موجود</label>
            </div>
        </div>
    </div>
</template>