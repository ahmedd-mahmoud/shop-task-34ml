<script setup lang="ts">
import useProducts from "../../composables/useProducts.ts";
import item from "./item.vue";
import filterBar from "../filters/filterBar.vue";

const { products, fetchProducts } = useProducts();

await fetchProducts();

console.log(products.value);
</script>

<template>
  <div class="flex grow flex-col gap-4">
    <filterBar />

    <div class="flex justify-center lg:justify-normal flex-wrap gap-5">
      <item v-for="brand in products?.data" :key="brand.id" :brand="brand" />
    </div>
  </div>
</template>
