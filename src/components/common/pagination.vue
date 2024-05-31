<script setup lang="ts">
import type { PropType } from "vue";
import type { Pagination } from "../../types/api";
import commonButton from "./button.vue";
import leftIcon from "../../assets/icons/left-icon.svg";
import rightIcon from "../../assets/icons/right-icon.svg";
import { useRouter } from "vue-router";

const currentPage = defineModel("page", {
  type: Number,
  default: 1,
});

const props = defineProps({
  listInfo: {
    type: Object as PropType<Pagination>,
    required: true,
  },
});

const router = useRouter();

const navigateToPage = (pageNumber: number) => {
  currentPage.value = pageNumber;
  router.push(`/?page=${pageNumber}`);
};

const prevPage = () => {
  if (currentPage.value > 1) {
    navigateToPage(currentPage.value - 1);
  }
};

const nextPage = () => {
  if (currentPage.value < props.listInfo.last_page) {
    navigateToPage(currentPage.value + 1);
  }
};
</script>

<template>
  <div class="flex items-center justify-center gap-2 py-8">
    <commonButton
      type="link"
      :icon="leftIcon"
      :disable="currentPage === 1"
      @click="prevPage"
      class="flex items-center justify-center h-10 w-10 border border-gray-500 text-title"
    />

    <commonButton
      v-for="pageNumber in listInfo.last_page"
      :key="pageNumber"
      :text="pageNumber.toString()"
      type="link"
      @click="navigateToPage(pageNumber)"
      class="flex items-center justify-center h-10 w-10 border border-gray-500 text-title"
      :class="currentPage === pageNumber ? 'bg-black text-white' : 'text-title'"
    />

    <commonButton
      type="link"
      :icon="rightIcon"
      :disable="currentPage === listInfo.last_page"
      @click="nextPage"
      class="flex items-center justify-center h-10 w-10 border border-gray-500 text-title"
    />
  </div>
  <template />
</template>
