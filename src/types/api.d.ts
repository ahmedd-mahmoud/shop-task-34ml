export type Meta = {
  code: number;
  errors: string[];
};

export type BaseResponse<T = null> = {
  meta: Meta;
  data: T;
};

export type CategoryResponse = {
  id: string;
  title: string;
  tags: string[];
  category_image: string;
  have_others: boolean;
};
