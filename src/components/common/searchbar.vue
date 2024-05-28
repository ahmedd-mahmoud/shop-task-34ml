<script setup lang="ts">
import searchIcon from "../../assets/icons/search-icon.svg";

const searchValue = defineModel("search-value", {
  type: String,
});

defineProps({
  placeholderTitle: {
    type: String,
  },
});
</script>

<template>
  <div
    class="flex w-full items-center gap-0.5 rounded-full bg-inputBg px-3 py-2"
  >
    <img class="mr-2" :src="searchIcon" />
    <input
      v-model="searchValue"
      type="text"
      :placeholder="`Search by ${placeholderTitle}` || 'Search...'"
      class="border-none bg-transparent outline-none"
    />
  </div>
</template>
