import { GameDetails } from '../../../types';
import { useEffect, useState } from 'react';
import { clearFavorites, getFavorites } from '../utils';
import { GameCard } from '../../game-card';
import css from './Favorites.module.css';
import { BaseButton } from '../../../shared';

export const Favorites = () => {
  const [favorites, setFavorites] = useState<GameDetails[]>([]);

  useEffect(() => {
    const favoritesList = getFavorites();
    setFavorites(favoritesList);
  }, []);

  const onClearList = () => {
    clearFavorites();
    setFavorites([]);
  };

  return (
    <div className={css.container}>
      {favorites.length ? (
        <>
          <div className={css.btnWrapper}>
            <BaseButton onClick={onClearList}>
              Удалить все из избранного
            </BaseButton>
          </div>
          <div className={css.cardWrapper}>
            {favorites?.map((item) => {
              return <GameCard card={item} key={item.id} />;
            })}
          </div>
        </>
      ) : (
        <p className={css.description}>Список избранного пуст</p>
      )}
    </div>
  );
};
