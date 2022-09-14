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
        <div>
            <div>
                <form>
                <div><label for='playerName'>Player Name:</label><input type="text" id="playerName" name="playerName"></input></div>      
                <div><label for='characterName'>Character Name:</label><input type="text" id="characterName" name="characterName"></input></div>   
                <div><label for='class'>Class:</label><input type="text" id="class" name="class"></input></div>   
                <div><label for='level'>Level:</label><input type="text" id="level" name="level"></input></div>   
                <div><label for='background'>Player Name:</label><input type="text" id="background" name="background"></input></div>   
                <div><label for='alignment'>Player Name:</label><input type="text" name="alignment"></input></div>                 
                </form>
            </div>
            <div>
                <label for="raceDD">Choose Your Race:</label>
                <select id="raceDD">
                    {raceComps}
                </select>
                <h3>Race Description</h3>

            </div>
            <div>
                <label for="classDD">Choose Your Class:</label>
                <select id="classDD">
                    {classComps}
                </select>
            </div>
            <Link to='/view'>
                <button>SaveChanges</button>
            </Link>
            <Link to='/'>
                <button>Discard and navigate back to menu</button>
            </Link>
        </div>
    )
}

export default BasicInfo;