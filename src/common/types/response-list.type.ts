export type ResponseList<T> = Promise<{
  data: T[];
  total: number;
  offset: number;
  limit: number;
}>;
