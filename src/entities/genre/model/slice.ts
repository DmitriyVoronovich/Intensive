import { createSlice } from "@reduxjs/toolkit";
import { getGenres } from "../api";
import { GenreResultType } from "../../../types";

type InitialStateType = {
    genres: GenreResultType[] | [],
    loading: boolean
}

const initialState: InitialStateType = {
    genres: [],
    loading: false
}

const genreSlice = createSlice({
    name: "genres",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getGenres.pending, (state) => {
                state.loading = true
            })
            .addCase(getGenres.fulfilled, (state, action) => {
                state.genres = action.payload.results
                state.loading = false
            })
            .addCase(getGenres.rejected, (state) => {
                state.loading = false
            })
    },
})

export { genreSlice }