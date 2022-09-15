import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import { selectRace } from "../actions/actions";
import axios from "axios";

const initialState = {
    description: '',
    bonuses: '',
    feats: ''
}

const selectRaceReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(selectRace, (state, action) => {
            const currRace = action.payload;
            console.log(currRace)
            // let url = 'https://www.dnd5eapi.co/api/'
            if(currRace !== '') {
                // fetch(url+races)
                // .then((response) => response.json())
                // .then((data) => console.log(data))
            }
            else alert("Hey you need to select a race")
        })
})

export default selectRaceReducer;