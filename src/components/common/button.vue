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
});

const typeClass = {
  solid: "bg-buttonBg text-white hover:bg-buttonBg/80",
  outline: "text-buttonBg border border-buttonBg hover:bg-buttonBg/20",
  link: "hover:opacity-70",
};
</script>

<template>
  <button
    class="flex items-center gap-2 rounded-md"
    :class="typeClass[type]"
    @click="$emit('click')"
  >
    <img v-if="icon" :src="icon" alt="icon" :class="typeClass.link" />
    <span v-if="text" :class="icon && text ? 'hidden md:inline' : ''">
      {{ text }}
    </span>
  </button>
</template>
