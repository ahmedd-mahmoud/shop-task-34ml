<script setup lang="ts">
import commonButton from "../common/button.vue";
import filterIcon from "../../assets/icons/filter-icon.svg";
</script>

<template>
  <div class="flex items-center px-12 lg:px-0">
    <commonButton
      text="Hide Filters"
      :icon="filterIcon"
      type="outline"
      class="hidden lg:flex py-1 pl-2 pr-10 border-gray-500 !rounded-[4px] text-title"
    />
  </div>
</template>
