import {createAsyncThunk} from '@reduxjs/toolkit';
import {GameApiResponse} from '../../../types';
import {API_KEY, axiosInstance, REQUEST_PATHS} from '../../../shared';

type ArgType = {
    page_size?: number;
    search?: string;
    platforms?: string;
    genres?: string;
    page?: number;
};

type SearchGameQueryParams = {
    key: string;
    dates: string;
    ordering: string;
    page_size?: number;
    genres?: string;
    search?: string;
    platforms?: string;
};

export const getSearchGames = createAsyncThunk<GameApiResponse, ArgType>(
    '@games/getSearchGames',
    async (arg, {rejectWithValue}) => {
        try {

            const params: SearchGameQueryParams = {
                key: API_KEY,
                page_size: arg.page_size,
                genres: arg.genres,
                platforms: arg.platforms,
                dates: '2015-01-01,2025-01-30',
                ordering: '-released',
            };

            if (arg.search) params.search = encodeURIComponent(arg.search);

            const res = await axiosInstance.get<GameApiResponse>(
                REQUEST_PATHS.GAMES,
                {params}
            );

            return res.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
