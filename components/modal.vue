<template>
    <Transition enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut">
        <div  v-if="modelValue">
            <backWard :class="[{ 'active': modelValue }]" @click="emit('update:modelValue', false)"> </backWard>
            <div :class="['modal', { 'active': modelValue }]">
                <m-header>
                    <h1 class="icon closeIcon" @click="emit('update:modelValue', false)">اطلاعات بیشتر</h1>
                </m-header>
                <m-content>
                    <div class="pImage">
                        <img src="../public/images/products/01.jpg" alt="">
                    </div>
                    <div class="info">
                        <span class="road">
                            <h4>اپل</h4>
                            <h4>گوشی موبایل اپل</h4>
                        </span>
                        <div class="title">
                            <h1>گوشی موبایل اپل مدل iPhone 13 A2634 دو سیم کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت</h1>
                            <h2>Apple iPhone 13 A2634 Dual SIM 128GB And 4GB RAM Mobile Phone</h2>
                        </div>
                        <div class="rate">
                            <h1>۷۹٪ (۱۷۰ نفر) از خریداران، این کالا را پیشنهاد کرده اند.</h1>
                            <span class="rateNumber">4.4(521)</span>
                        </div>
                        <div class="pColor">
                            <h1>رنگ مورد نظر:</h1>
                            <span style="background-color: var(--danger);"></span>
                            <span style="background-color: var(--hover);"></span>
                            <span style="background-color: var(--edit);"></span>
                        </div>
                        <div class="more">
                            <div>
                                <span>حافظه داخلی:</span>
                                <span>128</span>
                            </div>
                            <div>
                                <span>مقدار RAM:</span>
                                <span>4</span>
                            </div>
                            <div>
                                <span>بازه‌ی اندازه صفحه نمایش:</span>
                                <span>6 اینچ</span>
                            </div>
                            <div>
                                <span>شبکه های ارتباطی:</span>
                                <span>5G,4G</span>
                            </div>
                        </div>
                    </div>
                </m-content>
                <m-footer>
                    <slot />
                </m-footer>
            </div>
        </div>
    </Transition>
</template>

<style>
backWard {
    display: none;
    background-color: #00000047;
    position: fixed;
    top: 0;
    height: 100vh;
    width: 100%;
    right: 0;
    transition: var(--transition);
}

backWard.active,
.modal.active {
    display: flow-root;
    transition: var(--transition);
}


.modal {
    display: none;
    position: absolute;
    background-color: var(--mainColor);
    width: 700px;
    height: 405px;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    padding: 10px;
    border-radius: 10px;
    transition: var(--transition);

}

.modal .icon.closeIcon {
    display: flex;
    align-items: center;
    text-align: right;
    margin: 5px 0 0 0;
    font-size: 12pt;
}

.modal .icon::after {
    display: none;
}

m-content {
    display: grid;
    grid-template-columns: 30% 70%;
    margin-top: 25px;
}

m-content .pImage {
    width: 260px;
    height: 260px;
}

m-content img {
    width: 100%;
    height: 100%;
}

m-content .info {
    display: inline-block;
    padding: 0 20px;
    box-sizing: border-box;
}

m-content .road {
    display: flex;
    gap: 10px;
    font-size: 9pt;
    margin-bottom: 20px;
}

m-content .road h4 {
    margin: 0;
}

m-content .title h1 {
    font-size: 11pt;
    margin: 0;
    text-align: justify;
    margin-bottom: 10px;
    line-height: 1.8;
}

m-content .title h2 {
    margin: 0;
    font-size: 8pt;
    color: var(--primaryTextColor);
    text-align: left;
    margin-bottom: 10px
}

m-content .rate {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

m-content .rate h1 {
    font-size: 8pt;
    color: var(--success);
}

m-content .rate span {
    font-size: 10pt;
}

m-content .pColor h1 {
    font-size: 12pt;
}

m-content .pColor span {
    display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin: 0 10px;
    cursor: pointer;
}

m-content .pColor span:nth-child(2) {
    margin-right: 0;
}

m-content .more div {
    margin: 0px 0 5px;
}

m-content .more div span:first-child {
    color: var(--primaryTextColor);
    font-size: 10pt;
    margin-left: 5px;
}

m-content .more div span:nth-child(2) {
    font-size: 10pt;
}
</style>

<script setup lang="ts">

defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },
})

const emit = defineEmits(['update:modelValue']);

</script>