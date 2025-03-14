import {GameResultType} from "../../../types";

type ReturnValue = {
    title: string,
    value: string | number,
}

export const onCreateObject = (details: GameResultType): ReturnValue[] => {

    const {updated, released, playtime, rating, genres, platforms, tags} = details;

    const dateObject = new Date(updated);

    const addLeadingZero = (num: number) => (num < 10 ? "0" + num : num);

    const onFormattedDate = `${addLeadingZero(dateObject.getDate())}.${addLeadingZero(dateObject.getMonth() + 1)}.${dateObject.getFullYear()}`;

    const onFormattedTime = `${addLeadingZero(dateObject.getHours())}:${addLeadingZero(dateObject.getMinutes())}:${addLeadingZero(dateObject.getSeconds())}`;

    const genresList = genres?.map((item) => item.name).join(', ');
    const platformList = platforms?.map((item) => item.platform.name).join(', ');
    const tagsList = tags?.map((item) => item.name).join(', ');

    return [
        {
            title: 'Дата обновления: ',
            value: `${onFormattedDate}, ${onFormattedTime}`,
        },
        {
            title: 'Релиз: ',
            value: released.split('-').reverse().join('.'),
        },
        {
            title: 'Рейтинг: ',
            value: rating === 0 ? 'У игры нет оценок' : rating,
        },
        {
            title: 'Жанры: ',
            value: genresList ? genresList : 'Нет данных',
        },
        {
            title: 'Платформы: ',
            value: platformList ? platformList : 'Нет данных',
        },
        {
            title: 'Теги: ',
            value: tagsList ? tagsList : 'Нет данных',
        },
        {
            title: 'Время игры: ',
            value: playtime === 0 ? 'Нет данных' : `${playtime} ч.`,
        }
    ]
}