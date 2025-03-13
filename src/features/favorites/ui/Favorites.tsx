import {GameResultType} from '../../../types';
import {useEffect, useState} from 'react';
import {clearFavorites, getFavorites} from '../utils';
import {GameCard} from '../../game-card';
import css from './Favorites.module.css';
import {BaseButton} from '../../../shared';

export const Favorites = () => {
    const [favorites, setFavorites] = useState<GameResultType[]>([]);

    useEffect(() => {
        const favoritesList = getFavorites();
        setFavorites(favoritesList);
    }, []);

    const onClearList = () => {
        clearFavorites();
        setFavorites([]);
    };

    const updateFavorites = (updatedFavorites: GameResultType[]) => {
        setFavorites([...updatedFavorites]);
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
                            return <GameCard card={item} key={item.id} updateFavorites={updateFavorites}/>;
                        })}
                    </div>
                </>
            ) : (
                <p className={css.description}>Список избранного пуст</p>
            )}
        </div>
    );
};
