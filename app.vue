<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
  import {useCategoryStore} from "~/store/utilitiesStore/utilStore";

  const utilsStore=useCategoryStore();
  useAsyncData("util",()=>utilsStore.setCategories());
</script>