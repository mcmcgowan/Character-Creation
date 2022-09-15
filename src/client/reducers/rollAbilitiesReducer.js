import { createReducer } from "@reduxjs/toolkit";
import { rollAbilities } from "../actions/actions";

import rollXDrop1 from "./scratch";

const initialState = {
    rolls: [],
    lastRoll: []
}

const rollAbilitiesReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(rollAbilities, (state, action) => {
            if(state.rolls.length < 6) {
              //state.rolls.push(rollXDrop1(4,6)) 
              const roll = rollXDrop1(4,6);
              state.rolls.push(roll.sum); 
              state.lastRoll = roll.dice;
            } 
            else alert("Sorry you've already rolled all your dice")
        })
})

export default rollAbilitiesReducer;