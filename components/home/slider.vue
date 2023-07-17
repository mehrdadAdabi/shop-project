<template>
  <div class="main">
      <Carousel :autoplay="2000" wrapAround v-if="isShow">
        <Slide v-for="(item,index) in slider" :key="index">
          <a class="carousel__item banner" >
              <img :src="getSliderURL(item.imageName)" :alt="item.imageName">
          </a>
        </Slide>
        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
  </div>
</template>
<script setup lang="ts">
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css';
import {SliderDTO} from "~/models/home/homeDataDTO";
import {getSliderURL} from "~/utilities/imageURL";

const  props=defineProps<{slider:SliderDTO[] }>()
const isShow=ref(false);
onMounted(()=>{
  setTimeout(()=>{
    isShow.value=true;
  },50)
})

</script>

<style>
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