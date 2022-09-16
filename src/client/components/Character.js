import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom'

import { useGetCharactersQuery } from '../services/charactersMongoSlice';
//import CharacterCard from './CharacterCard';

const Character = props => {

    const {
        data: characters, 
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetCharactersQuery()

    // let content

    // if (isLoading) content = <p>Loading...</p>
    // if (isError) {
    //     content = <p className="errmsg">{error?.data?.message} </p>
    // }

    // if (isSuccess){
    //     const { ids } = characters

    //     const tableContent = ids?.length
    //         ? ids.map(characterId => <CharacterCard key={characterId}/>)
    //         : null
    // }

    content = (
        <div>
            {tableContent}
            <Link to='/'>
                <div>{characters}</div>
                <button>Navigate to Menu</button>
            </Link>
        </div>
    )
    // return (
    //     <div>
    //          <Link to='/'>
    //             <button>Navigate to Menu</button>
    //         </Link>
    //     </div>
    // )
}

export default Character