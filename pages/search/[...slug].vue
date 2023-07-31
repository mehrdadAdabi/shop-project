<template>
  <h1>SearchPage</h1>
  <search-sideBar />
  <search-leftSide />
</template>

<script setup lang="ts">

const search = useSearch()

// console.log(search.getFilterParams());
// console.log(search.getProduct());

const { data } = useAsyncData("search", () => search.getProduct());
console.log(data);

</script>