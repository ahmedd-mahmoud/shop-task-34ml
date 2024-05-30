<script setup lang="ts">
import filterMenu from "./filters/filterMenu.vue";

const navigationButtons = [
  "Grocery",
  "Electronics",
  "Clothing",
  "Furniture",
  "Toys & Video games",
  "Baby",
  "Beauty",
  "Personal Care",
  "Pets",
  "Sports",
  "Stationery",
  "Brands",
];
</script>

<template>
  <div
    class="flex lg:justify-center gap-10 py-3 pl-6 sm:pl-12 lg:pl-0 bg-surface"
  >
    <button
      v-for="button in navigationButtons"
      class="font-bold hidden lg:flex"
    >
      {{ button }}
    </button>

    <filterMenu />
  </div>
</template>
