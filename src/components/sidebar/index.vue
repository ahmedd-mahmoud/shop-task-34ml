<script setup lang="ts">
import categoryFilter from "./categoryFilter.vue";
import brandFilter from "./brandFilter.vue";
</script>

<template>
  <div class="flex flex-col pl-9 gap-14">
    <h1 class="font-bold text-xl p-3">Dining Room Tables</h1>
    <div class="flex flex-col gap-5">
      <categoryFilter />
      <span class="border-t" />
      <brandFilter />
    </div>
  </div>
</template>
