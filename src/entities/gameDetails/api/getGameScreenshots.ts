import {createAsyncThunk} from "@reduxjs/toolkit";
import {Screenshots} from "../../../types";
import {API_KEY, axiosInstance, REQUEST_PATHS} from "../../../shared";

export const getGameScreenshots = createAsyncThunk<Screenshots, string>(
    '@games/getGameScreenshots',
    async (id, { rejectWithValue }) => {
        try {
            const res = await axiosInstance.get<Screenshots>(
                `${REQUEST_PATHS.GAMES}/${id}/screenshots?key=${API_KEY}`
            );

            return res.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);