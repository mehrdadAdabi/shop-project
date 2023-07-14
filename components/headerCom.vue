<template>
    <div class="header">
        <div class="container">
            <div class="nav">
                <logo>
                    <img src="../public/images/mainImages/logo.svg" alt="">
                </logo>
                <div class="about">
                    <NuxtLink to="/">خانه</NuxtLink>
                    <NuxtLink to="/">وبلاگ</NuxtLink>
                    <NuxtLink to="/">پرسش های متداول</NuxtLink>
                    <NuxtLink to="/">تماس با ما</NuxtLink>
                    <NuxtLink to="/">درباره ما</NuxtLink>
                </div>
                <div class="user">
                    <NuxtLink to="/auth/login" class="icon enterIcon">ورود | ثبت نام</NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
/* @import "../assets/layouts/main.css"; */

.header .nav {
    display: flex;
    width: 100%;
    justify-content: space-between;
    /* flex-direction: row-reverse; */
    align-items: center;
}

.header .nav logo {
    background-color: var(--hover);
    padding: 10px 15px 0;
    border-radius: 4px;
    width: 100px;
    height: max-content;
    box-sizing: border-box;
}

.header .nav img {
    width: 100%;
    height: 100%;
}

.nav .about a {
    display: inline-block;
    color: var(--mainText);
    margin: 0 13px;

}

.user a {
    display: flex;
    padding: 8px;
    border-radius: 5px;
    gap: 4px;
    font-size: var(--txtfont);
    border: var(--border);
}

.user .icon::after{
    display: none;
}

.nav .about a:hover {
    color: var(--hover) !important;
    transition: var(--transition);
}
</style>


