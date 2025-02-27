import { createSlice } from "@reduxjs/toolkit";
import { getPlatforms } from "../api";
import { PlatformResultType } from "../../../types";

type InitialStateType = {
    platforms: PlatformResultType[] | [],
    loading: boolean
}

const initialState: InitialStateType = {
    platforms: [],
    loading: false
}

const platformSlice = createSlice({
    name: "platforms",
    initialState,
    reducers: {},
    extraReducers: (builder) =>  {
        builder
            .addCase(getPlatforms.pending, (state) => {
                state.loading = true
            })
            .addCase(getPlatforms.fulfilled, (state, action) => {
                state.platforms = action.payload.results
                state.loading = false
            })
            .addCase(getPlatforms.rejected, (state) => {
                state.loading = false
            })
    },
})

export { platformSlice }