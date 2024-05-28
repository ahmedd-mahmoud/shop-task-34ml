export type Meta = {
  code: number;
  errors: string[];
};

export type Pagination = {
  current_page: number;
  last_page: number;
  total: number;
  per_page: number;
};

export type BaseResponse<T = null> = {
  meta: Meta;
  data: T;
  pagination: Pagination;
};

export type CategoryResponse = {
  id: string;
  title: string;
  tags: string[];
  category_image: string;
  have_others: boolean;
};

export type BrandResponse = {
  id: string;
  logo: string;
  products_count: number;
  title: string;
};

export type ProductResponse = {
  id: string;
  title: string;
  is_in_stock: boolean;
  featured_image: string;
  rating: {
    product_ratings: number;
    total_reviews_count: number;
  };
  trendy: number;
  best_seller: number;
  featured: number;
  clearance: number;
  default_variant: {
    id: string;
    sku_id: string;
    title: string;
    product_title: string;
    product_id: string;
    price: string;
    stock: number;
    is_in_stock: boolean;
    is_stock_below_threshold: null | boolean;
    specs: null | any;
    image: string;
    options: {
      key: string;
      value: string;
      title: string;
      type: number;
    }[];
  };
};
