import css from './ContentSearch.module.css';
import { useAppDispatch, useAppSelector } from '../../types';
import { GameCard } from '../game-card';
import { getGames } from '../../entities/game';
import { useEffect } from 'react';
import { SearchComponent } from '../search-component';

export const ContentSearch = () => {
  const dispatch = useAppDispatch();
  const cardList = useAppSelector((state) => state.games.games);

  useEffect(() => {
    dispatch(getGames());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <SearchComponent />
      <div className={css.cardWrapper}>
        {cardList.map((item) => {
          return <GameCard card={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};
