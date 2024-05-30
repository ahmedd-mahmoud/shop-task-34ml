<script setup lang="ts">
import { ref } from "vue";
import useCategory from "../../composables/useCategory.ts";
import filterList from "./filterList.vue";

const { categories, selectedCategoryFilters, fetchCategories } = useCategory();

const isExpanded = ref(true);

await fetchCategories();
</script>

<template>
  <filterList
    v-if="categories"
    title="Categories"
    v-model:selectedFilters="selectedCategoryFilters"
    :list="categories.data"
    :expand="isExpanded"
    @expandClicked="isExpanded = !isExpanded"
  />
</template>
