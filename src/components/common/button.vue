<script setup lang="ts">
import { PropType } from "vue";

defineProps({
  text: {
    type: String,
  },
  icon: {
    type: String,
  },
  type: {
    type: String as PropType<"solid" | "outline" | "link">,
    default: "solid",
  },
  disable: {
    type: Boolean,
    default: false,
  },
});

const typeClass = {
  solid: "bg-buttonBg text-white hover:bg-buttonBg/80",
  outline: "text-buttonBg border border-buttonBg hover:bg-buttonBg/20",
  link: "hover:opacity-70",
};
</script>

<template>
  <button
    class="flex items-center gap-2 rounded-md disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:opacity-30"
    :class="typeClass[type]"
    :disabled="disable"
    @click="$emit('click')"
  >
    <img v-if="icon" :src="icon" alt="icon" :class="typeClass.link" />
    <span v-if="text" :class="icon && text ? 'hidden md:inline' : ''">
      {{ text }}
    </span>
    <slot />
  </button>
</template>
