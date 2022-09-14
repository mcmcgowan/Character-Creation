import { createReducer } from "@reduxjs/toolkit";

import { updateBasicCharacter } from "../actions/actions";

const initialState = {
    playerName: '',
    characterName: '',
    race: 'Please Select in Race Box Below',
    className: 'Please Select in Class Box Below',
    level: '',
    background: '',
    alignment: ''
}

const basicCharacterReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(updateBasicCharacter, (state, action) => {
            state.playerName = action.payload.playerName;
            state.characterName = action.payload.characterName;
            state.race = action.payload.race;
            state.className = action.payload.className;
            state.level = action.payload.level;
            state.background = action.payload.background;
            state.alignment = action.payload.alignment
        })
})

export default basicCharacterReducer;