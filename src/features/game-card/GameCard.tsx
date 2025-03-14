import {GameResultType, useAppSelector} from '../../types';
import {Card, Rate} from 'antd';
import {selectGamesLoading} from '../../entities';
import css from './GameCard.module.css';
import './GameCard.css';
import {InformationWrapper} from './information-wrapper';
import {useLocation, useNavigate} from 'react-router-dom';
import {BaseButton, getUserFromLS, PATHS, useModal} from '../../shared';
import {Genres, Platform, Tags} from "../../types/data/gameDataType.ts";
import {getFavorites, onRemoveToFavorites, onSaveToFavorites} from "../favorites";
import {useEffect, useState} from "react";
import {InformationModal} from "../game-information/ui/information-modal";

type Props = {
    card: GameResultType;
    updateFavorites: (updateFavorites: GameResultType[]) => void
};

type SeparationList = Platform[] | Genres[] | Tags[]

const ADD_DESCRIPTION = 'Игра успешно добавлена в список избранного!';
const REMOVE_DESCRIPTION = 'Игра успешно удалена из списка избранного!';

export const GameCard = ({card, updateFavorites}: Props) => {
    const loading = useAppSelector(selectGamesLoading);
    const locate = useLocation();
    const {id, background_image, name, platforms, rating, genres, tags} = card;

    const navigate = useNavigate();

    const [favorites, setFavorites] = useState(false);
    const [user, setUser] = useState('');
    const {isOpen, toggleModal, description} = useModal();
    const openDetails = () => navigate(PATHS.GAMEPAGE.replace(':id', `${id}`));

    const tagsList = tags?.filter((item) => item.language === 'eng').slice(0, 4);
    const platformList = platforms?.slice(0, 5);
    const onSeparation = (list: SeparationList, index: number): string => {
        return index !== list.length - 1 ? ',' : '';
    };

    const onAddToFavoritesGames = () => {
        onSaveToFavorites(card);
        setFavorites(true);
        toggleModal(ADD_DESCRIPTION);
    };

    const onRemoveToFavoritesGames = () => {
        onRemoveToFavorites(card);
        setFavorites(false);
        toggleModal(REMOVE_DESCRIPTION);

        if (locate.pathname === PATHS.FAVORITES) {
            const updatedFavorites = getFavorites();
            updateFavorites(updatedFavorites);
        }

    };

    useEffect(() => {
        const user = getUserFromLS();
        if (user) {
            setUser(user.username);
            const favoritesValue = getFavorites();
            const isFavorite = favoritesValue.some((item: GameResultType) => item.id === card.id);
            setFavorites(isFavorite);
        }
    }, [card.id]);

    return (
        <>
            <Card
                className={css.container}
                hoverable
                loading={loading}
            >
                <>
                    <div className={css.cardHeader}>
                        <h3 className={css.cardName}>{name}</h3>
                        {user && (
                            <div className={css.btnWrapper}>
                                {!favorites ? (
                                    <BaseButton
                                        buttonCategory={'favorite'}
                                        onClick={onAddToFavoritesGames}
                                    >
                                        <Rate count={1} disabled={true} value={0}/>
                                    </BaseButton>
                                ) : (
                                    <BaseButton
                                        buttonCategory={'favorite'}
                                        onClick={onRemoveToFavoritesGames}
                                    >
                                        <Rate count={1} disabled={true} value={1}/>
                                    </BaseButton>
                                )}
                            </div>
                        )}
                    </div>

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
            {isOpen && <InformationModal toggle={toggleModal} description={description}/>}
        </>
    );
};
