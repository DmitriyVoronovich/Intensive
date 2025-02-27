import { GameResultType, useAppSelector } from '../../types';
import { Card, Rate } from 'antd';
import css from './GameCard.module.css';
import './GameCard.css';

type Props = {
  card: GameResultType;
};

export const GameCard = ({ card }: Props) => {
  const loading = useAppSelector((state) => state.games.loading);

  const { background_image, name, platforms, rating, genres } = card;

  return (
    <Card
      className={css.container}
      hoverable
      actions={[
        <div key="details" className={css.cardMoreDetails}>
          Подробнее
        </div>,
      ]}
      loading={loading}
    >
      <h3 className={css.cardName}>{name}</h3>

      <div className={css.cardImgContainer}>
        <img alt={name} src={background_image} className={css.cardImg} />
      </div>
      <div className={css.cardInformationWrapper}>
        <div className={css.descriptionWrapper}>
          <h3 className={css.ratingCategory}>Рейтинг:</h3>
          <Rate value={rating} disabled />
        </div>
        <div className={css.descriptionWrapper}>
          <h3 className={css.genresCategory}>Жанр:</h3>
          {genres?.map((item) => {
            return (
              <div key={item.id} className={css.descriptionInformation}>
                {item.name}
              </div>
            );
          })}
        </div>
        <div className={css.descriptionWrapper}>
          <h3 className={css.platformCategory}>Платформы:</h3>
          {platforms.map((item) => {
            return (
              <div
                key={item.platform.id}
                className={css.descriptionInformation}
              >
                {item.platform.name}
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
};
