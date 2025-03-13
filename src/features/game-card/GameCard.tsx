import {GameDetails, GameResultType, useAppSelector} from '../../types';
import {Card, Rate} from 'antd';
import {selectGamesLoading} from '../../entities';
import css from './GameCard.module.css';
import './GameCard.css';
import {InformationWrapper} from './information-wrapper';
import {useNavigate} from 'react-router-dom';
import {PATHS} from '../../shared';
import {Genres, Platform, Tags} from "../../types/data/gameDataType.ts";

type Props = {
    card: GameResultType | GameDetails;
};

type SeparationList = Platform[] | Genres[] | Tags[]

export const GameCard = ({card}: Props) => {
    const loading = useAppSelector(selectGamesLoading);

    const {id, background_image, name, platforms, rating, genres, tags} = card;

    const navigate = useNavigate();
    const openDetails = () => navigate(PATHS.GAMEPAGE.replace(':id', `${id}`));

    const tagsList = tags?.filter((item) => item.language === 'eng').slice(0, 4);
    const platformList = platforms?.slice(0, 5);
    const onSeparation = (list: SeparationList, index: number): string => {
        return index !== list.length - 1 ? ',' : '';
    };

    return (
        <Card
            className={css.container}
            hoverable
            loading={loading}
        >
            <>
                <h3 className={css.cardName}>{name}</h3>

                <div className={css.cardImgContainer}>
                    <img alt={name} src={background_image} className={css.cardImg}/>
                </div>
            </>
            <div className={css.cardInformationWrapper}>
                <InformationWrapper name={'Рейтинг:'}>
                    {!rating ? <div className={css.descriptionInformation}> Оценок пока нет </div> :
                        <Rate value={rating} disabled/>}
                </InformationWrapper>
                <InformationWrapper name={'Жанр:'}>
                    {genres?.map((item, index) =>
                        <div key={item.id} className={css.descriptionInformation}>
                            {item.name}{onSeparation(genres, index)}
                        </div>
                    )}
                </InformationWrapper>
                <InformationWrapper name={'Платформы:'}>
                    {platformList.map((item, index) =>
                        <div key={item.platform.id}
                             className={css.descriptionInformation}>
                            {item.platform.name}{onSeparation(platformList, index)}
                        </div>
                    )}
                </InformationWrapper>
                <InformationWrapper name={'Теги:'}>
                    {!tagsList.length ? <div className={css.descriptionInformation}> Теги
                        отсутствуют </div> : tagsList.map((item, index) =>
                        <div key={item.id}
                             className={css.descriptionInformation}>
                            {item.name}{onSeparation(tagsList, index)}
                        </div>
                    )}
                </InformationWrapper>
            </div>
            <div onClick={openDetails} className={css.cardMoreDetails}>
                Подробнее
            </div>
        </Card>
    );
};
