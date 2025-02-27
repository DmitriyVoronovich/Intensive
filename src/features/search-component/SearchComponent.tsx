import Search from 'antd/es/input/Search';
import { BaseSelect } from '../../shared';
import { SearchProps } from 'antd/es/input';
import { getGames, getSearchGames } from '../../entities/game';
import { useAppDispatch, useAppSelector } from '../../types';
import css from './SearchComponent.module.css';
import './SearchComponent.css';
import { useState } from 'react';

export const SearchComponent = () => {
  const dispatch = useAppDispatch();
  const cardList = useAppSelector((state) => state.games.games);

  const [platforms, setPlatforms] = useState<string | string[]>('');
  const [genres, setGenres] = useState<string | string[]>('');

  const onSearch: SearchProps['onSearch'] = (value) => {
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

  const onSelectGenres = (value: string | string[]) => setGenres(value);
  const onSelectPlatforms = (value: string | string[]) => setPlatforms(value);

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
        <div className={css.selectItem}>
          <span>Выберите жанр игры</span>
          <BaseSelect
            options={cardList}
            placeholder={'Выберите жанр'}
            onChange={onSelectGenres}
          />
        </div>
        <div className={css.selectItem}>
          <span>Выберите платформу</span>
          <BaseSelect
            options={cardList}
            placeholder={'Выберите платформу'}
            onChange={onSelectPlatforms}
          />
        </div>
      </div>
    </div>
  );
};
