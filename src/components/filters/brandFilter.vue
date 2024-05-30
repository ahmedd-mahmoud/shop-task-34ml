<script setup lang="ts">
import { ref } from "vue";
import useBrands from "../../composables/useBrands.ts";
import filterList from "./filterList.vue";

const { brands, selectedBrandFilters, fetchBrands } = useBrands();

const isExpanded = ref(true);

await fetchBrands();
</script>

<template>
  <filterList
    v-if="brands"
    title="Brands"
    v-model:selectedFilters="selectedBrandFilters"
    :list="brands.data"
    :expand="isExpanded"
    @expandClicked="isExpanded = !isExpanded"
  />
</template>
