import { ref } from "vue";
import { BaseResponse, ProductResponse } from "../types/api";

const api = "https://grab-n-go.dashboard.hbm.studio/api/v1/products";

export default function useCategory() {
  const products = ref<BaseResponse<ProductResponse[]> | null>(null);

  const fetchProducts = async () => {
    try {
      const res = await fetch(api);
      products.value = await res.json();
    } catch (err) {
      console.error(err);
    }
  };

  return { products, fetchProducts };
}
