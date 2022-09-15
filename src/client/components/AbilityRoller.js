import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { rollAbilities, addAbilities } from "../actions/actions";





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

    const [str, setStr] = useState('')
    const [dex, setDex] = useState('')
    const [con, setCon] = useState('')
    const [int, setInt] = useState('')
    const [wis, setWis] = useState('')
    const [cha, setCha] = useState('')

    const addAbilitiesHandler = (e) => {
        e.preventDefault();
        dispatch(addAbilities({ str, dex, con, int, wis, cha}))
    }

    //TODO Need to add API information once I figure out how to access deeply nested properties

    return (
        <div class="container">     
            <h3>Abilities</h3>
            <div>
                {/*can't use auto gen'd keys for these elements with text fields that are subscribed to state. react is rerendering and generated new keys each time so it loses focus after every change*/}
                <div class="ability_info_containers" key="strDiv">
                    <div>
                        <h4>STR:</h4>
                        <form>
                            <label for='str'>Score:</label>
                            <input type="text" name="str" value={str} onChange={(e) => setStr(e.target.value)}></input>                           
                        </form>
                    </div>
                    <div>
                        <h4>Description:</h4>
                        Blurb from Api
                    </div>
                </div>  
                <div class="ability_info_containers" key="dexDiv">
                    <div><h4>DEX:</h4>
                        <form>
                        <label for='dex'>Score:</label>
                        <input type="text" name="dex" value={dex} onChange={(e) => setDex(e.target.value)}></input>                            
                        </form>                        
                    </div>
                    <div>
                        <h4>Description:</h4>
                        Blurb from Api
                    </div>
                </div>  
                <div class="ability_info_containers" key="conDiv">
                    <div>
                        <h4>CON:</h4>
                        <form>
                            <label for='con'>Score:</label>
                            <input type="text" name="con" value={con} onChange={(e) => setCon(e.target.value)}></input>                             
                        </form>
                    </div>
                    <div>
                        <h4>Description:</h4>
                        Blurb from Api
                    </div>
                </div>  
                <div class="ability_info_containers" key="intDiv">
                    <div>
                        <h4>INT:</h4>
                        <form>
                            <label for='int'>Rolled Score:</label>
                            <input type="text" name="int" value={int} onChange={(e) => setInt(e.target.value)}></input>                              
                        </form>
                    </div>
                    <div>
                        <h4>Description:</h4>
                        Blurb from Api
                    </div>
                </div>  
                <div class="ability_info_containers" key="wisDiv">
                    <div>
                         <h4>WIS:</h4>
                        <form>
                            <label for='wis'>Score:</label>
                            <input type="text" name="wis" value={wis} onChange={(e) => setWis(e.target.value)}></input>                              
                        </form>                            
                    </div>
                    <div>
                        <h4>Description:</h4>
                        Blurb from Api
                    </div>
                </div> 
                <div class="ability_info_containers" key="chaDiv">
                    <div>
                        <h4>CHA:</h4>
                        <form>
                            <label for='cha'>Score:</label>
                            <input type="text" name="cha" value={cha} onChange={(e) => setCha(e.target.value)}></input>                             
                        </form>                        
                    </div>
                    <div>
                        <h4>Description:</h4>
                        Blurb from Api
                    </div>
                </div>  
                <button onClick={addAbilitiesHandler}>Update State</button>
            </div>
            <h4>Current roll and sum using /r4d6d1 method</h4>
            <div class="ability_info_trays">
                <button onClick={rollHandler}>Roll</button>
                <div id="dice_tray">
                    <div>{diceRollComps}</div>
                    <div class = "score_box">{scoreTray[scoreTray.length-1]}</div>
                </div>
            </div>
            <h4>Sums of rolls to distribute among abilities</h4>
            <div class="ability_info_trays">   
                <div id="score_tray">{scoreTrayComps}</div>     
            </div>   
        </div>

    )
}

export default AbilityRoller;