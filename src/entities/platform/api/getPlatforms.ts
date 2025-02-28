import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_KEY, axiosInstance, REQUEST_PATHS } from '../../../shared';
import { PlatformApiResponse } from '../../../types';

export const getPlatforms = createAsyncThunk<PlatformApiResponse, void>(
  '@platforms/getPlatforms',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get<PlatformApiResponse>(
        `${REQUEST_PATHS.PLATFORMS}?key=${API_KEY}`
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
