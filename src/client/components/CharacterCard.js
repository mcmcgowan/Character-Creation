import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-router";
import { selectCharacterById } from "../services/charactersMongoSlice";

const CharacterCard = ({ characterId }) =>{
    const character = useSelector(state =>selectCharacterById(state, characterId))
    const navigate = useNavigate()

    if (character) {
        const handleEdit = () => navigate(`/view/characters/${characterId}`)

        const characterNameString = character.charName.toString()
        
        return(
            <div>
                <div>
                    Character Card Place holder
                </div>
                <div>
                    {characterNameString}
                </div>
            </div>
        )
    } else return null
}


export default CharacterCard;
