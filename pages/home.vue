<template>
  <div v-if="pending">
    Loading....
  </div>
  <div class="container">
      <home-slider :slider="data.data.sliders"/>
  </div>
</template>

<script setup lang="ts">
import {fetchApi} from "~/utilities/customeFetchApi";
import {HomeDataDTO} from "~/models/home/homeDataDTO";
const {pending,data}= await useAsyncData("main-page",()=>fetchApi<HomeDataDTO>("/Utilities/MainPageData"));
console.log(data)
</script>