import { ref } from "vue";
import { BaseResponse, BrandResponse, SelectedFilter } from "../types/api";

const selectedBrandFilters = ref<SelectedFilter[]>([]);

const api = "https://grab-n-go.dashboard.hbm.studio/api/v1/brands";

export default function useBrands() {
  const brands = ref<BaseResponse<BrandResponse[]> | null>(null);

  const fetchBrands = async () => {
    try {
      const res = await fetch(api);
      brands.value = await res.json();
    } catch (err) {
      console.error(err);
    }
  };

  return { brands, selectedBrandFilters, fetchBrands };
}
