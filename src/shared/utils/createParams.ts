import {onTransformValue} from "../../features/search-component";

type Props = {
    search?: string;
    genres?: number[];
    platforms?: number[];
}

export const createParams = ( {search, genres, platforms}: Props) => {
    const params: {
        search?: string;
        genres?: string;
        platforms?: string;
    } = {};

    if (search && search.trim() !== '') {
        params.search = search.trim();
    }

    if (genres && genres.length !== 0) {
        params.genres = onTransformValue(genres);
    }

    if (platforms && platforms.length !== 0) {
        params.platforms = onTransformValue(platforms);
    }

    return params;
};