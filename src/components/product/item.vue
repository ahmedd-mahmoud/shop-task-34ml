<script setup lang="ts">
import type { PropType } from "vue";
import type { ProductResponse } from "../../types/api";
import commonButton from "../common/button.vue";
import wishlistIcon from "../../assets/icons/wishlist.svg";

defineProps({
  brand: {
    type: Object as PropType<ProductResponse>,
    required: true,
  },
});
</script>

<template>
  <div class="flex flex-col w-60 items-start">
    <div class="relative">
      <img
        :src="brand.featured_image"
        alt="brand.name"
        class="w-full h-[296px] object-cover"
      />
      <commonButton
        :icon="wishlistIcon"
        type="link"
        class="absolute top-2 right-2 p-2 bg-white !rounded-full"
      />
    </div>
    <p class="text-lg">{{ brand.title }}</p>
    <p class="font-bold text-lg">{{ brand.default_variant.price }}</p>
  </div>
</template>
