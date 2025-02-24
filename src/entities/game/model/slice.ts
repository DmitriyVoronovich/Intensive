import {createSlice} from "@reduxjs/toolkit";
import {getGame} from "../api";
import {GameResultType} from "../../../types";



type InitialStateType= {
    game: GameResultType[] | []
    loading: boolean
}

const initialState: InitialStateType  = {
    game: [],
    loading: false
}

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getGame.pending, (state) => {
                state.loading = true
            })
            .addCase(getGame.fulfilled, (state, action) => {
                state.game = action.payload.results
                state.loading = false
            })
            .addCase(getGame.rejected, (state) => {
                state.loading = false
            })
    },
})

export { gameSlice }