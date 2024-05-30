<script setup lang="ts">
import { computed, watchEffect } from "vue";
import useProducts from "../../composables/useProducts.ts";
import useCategory from "../../composables/useCategory.ts";
import useBrands from "../../composables/useBrands.ts";
import item from "./item.vue";
import filterBar from "../filters/filterBar/index.vue";

const { products, fetchProducts } = useProducts();
const { selectedCategoryFilters } = useCategory();
const { selectedBrandFilters } = useBrands();

const filterItems = computed(() => {
  return [...selectedCategoryFilters.value, ...selectedBrandFilters.value];
});

watchEffect(async () => {
  await fetchProducts(filterItems.value);
});
</script>

<template>
  <div class="flex grow flex-col gap-4">
    <filterBar />

    <div class="flex justify-center lg:justify-normal flex-wrap gap-5">
      <item v-for="brand in products?.data" :key="brand.id" :brand="brand" />
    </div>
  </div>
</template>
