<template>
    <div class="parent">
      <div class="topBanner">
      <home-banner :banners="data.data.banners"/>
      </div>
      <home-slider :slider="data.data.sliders"/>
    <div class="banners">
      <home-banner :banners="data.data.banners"/>
    </div>
    </div>
  <div id="amazingBox">
    <div id="banner">
      <img src="../public/images/theme/specials.png">
    </div>
    <div id="products">
      <home-amazingProduct/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {fetchApi} from "~/utilities/customeFetchApi";
import {BannerPosition, HomeDataDTO} from "~/models/home/homeDataDTO";
const {pending,data}= await useAsyncData("main-page",()=>fetchApi<HomeDataDTO>("/Utilities/MainPageData"));
console.log(data)
</script>

<style>

.banners{
  display: inline-block;
  width: calc(33% - 10px);
}

.banners div.top{
  display: none;
  width: 850px;
  height: 100px;
  border-radius: 10px;
  margin: 60px 0 20px 0;
  overflow: hidden;
}

.topBanner .top{
  display: flow-root;
  width: 100%;
  height: 100px;
  border-radius: 10px;
  margin: 36px auto;
  overflow: hidden;
}

.banners img , .topBanner .top img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}


.banners .left{
  display: flow-root;
  width: 400px;
  height: 190px;
  float: left;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
}

.parent .main{
  display: inline-block;
  width: 67%;
  vertical-align: top;
}

.topBanner .left{
  display: none;
}


#amazingBox{
  display: grid;
  grid-template-columns: 20% 80%;
  background-color: var(--danger);
  min-height: 300px;
  padding: 20px;
  border-radius: 10px;
  box-sizing: border-box;
}

#amazingBox #banner{
  display: inline-block;
  width: 100%;
  height: 300px;
}

#amazingBox #banner img{
  width: 100%;
  height: 100%;
  object-fit: contain;
}

</style>