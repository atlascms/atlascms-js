export type ContentFilter = {
  locale?: string;
  page?: number;
  size?: number;
  sort?: string;
  search?: string;
  resolve?: string;
  stage?: string;
  filter?: string;
};

export type ModelFilter = {
  system?: boolean;
  page?: number;
  size?: number;
};

export type ComponentFilter = {
  page?: number;
  size?: number;
};
