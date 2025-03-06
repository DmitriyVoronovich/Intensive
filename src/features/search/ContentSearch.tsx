import css from './ContentSearch.module.css';
import {useAppSelector} from '../../types';
import {GameCard} from '../game-card';
import {selectGames} from '../../entities';
import {SearchComponent} from '../search-component';

export const ContentSearch = () => {
    const cardList = useAppSelector(selectGames);

    return (
        <div className={css.container}>
            <SearchComponent/>
            <div className={css.cardWrapper}>
                {cardList.map((item) => <GameCard card={item} key={item.id}/>)}
            </div>
        </div>
    );
};
