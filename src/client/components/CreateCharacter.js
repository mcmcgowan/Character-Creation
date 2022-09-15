import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import BasicInfo from './BasicInfo';
import AbilityRoller from './AbilityRoller';


const CreateCharacter = props => {

    //TODO create reducer to send charInfo and aScore state to DB using Character Schema
    return (
        <>
            <div class="wrapper">
                <BasicInfo/>
                <AbilityRoller/>

            </div>
            <div>
                <Link to='/view'>
                    <button>Submit Character</button>
                </Link>
                <Link to='/'>
                    <button>Navigate to Menu</button>
                </Link>

            </div>        
        </>


    )
}

export default CreateCharacter