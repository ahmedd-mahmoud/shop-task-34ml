<script setup lang="ts">
import { PropType, ref } from "vue";
import searchbar from "../common/searchbar.vue";

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
});

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
    <h2>{{ title }}</h2>
    <searchbar
      v-model:value="searchValue"
      :placeholder-title="title"
      @input="handleSearch"
    />
    <div v-for="item in filteredList" class="flex items-center gap-2">
      <input
        type="checkbox"
        :id="item.title"
        :value="item.title"
        v-model="selectedFilters"
        class="h-4 w-4"
      />
      <label :for="item.title">{{ item.title }}</label>
    </div>
  </div>
</template>
