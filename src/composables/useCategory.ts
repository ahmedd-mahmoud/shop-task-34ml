import { ref } from "vue";
import { BaseResponse, CategoryResponse } from "../types/api";

const api = "https://grab-n-go.dashboard.hbm.studio/api/v1/categories";

export default function useCategory() {
  const categories = ref<BaseResponse<CategoryResponse[]> | null>(null);

  const fetchCategories = async () => {
    try {
      const res = await fetch(api);
      categories.value = await res.json();
    } catch (err) {
      console.error(err);
    }
  };

  return { categories, fetchCategories };
}
