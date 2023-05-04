export type PagedList = {
  data: Array<object>;
  meta: PagedListMeta;
};

export type PagedListMeta = {
  count: number;
  currentPage: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  pageSize: number;
  totalPages: number;
};
