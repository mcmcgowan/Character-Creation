import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { selectRace, updateBasicCharacter } from "../actions/actions";
import { useGetRaceDataQuery, useGetClassDataQuery } from "../services/dnd";


const BasicInfo = props => {

    const [playerName, setPlayerName] = useState('');
    const [characterName, setCharacterName] = useState('');
    const [race, setRace] = useState('');
    const [className, setClassName] = useState('');
    const [level, setLevel] = useState('');
    const [background, setBackground] = useState('');
    const [alignment, setAlignment] = useState('');

    const raceField = useSelector((state) => state.charInfo.race)
    const classField = useSelector((state) => state.charInfo.className)

    const dispatch = useDispatch();

    const addCharacterInfoHandler = (e) => {
        e.preventDefault();
        dispatch(updateBasicCharacter({
            playerName,
            characterName,
            race,
            className,
            level,
            background,
            alignment
        }))
    }

    //TODO Currently having issues with accessing specific data due to response being deeply nested object. need to handle somehow
    const { data: raceData, error: raceError, isLoading: raceIsLoading } = useGetRaceDataQuery(race);
    let raceDataStr = JSON.stringify(raceData);
    const { data: classData, error: classError, isLoading: classIsLoading } = useGetClassDataQuery(className);
    let classDataStr = JSON.stringify(classData)
    
    
    //these should be dynamically pulled from the api in case more classes or races were added to SRD
    const classes = ['barbarian', 'bard', 'cleric', 'druid', 'fighter', 'monk', 'paladin', 'ranger', 'rougue', 'sorcerer', 'warlock', 'wizard'];
    const classComps = [];
    classes.map(ele => {
        classComps.push(<option value={ele} key={nanoid()}>{ele}</option>);
    });

    const races= ['dragonborn', 'dwarf', 'elf', 'gnome', 'half-elf', 'half-orc', 'halfling', 'human', 'tiefling'];
    const raceComps = [];
    races.map(ele => {
        raceComps.push(<option value={ele} key={nanoid()}>{ele}</option>);
    });
    
    return (
        <div class="container">
            <div class="info_containers" id="form_info">
                <form>
                <div>
                    <label for='playerName'>Player Name:</label>
                    <input type="text" id="playerName" name="playerName" value={playerName} onChange={(e) => setPlayerName(e.target.value)}></input>
                </div>     

                <div>
                    <label for='characterName'>Character Name:</label>
                    <input type="text" id="characterName" name="characterName" value={characterName} onChange={(e) => setCharacterName(e.target.value)}></input>
                </div>   
                <div>
                    <label for='race'>Race:</label>
                    <div id="raceField" onChange={(e) => setRace(e.target.value)}>{raceField} </div>
                </div> 
                <div>
                    <label for='class'>Class:</label>
                    <div id="classField" onChange={(e) => setClassName(e.target.value)}>{classField}</div>
                </div>   
                <div>
                    <label for='level'>Level:</label>
                    <input type="text" id="level" name="level" value={level} onChange={(e) => setLevel(e.target.value)}></input>
                </div>   
                <div>
                    <label for='background'>Background:</label>
                    <input type="text" id="background" name="background" value={background} onChange={(e) => setBackground(e.target.value)}></input>
                </div>   
                <div>
                    <label for='alignment'>Alignment:</label>
                    <input type="text" id="alignment" name="alignment" value={alignment} onChange={(e) => setAlignment(e.target.value)}></input>
                </div>                 
                </form>
            </div>

            <div class="info_containers" id="race_info">
                <label for="raceDD">Race:</label>
                <select id="raceDD" value={race} onChange={(e) => setRace(e.target.value)}>
                    <option value = "">Select Race</option>
                    {raceComps}
                </select>
                <h4>Race Description</h4>
                <div>{raceDataStr}</div>
            </div>
            <div class="info_containers" id="class_info">
                <label for="classDD">Class:</label>
                <select id="classDD" value={className} onChange={(e) => setClassName(e.target.value)} >
                    <option value = "">Select Classes</option>
                    {classComps}
                </select>
                <h4>Class Description</h4>
                <div>{classDataStr}</div>
            </div>
            <button onClick={addCharacterInfoHandler}>Update State</button>
        </div>
    )
}

export default BasicInfo;