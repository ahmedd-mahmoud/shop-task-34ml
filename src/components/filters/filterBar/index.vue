<script setup lang="ts">
import type { SelectedFilter } from "../../../types/api";
import { computed, ref } from "vue";

import useCategory from "../../../composables/useCategory";
import useBrands from "../../../composables/useBrands";
import useProducts from "../../../composables/useProducts";

import commonButton from "../../common/button.vue";
import filterIcon from "../../../assets/icons/filter-icon.svg";
import filterBarItems from "./item.vue";
import filterMenu from "../filterMenu.vue";

const { selectedCategoryFilters } = useCategory();
const { selectedBrandFilters } = useBrands();
const { products } = useProducts();

const isMenuOpen = ref(false);

const filterItems = computed(() => {
  return [...selectedCategoryFilters.value, ...selectedBrandFilters.value];
});

const removeFilter = (filter: SelectedFilter) => {
  if (filter.type === "categories") {
    selectedCategoryFilters.value = selectedCategoryFilters.value.filter(
      (item) => item.id !== filter.id
    );
  } else {
    selectedBrandFilters.value = selectedBrandFilters.value.filter(
      (item) => item.id !== filter.id
    );
  }
};

const openMenu = () => {
  if (window.innerWidth < 1024) {
    isMenuOpen.value = true;
  }
};
</script>

<template>
  <div
    class="flex flex-col gap-2 lg:gap-0 lg:flex-row lg:items-center px-6 sm:px-12 lg:px-0"
  >
    <commonButton
      :icon="filterIcon"
      type="link"
      @click="openMenu"
      class="flex py-1 px-2 md:pl-2 md:pr-10 lg:mr-3 lg:border lg:border-gray-500 lg:!rounded-[4px] text-title"
    >
      <span class="inline lg:hidden font-bold">
        Filter
        {{ filterItems.length > 0 ? `(${filterItems.length})` : "" }}
      </span>
      <span class="hidden lg:inline whitespace-nowrap">Hide Filters</span>
      <span class="inline lg:hidden border-l pl-2">
        {{ products?.data.length }} Items</span
      >
    </commonButton>
    <div
      class="flex gap-2 w-fit max-w-64 min-[430px]:max-w-96 min-[550px]:max-w-[500px] scrollbar-hidden overflow-x-auto"
    >
      <filterBarItems
        v-for="item in filterItems"
        :item="item"
        @remove="removeFilter(item)"
      />
    </div>
    <span class="hidden lg:inline border-l pl-3">
      {{ products?.data.length }} Items</span
    >

    <filterMenu v-model:menu="isMenuOpen" />
  </div>
</template>
