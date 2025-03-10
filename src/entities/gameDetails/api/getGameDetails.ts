import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_KEY, axiosInstance, REQUEST_PATHS } from '../../../shared';
import { GameDetails } from '../../../types';

export const getGameDetails = createAsyncThunk<GameDetails, string>(
  '@games/getGameDetails',
  async (id, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get<GameDetails>(
        `${REQUEST_PATHS.GAMES}/${id}?key=${API_KEY}`
      );

      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
