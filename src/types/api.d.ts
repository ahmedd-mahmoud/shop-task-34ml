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
