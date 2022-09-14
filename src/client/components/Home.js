import React from 'react';
import { Link } from 'react-router-dom';

const Home = props => {
    return (
        <div>
            <Link to = '/create'>
                <button>Create a New Character</button>
            </Link>
            <Link to = '/view'>
                <button>View Existing Characters</button>
            </Link>
        </div>
    );
}

export default Home