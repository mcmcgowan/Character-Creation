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
                    <button>SaveChanges</button>
                </Link>
                <Link to='/'>
                    <button>Discard and navigate back to menu</button>
                </Link>
            </div>        
        </>


    )
}

export default CreateCharacter