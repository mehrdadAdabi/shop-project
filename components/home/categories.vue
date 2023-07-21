<template>
  <div class="poParent">
    <carousel :items-to-show="4">
    <Slide class="productCat" v-for="(item,index) in utilitiesStore.categories" :key="index">
      <div class="catImage">
        <img :src="getCategoriesImages(item.imageName)" :key="item.id">
      </div>
      <span class="catTitle">{{item.title}}</span>
    </Slide>
      <template #addons="{ slidesCount }" v-if="slidesCount>4">
        <div :class="['slider__Navigation right',{'disabled':currentSlide == slidesCount || currentSlide >= slidesCount - 3}]" @click="currentSlide+=1"></div>
        <div :class="['slider__Navigation left',{'disabled':currentSlide == slidesCount || currentSlide < 1}]" @click="currentSlide-=1"></div>
        <div class="slider__pagination" v-if="slide > 1">
          <label v-for="item in slide" :class="{active:item == activeSlide}" :key="item" @click="currentSlide= item-1"></label>
        </div>
      </template>
    </carousel>
  </div>
</template>

<script setup lang="ts">
import { Carousel,Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css';
import {CategoryDto} from "~/models/categories/categoriesDTO";
import {useCategoryStore} from "~/store/utilitiesStore/utilStore";
import {getCategoriesImages} from "~/utilities/imageURL";

const utilitiesStore=useCategoryStore();

const currentSlide=ref(0);
const slide=Number((utilitiesStore.categories.length / 4).toFixed());
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
.productCat{
  display: inline-block;
  width: 220px!important;
  min-height: 190px;
  border-radius: 10px;
  padding: 10px;
  font-size: 11pt;
  margin: 0 10px;
  text-align: center;
  cursor: pointer;
  background-color: var(--mainColor);
  border: var(--border);
  box-sizing: border-box;
}

.productCat img{
  width: 100%;
  height: 100%;
}


.poParent .slider__pagination{
  display: flow-root;
  width: max-content;
  margin: 0 auto;
}

.poParent .slider__pagination label{
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 3px;
  background-color: #9b9b9b80;
  cursor: pointer;
}

.poParent .slider__Navigation{
  display: inline-block;
  position: absolute;
  top: 50%;
  color: black;
}

.poParent .slider__Navigation::before,.slider__Navigation::before{
  content: "";
  display: inline-block;
  width: 15px;
  height: 20px;
  -webkit-mask-image: url(@/public/icons/mainIcon/arrow.svg);
  -webkit-mask-position: center;
  -webkit-mask-repeat: no-repeat;
  background-color: var(--primaryTextColor);
  cursor: pointer;
  -webkit-mask-size: 20px;
}

.poParent .slider__Navigation.right{
  right: 10px;
  rotate: 180deg;
}

.poParent .slider__Navigation.left{
  left: 20px;
}

.disabled{
  cursor: not-allowed;
  opacity: 0.6;
  pointer-events: none;
}

</style>
