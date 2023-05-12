export type ContentFilter = {
  locale?: string;
  page?: number;
  size?: number;
  sort?: string;
  search?: string;
  resolve?: string;
  stage?: string;
  _filters?: string;
};

export type AssetFilter = {
  folder?: string;
  page?: number;
  size?: number;
  sort?: string;
  search?: string;
  _filters?: string;
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
