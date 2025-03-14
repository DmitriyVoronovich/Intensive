import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_KEY, axiosInstance, REQUEST_PATHS } from '../../../shared';
import { GameResultType } from '../../../types';

export const getGameDetails = createAsyncThunk<GameResultType, string>(
  '@games/getGameDetails',
  async (id, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get<GameResultType>(
        `${REQUEST_PATHS.GAMES}/${id}?key=${API_KEY}`
      );

      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
