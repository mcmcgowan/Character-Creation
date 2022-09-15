import { createReducer } from "@reduxjs/toolkit";

import { addAbilities } from "../actions/actions";

const initialState = {
    str: '',
    dex: '',
    con: '',
    int: '',
    wis: '',
    cha: ''
}

const addAbilitiesReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(addAbilities, (state, action) => {
            state.str = action.payload.str;
            state.dex = action.payload.dex;
            state.con = action.payload.con;
            state.int = action.payload.int;
            state.wis = action.payload.wis;
            state.cha = action.payload.cha;
        })
})

export default addAbilitiesReducer;