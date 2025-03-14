import {GameResultType} from '../../../../types';
import css from './GameInformation.module.css';
import './GameInformation.css';
import {Rate} from 'antd';
import {getFavorites, onRemoveToFavorites, onSaveToFavorites,} from '../../../favorites';
import {useEffect, useState} from 'react';
import {BaseButton, getUserFromLS, useModal} from '../../../../shared';
import {InformationModal} from '../information-modal';
import {onCreateObject} from '../../utils';
import {ScreenshotsContent} from "../screenshots-content";
import {DollarOutlined} from '@ant-design/icons';

const ADD_DESCRIPTION = 'Игра успешно добавлена в список избранного!';
const REMOVE_DESCRIPTION = 'Игра успешно удалена из списка избранного!';
const BUY_DESCRIPTION = 'Игры для покупки временно не доступны. Попробуйте позже.';

type GameInformationProps = {
    details: GameResultType;
};

export function GameInformation({details}: GameInformationProps) {
    const [favorites, setFavorites] = useState(false);
    const [user, setUser] = useState('');
    const {isOpen, toggleModal, description} = useModal();

    const information = onCreateObject(details);

    const onAddToFavoritesGames = () => {
        onSaveToFavorites(details);
        setFavorites(true);
        toggleModal(ADD_DESCRIPTION);
    };

    const onRemoveToFavoritesGames = () => {
        onRemoveToFavorites(details);
        setFavorites(false);
        toggleModal(REMOVE_DESCRIPTION);
    };

    const onBuyGames = () => toggleModal(BUY_DESCRIPTION);

    useEffect(() => {
        const user = getUserFromLS();
        if (user) {
            setUser(user.username);
            const favoritesValue = getFavorites();
            const isFavorite = favoritesValue.some((item: GameResultType) => item.id === details.id);
            setFavorites(isFavorite);
        }
    }, [details.id]);

    return (
        <>
            <div className={css.game_card}>
                <div className={css.header}>
                    <h5 className={css.game_title}>{details.name}</h5>
                    {user && (
                        <div className={css.btnWrapper}>
                            {!favorites ? (
                                <BaseButton
                                    buttonCategory={'favorite'}
                                    onClick={onAddToFavoritesGames}
                                >
                                    <Rate count={1} disabled={true} value={0}/>
                                    Добавить в избранное
                                </BaseButton>
                            ) : (
                                <BaseButton
                                    buttonCategory={'favorite'}
                                    onClick={onRemoveToFavoritesGames}
                                >
                                    <Rate count={1} disabled={true} value={1}/>
                                    Убрать из избранного
                                </BaseButton>
                            )}
                        </div>
                    )}
                </div>
                <div className={css.content}>
                    <img className={css.picture} src={details.background_image} alt={details.name}/>
                    <div className={css.block_game_information}>
                        <div className={css.game_information}>
                            {
                                information.map((item) => {
                                    return (<div className={css.information} key={item.title}>{item.title}<span
                                        className={css.style_word}>{item.value}</span></div>)
                                })
                            }
                        </div>
                    </div>
                </div>
                <section className={css.descriptionWrapper}>
                    <h6 className={css.sectionTitle}>Описание игры:</h6>
                    <p className={css.description}>
                        {details.description_raw}
                    </p>
                </section>
                <ScreenshotsContent/>
                <div className={css.btnBuyWrapper}>
                    <BaseButton
                        buttonCategory={'favorite'}
                        onClick={onBuyGames}
                    >
                        <DollarOutlined/>
                        Купить игру
                    </BaseButton>
                </div>
            </div>
            {isOpen && <InformationModal toggle={toggleModal} description={description}/>}
        </>
    )
}
