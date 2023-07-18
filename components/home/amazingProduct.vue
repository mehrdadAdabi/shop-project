<template>
<div class="selectPd">
  <div class="selectProduct">
    <carousel v-model="currentSlide">
    <Slide class="product" v-for="(item,index) in product" :key="index">
      <div class="pImage">
        <img :src="item.imageName" :alt="item.title">
      </div>
      <div>
        <NuxtLink class="title">
          {{item.title}}
        </NuxtLink>
        <span class="price">
            <main class="discaount">{{item.price}}</main>
            <h2 class="total">{{item.totalPrice}}</h2>
            <span>تومان</span>
        </span>
        <div class="optionBox">
          <span class="icon basketShopIcon"></span>
          <span class="icon searchBtn"></span>
          <span class="icon likeIcon "></span>
          <span class="icon starIcon">
                                  {{Number(item.rate).toFixed()}} ({{item.commentCount}})
          </span>
        </div>
      </div>
    </Slide>
      <template #addons="{ slidesCount }">
        <div :class="['slider__Navigation right',{'disabled':currentSlide == slidesCount || currentSlide >= slidesCount - 3}]" @click="currentSlide+=1"></div>
        <div :class="['slider__Navigation left',{'disabled':currentSlide == slidesCount || currentSlide < 1}]" @click="currentSlide-=1"></div>
        <div class="slider__pagination" v-if="slide > 1">
          <label v-for="item in slide" :class="{active:item == activeSlide}" :key="item" @click="currentSlide= item-1"></label>
        </div>
      </template>
    </carousel>
  </div>
</div>
</template>
<script setup lang="ts">
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css';
import {productCardDTO} from "~/models/productCardDTO";
import Slider from "~/components/home/slider.vue";

const props=defineProps<{
  product:productCardDTO[],
}>()
const currentSlide=ref(0);
const slide=Number((props.product.length / 3).toFixed());
const activeSlide=ref(1);

watch(currentSlide,(val)=>{
  if (val==1){
    activeSlide.value=1;
    return;
  }
  activeSlide.value=Math.ceil(val/3);

})

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
    width: 200px!important;
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



  .crousel li{
  height: 100%;
  width: unset;
  margin-top: 100px;
  }

  .selectPd .carousel__pagination{
  position: absolute;
  right: 50%;
  bottom: -5px;
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

  .carousel__track{
    justify-content: center;
  }

  .carousel__viewport{
    width: 80%;
    margin: 0 auto;
  }
  .slider__pagination{
    display: flow-root;
  }

  .slider__pagination label{
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin: 0 3px;
    background-color: var(--mainColor);
    cursor: pointer;
  }

  .slider__Navigation{
    display: inline-block;
    position: absolute;
    top: 50%;
    color: black;
  }

  .slider__Navigation::before,.slider__Navigation::before{
    content: "";
    display: inline-block;
    width: 15px;
    height: 20px;
    -webkit-mask-image: url(@/public/icons/mainIcon/arrow.svg);
    -webkit-mask-position: center;
    -webkit-mask-repeat: no-repeat;
    background-color: var(--mainColor);
    cursor: pointer;
    -webkit-mask-size: 20px;
  }

  .slider__Navigation.right{
    right: 10px;
    rotate: 180deg;
  }

  .slider__Navigation.left{
    left: 20px;
  }

  .disabled{
    cursor: not-allowed;
    opacity: 0.6;
    pointer-events: none;
  }

</style>