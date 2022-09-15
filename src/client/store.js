import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';

import basicCharacterReducer from './reducers/basicCharacterReducer';
import rollAbilitiesReducer from './reducers/rollAbilitiesReducer';
import selectRaceReducer from './reducers/selectRaceReducer';

const store = configureStore({
    reducer: {
        charInfo: basicCharacterReducer,
        rolls: rollAbilitiesReducer,
        race: selectRaceReducer,
    },
});
export default store;