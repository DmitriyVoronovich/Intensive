import { QueryParamsType } from './queryParamsType.ts';

export type HistoryType = {
  id: string;
  timestamp: string;
  query: QueryParamsType;
};
