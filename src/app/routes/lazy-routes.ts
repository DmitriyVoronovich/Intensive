import { lazy } from 'react';

export const SearchPage = lazy(() =>
  import('../../pages/search-page').then((module) => ({
    default: module.SearchPage,
  }))
);
