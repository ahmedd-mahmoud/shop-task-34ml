<script setup lang="ts">
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
  <div class="flex justify-center gap-10 py-3 bg-surface">
    <button v-for="button in navigationButtons" class="font-bold">
      {{ button }}
    </button>
  </div>
</template>
