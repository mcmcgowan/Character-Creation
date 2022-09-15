import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { rollAbilities } from "../actions/actions";





const AbilityRoller = (props) => {
    const [roll, setRoll] = useState('');

    const dispatch = useDispatch();

    const rollHandler = (e) =>{
        e.preventDefault();
        dispatch(rollAbilities({roll}))
    }

    const scoreTray = useSelector((state) => state.rolls.rolls)
    const scoreTrayComps = scoreTray.map(ele => <div class="dice_totals">{ele}</div>)

    const lastRoll = useSelector((state) => state.rolls.lastRoll)
    const diceRollComps = lastRoll.map(ele => <div class ="dice_box">{ele.value}</div>)
    
    const abilities = ['str', 'dex', 'con', 'int', 'wis', 'cha'];
    const abilityComps = [];

    abilities.map(ele => {
        abilityComps.push(
            <div class="ability_info_containers" key={nanoid()}>
                <div>
                    <div>{ele.toUpperCase()}</div>
                    <div class="score_box">SCORE</div>
                    <div>Mod</div>          
                </div>
                <div>
                    <h4>Ability Description</h4>
                    Blurb from Api
                </div>
            </div>        
        );
    });

    return (
        <div class="container">
            <div>
                {abilityComps} 
            </div>
            <div class="ability_info_containers">
                <button onClick={rollHandler}>Roll</button>
                <div id="dice_tray">
                    <div>{diceRollComps}</div>
                    <div class = "score_box">{scoreTray[scoreTray.length-1]}</div>
                </div>

            </div>
            <div class="ability_info_containers">   
                <div id="score_tray">{scoreTrayComps}</div>     
            </div>   
        </div>

    )
}

export default AbilityRoller;