import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';


import basicCharacterReducer from './reducers/basicCharacterReducer';
import rollAbilitiesReducer from './reducers/rollAbilitiesReducer';
import addAbilitiesReducer from './reducers/addAbilitiesReducer';
import { dndApi } from './services/dnd';

export const store = configureStore({
    reducer: {
        charInfo: basicCharacterReducer,
        rolls: rollAbilitiesReducer,
        aScores: addAbilitiesReducer,
        [dndApi.reducerPath]: dndApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(dndApi.middleware),
    
})

setupListeners(store.dispatch)