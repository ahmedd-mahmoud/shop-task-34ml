<script setup lang="ts">
import { computed, ref, watchEffect } from "vue";
import { useRoute } from "vue-router";

import useProducts from "../../composables/useProducts.ts";
import useCategory from "../../composables/useCategory.ts";
import useBrands from "../../composables/useBrands.ts";

import item from "./item.vue";
import filterBar from "../filters/filterBar/index.vue";
import pagination from "../common/pagination.vue";
import loadingIcon from "../../assets/icons/loading-icon.svg";
import emptyIcon from "../../assets/icons/empty-indicator.svg";

const { products, fetchProducts } = useProducts();
const { selectedCategoryFilters } = useCategory();
const { selectedBrandFilters } = useBrands();
const route = useRoute();

const currentPage = ref(Number(route.query.page) || 1);
const loading = ref(false);

const filterItems = computed(() => {
  return [...selectedCategoryFilters.value, ...selectedBrandFilters.value];
});

watchEffect(async () => {
  loading.value = true;
  await fetchProducts(filterItems.value, currentPage.value);
  loading.value = false;
});
</script>

<template>
  <div v-if="products" class="flex grow flex-col gap-4 lg:pt-20">
    <filterBar />

    <div
      v-if="!loading"
      class="flex justify-center lg:justify-normal flex-wrap gap-5"
    >
      <item v-for="brand in products.data" :key="brand.id" :brand="brand" />
    </div>
    <img v-else :src="loadingIcon" alt="Loading" class="w-56 self-center" />

    <div
      v-show="!products.data.length"
      class="flex flex-col justify-center items-center gap-2"
    >
      <img :src="emptyIcon" alt="No data" class="w-16" />
      <p class="text-xl">No Product found</p>
    </div>

    <pagination v-model:page="currentPage" :listInfo="products.pagination" />
  </div>
</template>
