import css from './ContentSearch.module.css';
import {useAppDispatch, useAppSelector} from '../../types';
import {GameCard} from '../game-card';
import {getGenres, getPlatforms, selectGames} from '../../entities';
import {SearchComponent} from '../search-component';
import {useEffect} from "react";

export const ContentSearch = () => {
    const dispatch = useAppDispatch();

    const cardList = useAppSelector(selectGames);

    useEffect(() => {
        dispatch(getGenres());
        dispatch(getPlatforms());
    }, []);

    return (
        <div className={css.container}>
            <SearchComponent/>
            <div className={css.cardWrapper}>
                {cardList.map((item) => <GameCard card={item} key={item.id}/>)}
            </div>
        </div>
    );
};
