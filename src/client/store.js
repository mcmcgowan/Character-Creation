import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import basicCharacterReducer from './reducers/basicCharacterReducer';
import rollAbilitiesReducer from './reducers/rollAbilitiesReducer';

const store = configureStore({
    reducer: {
        charInfo: basicCharacterReducer,
        rolls: rollAbilitiesReducer
    }
});
export default store;