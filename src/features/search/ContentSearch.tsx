import css from './ContentSearch.module.css';
import {useAppDispatch, useAppSelector} from '../../types';
import {GameCard} from '../game-card';
import {getGames, selectGames} from '../../entities';
import {useEffect} from 'react';
import {SearchComponent} from '../search-component';

export const ContentSearch = () => {
    const dispatch = useAppDispatch();
    const cardList = useAppSelector(selectGames);

    useEffect(() => {
        dispatch(getGames());
    }, [dispatch]);

    return (
        <div className={css.container}>
            <SearchComponent/>
            <div className={css.cardWrapper}>
                {cardList.map((item) => <GameCard card={item} key={item.id}/>)}
            </div>
        </div>
    );
};
