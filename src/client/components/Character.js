import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom'

const Character = props => {
    return (
        <div>
             <Link to='/'>
                <button>Navigate to Menu</button>
            </Link>
        </div>
    )
}

export default Character