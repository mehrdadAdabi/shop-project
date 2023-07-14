<template>
  <div class="main">
      <Carousel>
        <Slide v-for="slide in 1" :key="slide">
          <div class="carousel__item banner">
              <img src="/./images/Banner/04.jpg">
          </div>
        </Slide>
        <Slide v-for="slide in 1" :key="slide">
          <div class="carousel__item banner">
            <img src="/./images/Banner/02.jpg">
          </div>
        </Slide>
        <Slide v-for="slide in 1" :key="slide">
          <div class="carousel__item banner">
            <img src="/./images/Banner/03.jpg">
          </div>
        </Slide>
        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
  </div>
</template>
<script setup lang="ts">
import { defineComponent } from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
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
  left: 220px!important;
  transition: var(--transition);
}

.carousel__next {
  color: var(--mainColor);
  right: 220px!important;
  transition: var(--transition);

}

.crousel li{
  height: 100%;
  margin-top: 100px;
}

.carousel__pagination{
  position: absolute;
  right: 50%;
  bottom: 30px;
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