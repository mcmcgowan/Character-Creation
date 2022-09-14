import React from "react";
//import rollXDrop1 from "../reducers/scratch";

const abilities = ['str', 'dex', 'con', 'int', 'wis', 'cha'];
const abilityComps = [];
abilities.map(ele => {
    abilityComps.push(
        <div class="ability_info_containers">
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

const AbilityRoller = (props) => {
    return (
        <div class="container">
            <div>
                {abilityComps} 
            </div>
            <div class="ability_info_containers">
                <button /*onClick={rollXDrop1}*/>Roll</button>
                <div id="dice_tray">
                    <div>Dice Go Here{/*diceroll*/}</div>
                    <div class = "score_box">SUM</div>
                </div>
            </div>           
        </div>

    )
}

export default AbilityRoller;