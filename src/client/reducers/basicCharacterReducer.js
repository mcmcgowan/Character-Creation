import { createReducer } from "@reduxjs/toolkit";
//import { addBook, deleteBook } from "../actions/bookActions";
import { updateBasicCharacter } from "../actions/characterActions";

const initialState = {
    playerName: '',
    characterName: '',
    race: '',
    className: '',
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

// const bookReducer = createReducer(initialState, (builder) => {
//     builder
//         .addCase(addBook, (state, action) => {
//             state.books.push(action.payload)
//         })
//         .addCase(deleteBook, (state, action) => {
//             state.books = state.books.filter(book !== action.payload.id)
//         })
// })

export default basicCharacterReducer;