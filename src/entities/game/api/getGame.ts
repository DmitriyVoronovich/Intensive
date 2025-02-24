import {createAsyncThunk} from "@reduxjs/toolkit";
import {API_KEY, axiosInstance} from "../../../shared";
import {GameApiResponse} from "../../../types";

export const getGame = createAsyncThunk<GameApiResponse, void>(
    'slots/createSlot',
    async (_ , { rejectWithValue }) => {
        try {
            const res = await axiosInstance.get<GameApiResponse>(`/games?key=${API_KEY}`)
            return res.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)