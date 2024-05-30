<script setup lang="ts">
import commonButton from "../../common/button.vue";
import closeIcon from "../../../assets/icons/close-icon.svg";

defineProps({
  item: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div
    class="flex items-center gap-2 whitespace-nowrap py-1 px-2 bg-grayBg rounded-md"
  >
    <span class="text-xs">{{ item }}</span>
    <commonButton
      :icon="closeIcon"
      type="link"
      class="w-5"
      @click="$emit('remove')"
    />
  </div>
</template>
