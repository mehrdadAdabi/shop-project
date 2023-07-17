<template>
<div class="selectPd">
  <div class="selectProduct">
    <div class="product" v-for="(index,item) in product" :key="index">
      <div class="pImage">
        <img src="@/public/images/products/07.jpg" alt="">
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
</template>
<script setup lang="ts">

import {productCardDTO} from "~/models/productCardDTO";

const props=defineProps<{
  product:productCardDTO[],
}>()

</script>


<style>
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
    margin:10px 0;
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
   .carousel__item img{
     width: 100%;
     height: 100%;
   }

  .carousel__item{
  display: flow-root;
  width: 850px;
  height: 400px;
  border-radius: 10px;
  overflow: hidden;
  }

  .carousel__prev{
  color: var(--mainColor);
  left: 0!important;
  transition: var(--transition);
  }

  .carousel__next {
  color: var(--mainColor);
  right:0!important;
  transition: var(--transition);

  }

  .crousel li{
  height: 100%;
  width: unset;
  margin-top: 100px;
  }

  .carousel__pagination{
  position: absolute;
  right: 50%;
  bottom: 10px;
  gap: 4px;
  }
  .carousel__pagination-button{
  width: 10px;
  height: 10px;
  background-color: var(--mainColor);
  border-radius: 50%;
  }
  .carousel__pagination-button::after{
  content: unset;
  }
</style>