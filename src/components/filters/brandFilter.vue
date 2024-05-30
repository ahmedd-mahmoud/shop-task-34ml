<script setup lang="ts">
import { ref } from "vue";
import useBrands from "../../composables/useBrands.ts";
import filterList from "./filterList.vue";

const { brands, fetchBrands } = useBrands();

const selectedFilters = ref<string[]>([]);
const isExpanded = ref(true);

await fetchBrands();
</script>

<template>
  <filterList
    v-if="brands"
    title="Brand"
    v-model:selectedFilters="selectedFilters"
    :list="brands.data"
    :expand="isExpanded"
    @expandClicked="isExpanded = !isExpanded"
  />
</template>
