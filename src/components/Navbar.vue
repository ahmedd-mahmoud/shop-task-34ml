<script setup lang="ts">
import commonButton from "./common/button.vue";
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
    <commonButton
      v-for="button in navigationButtons"
      :text="button"
      type="link"
      class="font-bold hidden lg:flex"
    />

    <filterMenu />
  </div>
</template>
