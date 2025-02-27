import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_KEY, axiosInstance, REQUEST_PATHS } from "../../../shared";
import { GenreApiResponse } from "../../../types";

export const getGenres = createAsyncThunk<GenreApiResponse, void>(
    '@genres/getGenres',
    async (_, { rejectWithValue }) => {
        try {
            const res = await axiosInstance.get<GenreApiResponse>(`${REQUEST_PATHS.GENRES}?key=${API_KEY}`)
            return res.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)