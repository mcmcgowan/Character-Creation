import React from "react";
import { Link } from 'react-router-dom';

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

    return (
        <div class="container">
            <div class="info_containers" id="form_info">
                <form>
                <div><label for='playerName'>Player Name:</label><input type="text" id="playerName" name="playerName"></input></div>      
                <div><label for='characterName'>Character Name:</label><input type="text" id="characterName" name="characterName"></input></div>   
                <div><label for='class'>Class:</label><input type="text" id="class" name="class"></input></div>   
                <div><label for='level'>Level:</label><input type="text" id="level" name="level"></input></div>   
                <div><label for='background'>Background:</label><input type="text" id="background" name="background"></input></div>   
                <div><label for='alignment'>Player Name:</label><input type="text" name="alignment"></input></div>                 
                </form>
            </div>
            <div class="info_containers" id="race_info">
                <label for="raceDD">Race:</label>
                <select id="raceDD">
                    <option value = "" disabled selected>Select Race</option>
                    {raceComps}
                </select>
                <h4>Race Description</h4>
                <div>Blurb here from API</div>
                <h4>Racial Bonuses</h4>
                <div>Blurb here from API</div>
                <h4>Racial Feats</h4>
                <div>Blurb here from API</div>
            </div>
            <div class="info_containers" id="class_info">
                <label for="classDD">Choose Your Class:</label>
                <select id="classDD">
                    <option value = "" disabled selected>See Classes</option>
                    {classComps}
                </select>
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