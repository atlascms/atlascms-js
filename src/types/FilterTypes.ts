export type DynamicFilterField = {
  name: string;
  operator: string;
  value: any;
};

export type ContentFilter = {
  locale?: string;
  page?: number;
  size?: number;
  sort?: string;
  search?: string;
  resolve?: string;
  stage?: string;
  filters?: object;
};

export type UserFilter = {
  username?: string;
  roleId?: string;
  page?: number;
  size?: number;
  sort?: string;
  search?: string;
  resolve?: string;
  filters?: object;
};

export type AssetFilter = {
  folder?: string;
  page?: number;
  size?: number;
  sort?: string;
  search?: string;
  filters?: object;
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
