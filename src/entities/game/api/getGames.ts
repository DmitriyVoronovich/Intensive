import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_KEY, axiosInstance, REQUEST_PATHS } from '../../../shared';
import { GameApiResponse } from '../../../types';

export const getGames = createAsyncThunk<GameApiResponse, void>(
  '@games/getGames',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get<GameApiResponse>(
        `${REQUEST_PATHS.GAMES}?key=${API_KEY}`
      );

      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
