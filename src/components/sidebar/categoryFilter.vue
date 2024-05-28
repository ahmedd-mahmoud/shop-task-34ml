<script setup lang="ts">
import { ref } from "vue";
import useCategory from "../../composables/useCategory.ts";
import filterList from "../common/filterList.vue";

const { categories, fetchCategories } = useCategory();

const selectedFilters = ref<string[]>([]);

await fetchCategories();
</script>

<template>
  <filterList
    v-if="categories"
    title="Category"
    v-model:selectedFilters="selectedFilters"
    :list="categories.data"
  />
</template>
