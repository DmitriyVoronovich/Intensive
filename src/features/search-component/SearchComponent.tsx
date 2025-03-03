import Search from 'antd/es/input/Search';
import { BaseSelect } from '../../shared';
import { SearchProps } from 'antd/es/input';
import { getGames, getSearchGames, selectGames } from '../../entities';
import { useAppDispatch, useAppSelector } from '../../types';
import css from './SearchComponent.module.css';
import './SearchComponent.css';
import { useState } from 'react';
import { SelectItemWrapper } from './select-item-wrapper';

type PlatformType = string | string[];
type GenreType = string | string[];
type OnSearchFunction = SearchProps['onSearch'];

export const SearchComponent = () => {
  const dispatch = useAppDispatch();
  const cardList = useAppSelector(selectGames);

  const [platforms, setPlatforms] = useState<PlatformType>('');
  const [genres, setGenres] = useState<GenreType>('');

  const onSearch: OnSearchFunction = (value) => {
    if (value === '') {
      return dispatch(getGames());
    }
    dispatch(
      getSearchGames({
        search: value,
        genres,
        platforms,
      })
    );
  };

  const onSelectGenres = (value: GenreType) => setGenres(value);
  const onSelectPlatforms = (value: PlatformType) => setPlatforms(value);

  return (
    <div className={css.searchWrapper}>
      <Search
        placeholder="Искать игру по названию"
        allowClear
        enterButton="Поиск"
        size="large"
        onSearch={onSearch}
      />
      <div className={css.selectWrapper}>
        <SelectItemWrapper name={'Выберите жанр игры'}>
          <BaseSelect
            options={cardList}
            placeholder={'Выберите жанр'}
            onChange={onSelectGenres}
          />
        </SelectItemWrapper>
        <SelectItemWrapper name={'Выберите платформу'}>
          <BaseSelect
            options={cardList}
            placeholder={'Выберите платформу'}
            onChange={onSelectPlatforms}
          />
        </SelectItemWrapper>
      </div>
    </div>
  );
};
