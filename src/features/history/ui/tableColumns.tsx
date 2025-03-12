import {
  GenreResultType,
  HistoryType,
  PlatformResultType,
  QueryParamsType,
} from '../../../types';
import { BaseButton } from '../../../shared';
import React from 'react';

type ColumsProps = {
  genresList: [] | GenreResultType[];
  platformsList: [] | PlatformResultType[];
  restoreSearch: ({ search, genres, platforms }: QueryParamsType) => void;
};

type ColumnType = {
  title: string;
  key: string;
  dataIndex: string;
  render?: (_: string, item: HistoryType, index: number) => React.ReactNode;
};

type ColumnsWithProps = {
  columns: ColumnType[];
} & ColumsProps;

export const getColumnsWithProps = ({
  genresList,
  platformsList,
  restoreSearch,
}: ColumsProps): ColumnsWithProps => {
  const columns: ColumnType[] = [
    {
      title: '#',
      key: 'number',
      dataIndex: 'number',
      render: (_, _item, index) => <span>{index + 1}</span>,
    },
    {
      title: 'Поисковой запрос',
      key: 'search',
      dataIndex: 'search',
      render: (_, { query }) => <span>{query.search}</span>,
    },
    {
      title: 'Выбранные жанры игры',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { query }) => (
        <div>
          {query.genres?.map((genr) => {
            const genre = genresList.find((item) => item.id == genr);
            return <span key={genr}>{genre?.name} </span>;
          })}
        </div>
      ),
    },
    {
      title: 'Выбранные платформы игр',
      key: 'platform',
      dataIndex: 'platform',
      render: (_, { query }) => (
        <div>
          {query.platforms?.map((platform) => {
            const platforms = platformsList.find((item) => item.id == platform);
            return <span key={platform}>{platforms?.name} </span>;
          })}
        </div>
      ),
    },
    {
      title: 'Дата и время поиска',
      key: 'time',
      dataIndex: 'time',
      render: (_, item) => (
        <span>{new Date(item.timestamp).toLocaleString()}</span>
      ),
    },
    {
      title: '',
      key: 'action',
      dataIndex: 'action',
      render: (_, item) => (
        <BaseButton
          buttonCategory={'table'}
          onClick={() => restoreSearch(item.query)}
        >
          Перейти к поиску
        </BaseButton>
      ),
    },
  ];

  return {
    columns,
    genresList,
    platformsList,
    restoreSearch,
  };
};
