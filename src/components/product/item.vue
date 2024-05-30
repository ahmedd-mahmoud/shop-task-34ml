<script setup lang="ts">
import { PropType } from "vue";
import { ProductResponse } from "../../types/api";
import wishlistIcon from "../../assets/icons/wishlist.svg";

defineProps({
  brand: {
    type: Object as PropType<ProductResponse>,
    required: true,
  },
});
</script>

<template>
  <div class="flex flex-col items-start">
    <div class="relative">
      <img
        :src="brand.featured_image"
        alt="brand.name"
        class="w-full h-[296px] object-cover"
      />
      <button class="absolute top-2 right-2 p-2 bg-white rounded-full">
        <img :src="wishlistIcon" alt="Add to wishlist" />
      </button>
    </div>
    <p class="text-lg">{{ brand.title }}</p>
    <p class="font-bold text-lg">{{ brand.default_variant.price }}</p>
  </div>
</template>
