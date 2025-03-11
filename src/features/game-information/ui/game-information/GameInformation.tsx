import {GameDetails} from '../../../../types';
import css from './GameInformation.module.css';
import {Button, Rate} from 'antd';
import {getFavorites, onRemoveToFavorites, onSaveToFavorites} from "../../../favorites";
import {useEffect, useState} from "react";
import {getUserFromLS, useModal} from "../../../../shared";
import {InformationModal} from "../information-modal";
import {onCreateObject} from "../../utils";

const ADD_DESCRIPTION = 'Игра успешно добавлена в список избранного!';
const REMOVE_DESCRIPTION = 'Игра успешно удалена из списка избранного!';

type GameInformationProps = {
    details: GameDetails;
}

export function GameInformation({details}: GameInformationProps) {
    const [favorites, setFavorites] = useState(false);
    const [user, setUser] = useState('');
    const {isOpen, toggleModal, description} = useModal();

    const information = onCreateObject(details)

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

    const onCheckingFavorites = () => {
        const favoritesValue = getFavorites();
        const favorites = favoritesValue.find((item: GameDetails) => item.id === details.id)
        setFavorites(favorites)
    }

    useEffect(() => {
        onCheckingFavorites()
        const user = getUserFromLS();
        if (user) {
            setUser(user.username)
        }
    }, []);

    return (
        <>
            <div className={css.game_card}>
                {user && <div className={css.btnWrapper}>
                    {!favorites ?
                        <Button onClick={onAddToFavoritesGames}>
                            <Rate count={1} disabled={true} value={0}/>Добавить в избранное
                        </Button> :
                        <Button onClick={onRemoveToFavoritesGames}>
                            <Rate count={1} disabled={true} value={1}/>Убрать из избранного
                        </Button>}
                </div>}
                <h5 className={css.game_title}>{details.name}</h5>
                <div className={css.content}>
                    <img className={css.picture} src={details.background_image} alt={details.name_original}/>
                    <div className={css.block_game_information}>
                        <div className={css.game_information}>
                            {
                                information.map((item) => {
                                    return (<div className={css.information}>{item.title}<span
                                        className={css.style_word}>{item.value}</span></div>)
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && <InformationModal toggle={toggleModal} description={description}/>}
        </>
    )
}

