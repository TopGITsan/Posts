interface PageQueryOptions {
  paginate: PaginateOptions;
  slice: SliceOptions;
  sort: [SortOptions];
  operators: [OperatorOptions];
  search: SearchOptions;
}

interface PaginateOptions {
  page: number;
  limit: number;
}

interface SliceOptions {
  start: number;
  end: number;
  limit: number;
}

enum SortOrderEnum {
  ASC = 'ASC',
  DESC = 'DESC',
}

interface SortOptions {
  field: string;
  order: SortOrderEnum;
}

enum OperatorKindEnum {
  GTE = 'GTE',
  LTE = 'LTE',
  NE = 'NE',
  LIKE = 'LIKE',
}

interface OperatorOptions {
  kind: OperatorKindEnum;
  field: string;
  value: string;
}

interface SearchOptions {
  q: string;
}
