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
    type: String as PropType<"solid" | "outline" | "icon">,
    default: "solid",
  },
});

const typeClass = {
  solid: "bg-buttonBg text-white hover:bg-buttonBg/80",
  outline: "text-buttonBg border border-buttonBg hover:bg-buttonBg/20",
  icon: "hover:opacity-80",
};
</script>

<template>
  <button
    class="flex items-center font-bold text-[16px] rounded-lg p-1"
    :class="typeClass[type]"
    @click="$emit('click')"
  >
    <span v-if="text">{{ text }}</span>
    <img v-if="icon" :src="icon" alt="icon" :class="typeClass.icon" />
  </button>
</template>
