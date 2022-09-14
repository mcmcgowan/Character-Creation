import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import BasicInfo from './BasicInfo';
import AbilityRoller from './AbilityRoller';


const CreateCharacter = props => {
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
                    <button>Navigate to Menu
                    </button>
                </Link>

            </div>        
        </>


    )
}

export default CreateCharacter