import {GameResultType, useAppSelector} from '../../types';
import {Card, Rate} from 'antd';
import {selectGamesLoading} from '../../entities';
import css from './GameCard.module.css';
import './GameCard.css';
import {InformationWrapper} from './information-wrapper';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../shared';

type Props = {
    card: GameResultType;
};

export const GameCard = ({card}: Props) => {
    const loading = useAppSelector(selectGamesLoading);

    const {id, background_image, name, platforms, rating, genres} = card;

const navigate = useNavigate();
const openDetails = () => navigate(PATHS.GAMEPAGE.replace(':id', `${id}`)) 

    const details = [

        <div onClick={openDetails} key="details" className={css.cardMoreDetails}>
            Подробнее
        </div>,
    ];

    return (
        <Card
            className={css.container}
            hoverable
            actions={details}
            loading={loading}
        >
            <h3 className={css.cardName}>{name}</h3>

            <div className={css.cardImgContainer}>
                <img alt={name} src={background_image} className={css.cardImg}/>
            </div>
            <div className={css.cardInformationWrapper}>
                <InformationWrapper name={'Рейтинг:'}>
                    <Rate value={rating} disabled/>
                </InformationWrapper>
                <InformationWrapper name={'Жанр:'}>
                    {genres?.map((item) =>
                        <div key={item.id} className={css.descriptionInformation}>
                            {item.name}
                        </div>
                    )}
                </InformationWrapper>
                <InformationWrapper name={'Платформы:'}>
                    {platforms.map((item) =>
                        <div key={item.platform.id}
                            className={css.descriptionInformation}>
                            {item.platform.name}
                        </div>
                    )}
                </InformationWrapper>
            </div>
        </Card>
    );
};
