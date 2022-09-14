import React from "react";



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
        {abilityComps}            
        </div>

    )
}

export default AbilityRoller;