<script setup lang="ts">
import type { PropType } from "vue";
import type { SelectedFilter } from "../../../types/api";
import commonButton from "../../common/button.vue";
import closeIcon from "../../../assets/icons/close-icon.svg";

defineProps({
  item: {
    type: Object as PropType<SelectedFilter>,
    required: true,
  },
});
</script>

<template>
  <div
    class="flex items-center gap-2 whitespace-nowrap py-1 px-2 bg-grayBg rounded-md"
  >
    <span class="text-xs">{{ item.title }}</span>
    <commonButton
      :icon="closeIcon"
      type="link"
      class="w-5"
      @click="$emit('remove')"
    />
  </div>
</template>
