import css from './ContentSearch.module.css';
import {useAppSelector} from '../../types';
import {GameCard} from '../game-card';
import {selectGames} from '../../entities';
import {SearchComponent} from '../search-component';
import {PATHS} from "../../shared";
import {useLocation} from "react-router-dom";

export const ContentSearch = () => {
    const locate = useLocation();
    const cardList = useAppSelector(selectGames);

    return (
        <div className={css.container}>
            <SearchComponent disableAutoSearch={locate.pathname === PATHS.SEARCH}/>
            <div className={css.cardWrapper}>
                {cardList.map((item) => <GameCard card={item} key={item.id}/>)}
            </div>
        </div>
    );
};
