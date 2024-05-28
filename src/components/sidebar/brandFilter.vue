<script setup lang="ts">
import { ref } from "vue";
import useBrands from "../../composables/useBrands.ts";
import filterList from "../common/filterList.vue";

const { brands, fetchBrands } = useBrands();

const selectedFilters = ref<string[]>([]);

await fetchBrands();

console.log(brands.value);
</script>

<template>
  <filterList
    v-if="brands"
    title="Brand"
    v-model:selectedFilters="selectedFilters"
    :list="brands.data"
  />
</template>
