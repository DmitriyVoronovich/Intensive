import { createAsyncThunk } from '@reduxjs/toolkit';
import { GameApiResponse } from '../../../types';
import { API_KEY, axiosInstance, REQUEST_PATHS } from '../../../shared';

type ArgType = {
  id?: string;
  search: string;
  platforms?: string | string[];
  genres?: string | string[];
  page?: number;
};

export const getSearchGames = createAsyncThunk<GameApiResponse, ArgType>(
  '@games/getSearchGames',
  async (arg, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get<GameApiResponse>(
        REQUEST_PATHS.GAMES,
        {
          params: {
            key: API_KEY,
            id: arg.id,
            search: encodeURIComponent(arg.search),
            platforms: arg.platforms,
            genres: arg.genres,
            dates: '2015-01-01,2025-01-30',
            ordering: '-released',
          },
        }
      );

      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
