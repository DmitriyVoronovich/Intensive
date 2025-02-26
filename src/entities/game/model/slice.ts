import {createSlice} from "@reduxjs/toolkit";
import {getGames} from "../api";
import {GameResultType} from "../../../types";



type InitialStateType= {
    games: GameResultType[] | []
    loading: boolean
}

const initialState: InitialStateType  = {
    games: [],
    loading: false
}

const gameSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getGames.pending, (state) => {
                state.loading = true
            })
            .addCase(getGames.fulfilled, (state, action) => {
                state.games = action.payload.results
                state.loading = false
            })
            .addCase(getGames.rejected, (state) => {
                state.loading = false
            })
    },
})

export { gameSlice }