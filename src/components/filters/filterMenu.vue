<script setup lang="ts">
import { ref } from "vue";
import categoryFilter from "./categoryFilter.vue";
import brandFilter from "./brandFilter.vue";
import commonButton from "../common/button.vue";
import menuIcon from "../../assets/icons/menu-icon.svg";
import closeIcon from "../../assets/icons/close-icon.svg";
import useCategory from "../../composables/useCategory";
import useBrands from "../../composables/useBrands";

const isMenuOpen = ref(false);
const { selectedCategoryFilters } = useCategory();
const { selectedBrandFilters } = useBrands();

const clearAllFilters = () => {
  selectedCategoryFilters.value = [];
  selectedBrandFilters.value = [];
};
</script>

<template>
  <div class="lg:hidden">
    <commonButton :icon="menuIcon" type="link" @click="isMenuOpen = true" />
    <div
      class="flex flex-col gap-4 fixed left-0 top-0 z-10 w-full h-full overflow-auto bg-white transition-transform duration-500"
      :class="isMenuOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <div
        class="flex justify-between items-center py-4 border-b px-5 sm:px-10"
      >
        <h1 class="font-bold">Filter By</h1>
        <commonButton
          :icon="closeIcon"
          type="link"
          @click="isMenuOpen = false"
        />
      </div>
      <div class="flex flex-col gap-5 px-5 sm:px-10">
        <categoryFilter />
        <brandFilter />
      </div>

      <div
        class="flex justify-between items-center font-bold text-[16px] py-4 px-5 sm:px-10"
      >
        <commonButton
          text="Clear All"
          type="outline"
          class="h-12 px-3"
          @click="clearAllFilters"
        />
        <commonButton
          text="View {number} items"
          type="solid"
          class="h-12 px-3"
          @click="isMenuOpen = false"
        />
      </div>
    </div>
  </div>
</template>
