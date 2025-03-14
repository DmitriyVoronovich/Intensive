import {createSlice, isPending, isRejected} from '@reduxjs/toolkit';
import {getGameDetails, getGameScreenshots} from '../api';
import {GameResultType, Screenshots} from '../../../types';

type InitialStateType = {
    loading: boolean;
    screenshots: Screenshots | null;
    details?: GameResultType;
    error?: string;
};

const initialState: InitialStateType = {
    loading: true,
    screenshots: null
};

const setLoading = (state: InitialStateType, loading: boolean): void => {
    state.loading = loading;
};

export const gameDetailsSlice = createSlice({
    name: 'gameDetails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getGameDetails.fulfilled, (state, action) => {
                state.details = action.payload;
                setLoading(state, false);
                state.error = initialState.error;
            })
            .addCase(getGameScreenshots.fulfilled, (state, action) => {
                state.screenshots = action.payload;
                setLoading(state, false);
            })
            .addMatcher(isPending(getGameDetails, getGameScreenshots), (state) => {
                setLoading(state, true);
            })
            .addMatcher(isRejected(getGameDetails, getGameScreenshots), (state) => {
                setLoading(state, false);
            });
    },
});

