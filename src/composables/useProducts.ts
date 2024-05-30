import { ref } from "vue";
import { BaseResponse, ProductResponse, SelectedFilter } from "../types/api";

const products = ref<BaseResponse<ProductResponse[]> | null>(null);

const api = "https://grab-n-go.dashboard.hbm.studio/api/v1/products";

export default function useProducts() {
  const fetchProducts = async (query?: SelectedFilter[]) => {
    try {
      if (query && query.length > 0) {
        const queryObj = query.reduce((acc, item) => {
          // Ensure the type key exists in the accumulator
          if (!acc[item.type]) {
            acc[item.type] = [];
          }
          // Push the id to the respective array
          acc[item.type].push(item.id);

          return acc;
        }, {} as QueryObject);

        const queryString = Object.entries(queryObj)
          .map(([type, filters]) => `filter[${type}]=${filters.join(",")}`)
          .join("&");

        const res = await fetch(`${api}?${queryString}`);
        products.value = await res.json();
      } else {
        const res = await fetch(api);
        products.value = await res.json();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return { products, fetchProducts };
}

export type QueryObject = {
  [key: string]: string[];
};
