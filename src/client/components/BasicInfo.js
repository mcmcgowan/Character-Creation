import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';

import { updateBasicCharacter } from "../actions/characterActions";

//these should be dynamically pulled from the api in case more classes or races were added to SRD
const classes = ['barbarian', 'bard', 'cleric', 'druid', 'fighter', 'monk', 'paladin', 'ranger', 'rougue', 'sorcerer', 'warlock', 'wizard'];
const classComps = [];
classes.map(ele => {
    classComps.push(<option value={ele}>{ele}</option>);
});

const races= ['dragonborn', 'dwarf', 'elf', 'gnome', 'half-elf', 'half-orc', 'halfling', 'human', 'tiefling'];
const raceComps = [];
races.map(ele => {
    raceComps.push(<option value={ele}>{ele}</option>);
});


const BasicInfo = props => {
    const [playerName, setPlayerName] = useState('');
    const [characterName, setCharacterName] = useState('');
    const [race, setRace] = useState('');
    const [className, setClassName] = useState('');
    const [level, setLevel] = useState('');
    const [background, setBackground] = useState('');
    const [alignment, setAlignment] = useState('');

    const dispatch = useDispatch();

    const addCharacterInfoHandler = (e) => {
        e.preventDefault();
        dispatch(updateBasicCharacter({
            playerName,
            characterName,
            className,
            race,
            level,
            background,
            alignment
        }))
    }

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
                    <input type="text" id="race" name="race" value={race} onChange={(e) => setRace(e.target.value)}></input>
                </div> 
                <div>
                    <label for='class'>Class:</label>
                    <input type="text" id="class" name="class" value={className} onChange={(e) => setClassName(e.target.value)}></input>
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
                <button onClick={addCharacterInfoHandler}>Update State</button>
            </div>
            <div class="info_containers" id="race_info">
                <label for="raceDD">Race:</label>
                <select id="raceDD">
                    <option value = "" disabled selected>Select Race</option>
                    {raceComps}
                </select>
                <button>Apply Changes</button>
                <h4>Race Description</h4>
                <div>Blurb here from API</div>
                <h4>Racial Bonuses</h4>
                <div>Blurb here from API</div>
                <h4>Racial Feats</h4>
                <div>Blurb here from API</div>
            </div>
            <div class="info_containers" id="class_info">
                <label for="classDD">Class:</label>
                <select id="classDD">
                    <option value = "" disabled selected>See Classes</option>
                    {classComps}
                </select>
                <button>Apply Changes</button>
                <h4>Class Description</h4>
                <div>Blurb here from API</div>
                <h4>Preferred Abilities</h4>
                <div>Blurb here from API</div>
                <h4>Hit Dice</h4>
                <div>Blurb here from API</div>
                <h4>Proficiency Bonuses</h4>
                <div>Blurb here from API</div>
            </div>
        </div>
    )
}

export default BasicInfo;