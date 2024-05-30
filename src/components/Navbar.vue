<script setup lang="ts">
import commonButton from "./common/button.vue";
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
    class="flex lg:justify-center gap-8 py-3 pl-6 sm:pl-12 lg:pl-0 bg-surface"
  >
    <commonButton
      v-for="button in navigationButtons"
      :text="button"
      type="link"
      class="font-bold hidden lg:flex"
    />

    <commonButton :icon="menuIcon" type="link" class="lg:hidden" />
  </div>
</template>
