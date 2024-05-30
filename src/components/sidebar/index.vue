<script setup lang="ts">
import categoryFilter from "../filters/categoryFilter.vue";
import brandFilter from "../filters/brandFilter.vue";
</script>

<template>
  <div class="hidden lg:flex flex-col pl-9 gap-14">
    <h1 class="font-bold text-xl p-3 whitespace-nowrap">Dining Room Tables</h1>
    <div class="flex flex-col gap-5">
      <categoryFilter />
      <brandFilter />
    </div>
  </div>
</template>
