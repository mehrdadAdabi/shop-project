<template>
    <div class="top">
      <img :src="getBannerURL(filteredBanner[0].imageName)" alt="banner"/>
  </div>

  <div class="left" v-for="item in filteredBanner.slice(0,2)">
    <img :src="getBannerURL(filteredBanner[0].imageName)" alt="product">
  </div>
</template>

<script setup lang="ts">

import {BannerDTO, BannerPosition} from "~/models/home/homeDataDTO";
import {getBannerURL, getProductURL} from "~/utilities/imageURL";

const  props=defineProps<{
  banners:BannerDTO[],
  position:BannerPosition
}>()

// شرط وجود داشتن بنر

const filteredBanner= props.banners
console.log(props)

</script>