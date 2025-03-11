import {GameDetails} from "../../../types";

type ReturnValue = {
    title: string,
    value: string | number,
}

export const onCreateObject = (details: GameDetails): ReturnValue[] => {

    const {updated, released, description_raw, playtime, rating} = details;

    return [
        {
            title: 'Рейтинг: ',
            value: rating,
        },
        {
            title: 'Дата обновления: ',
            value: updated,
        },
        {
            title: 'Описание: ',
            value: description_raw,
        },
        {
            title: 'Обновление: ',
            value: updated,
        },
        {
            title: 'Релиз: ',
            value: released,
        },
        {
            title: 'Время игры: ',
            value: playtime,
        }
    ]
}