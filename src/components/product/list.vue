<script setup lang="ts">
import { computed, ref, watchEffect } from "vue";
import useProducts from "../../composables/useProducts.ts";
import useCategory from "../../composables/useCategory.ts";
import useBrands from "../../composables/useBrands.ts";
import item from "./item.vue";
import filterBar from "../filters/filterBar/index.vue";
import pagination from "../common/pagination.vue";

const { products, fetchProducts } = useProducts();
const { selectedCategoryFilters } = useCategory();
const { selectedBrandFilters } = useBrands();

const currentPage = ref(1);

const filterItems = computed(() => {
  return [...selectedCategoryFilters.value, ...selectedBrandFilters.value];
});

watchEffect(async () => {
  if (filterItems.value.length > 0) {
    currentPage.value = 1;
  }
  await fetchProducts(filterItems.value, currentPage.value);
});
</script>

<template>
  <div v-if="products" class="flex grow flex-col gap-4">
    <filterBar />

    <div class="flex justify-center lg:justify-normal flex-wrap gap-5">
      <item v-for="brand in products.data" :key="brand.id" :brand="brand" />
    </div>

    <pagination v-model:page="currentPage" :listInfo="products.pagination" />
  </div>
</template>
