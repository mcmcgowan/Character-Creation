import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import bookReducer from './reducers/basicCharacterReducer';
import { updateBasicCharacter } from './actions/characterActions';
import basicCharacterReducer from './reducers/basicCharacterReducer';

const store = configureStore({
    reducer: {charInfo: basicCharacterReducer }
});
export default store;