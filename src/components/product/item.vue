<script setup lang="ts">
import { PropType } from "vue";
import { ProductResponse } from "../../types/api";

defineProps({
  brand: {
    type: Object as PropType<ProductResponse>,
    required: true,
  },
});
</script>

<template>
  <div class="flex flex-col items-start">
    <img
      :src="brand.featured_image"
      alt="brand.name"
      class="w-full h-[296px] object-cover"
    />
    <p class="font-bold text-lg">{{ brand.title }}</p>
    <p>{{ brand.default_variant.price }}</p>
  </div>
</template>
