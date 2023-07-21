<template>

<!--  <span class="countries" v-for="item in data.capital"></span>-->

</template>
<script setup lang="ts">
import {HomeDataDTO} from "~/models/home/homeDataDTO";
import {fetchCountry} from "~/utilities/testApi";

const {pending,data}= await useAsyncData("main-page",()=>fetchCountry("/all"));
console.log(data)
debugger
</script>