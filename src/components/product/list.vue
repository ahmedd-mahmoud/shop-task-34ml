<script setup lang="ts">
import useProducts from "../../composables/useProducts.ts";
import item from "./item.vue";

const { products, fetchProducts } = useProducts();

await fetchProducts();

console.log(products.value);
</script>

<template>
  <div class="flex justify-center flex-wrap gap-5">
    <item v-for="brand in products?.data" :key="brand.id" :brand="brand" />
  </div>
</template>
