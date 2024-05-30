<script setup lang="ts">
import commonButton from "./common/button.vue";
</script>

<template>
  <div class="flex gap-2 border-t py-5 px-6 sm:px-12 text-[13px]">
    <commonButton text="Home" type="link" />
    <span class="text-subtitle">/</span>
    <commonButton text="Furniture" type="link" />
    <span class="text-subtitle">/</span>
    <commonButton text="Dining Room Tables" type="link" class="text-subtitle" />
  </div>
</template>
