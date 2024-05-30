<script setup lang="ts">
import menuIcon from "../assets/icons/menu-icon.svg";

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

    <img :src="menuIcon" alt="Menu" class="w-6 h-6 lg:hidden" />
  </div>
</template>
