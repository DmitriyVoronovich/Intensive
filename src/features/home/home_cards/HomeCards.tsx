import css from './HomeCards.module.css';
import { useAppSelector } from '../../../types';
import { selectGames } from '../../../entities';
import { GameCard } from '../../game-card';

export const HomeCards = () => {
  const cardList = useAppSelector(selectGames);

  return (
    <section className={css.cards}>
      <div className={css.cardWrapper}>
        {cardList.slice(0, 5).map((item) => (
          <GameCard card={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};
