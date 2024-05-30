<script setup lang="ts">
import { PropType, ref } from "vue";
import searchbar from "../common/searchbar.vue";

import plusIcon from "../../assets/icons/plus.svg";
import minusIcon from "../../assets/icons/minus.svg";
import emptyIcon from "../../assets/icons/empty-indicator.svg";

const selectedFilters = defineModel("selectedFilters", {
  type: Array as PropType<string[]>,
});

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  list: {
    type: Array as PropType<any[]>,
    required: true,
  },
  expand: {
    type: Boolean,
    default: true,
  },
});

defineEmits(["expandClicked"]);

const searchValue = ref("");
const filteredList = ref(props.list);

const handleSearch = () => {
  filteredList.value = props.list.filter((item) => {
    return item.title.toLowerCase().includes(searchValue.value.toLowerCase());
  });
};
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex justify-between items-center">
      <h2 class="lg:font-bold lg:text-[16px]">{{ title }}</h2>
      <button class="text-3xl" @click="$emit('expandClicked')">
        <img
          :src="expand ? minusIcon : plusIcon"
          :alt="expand ? 'minus' : 'plus'"
          class="hover:opacity-70"
        />
      </button>
    </div>
    <searchbar
      v-show="expand"
      v-model:value="searchValue"
      :placeholder-title="title"
      @input="handleSearch"
    />
    <div
      v-show="expand"
      v-for="item in filteredList"
      class="flex items-center gap-2"
    >
      <input
        type="checkbox"
        :id="item.id"
        :value="{ title: item.title, id: item.id, type: title.toLowerCase() }"
        v-model="selectedFilters"
        class="h-4 w-4"
      />
      <label :for="item.id">{{ item.title }}</label>
      <span v-if="item.products_count">({{ item.products_count }})</span>
    </div>
    <div
      v-show="expand && !filteredList.length"
      class="flex flex-col justify-center items-center gap-2"
    >
      <img :src="emptyIcon" alt="No data" class="w-8" />
      <p>No {{ title }} found</p>
    </div>
  </div>
  <span class="border-t" />
</template>
