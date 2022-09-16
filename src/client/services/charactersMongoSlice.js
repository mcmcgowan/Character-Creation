import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { mongoApi } from "./mongo";

const charactersAdapter = createEntityAdapter({})

const initialState = charactersAdapter.getInitialState()

export const charactersMongoSlice = mongoApi.injectEndpoints({
    endpoints: builder => ({
        getCharacters: builder.query({
            query: () => '/view',
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError
            },
            keepUnusedDataFor: 5,
            transformResponse: responseData => {
                const loadedCharacters = responseData.map(character => {
                    character.id = character._id
                    return character
                });
                return charactersAdapter.setAll(initialState, loadedCharacters)
            },
            provideTags: (result, error, arg) =>{
                if(result?.ids) {
                    return [
                        {type: 'User', id: 'LIST'},
                        ...result.ids.map(id => ({type: 'USER', id}))
                    ]
                } else return [{type: 'User', id: 'LIST'}]
            }            
        })
    })
})

export const { useGetCharactersQuery } = charactersMongoSlice

export const selectCharactersResult = charactersMongoSlice.endpoints.getCharacters.select()

const selectCharactersData = createSelector(
    selectCharactersResult,
    charactersResult => charactersResult.data 
)

export const {
    selectAll: selectAllCharacters,
    selectById: selectCharacterById,
    selectIds: selectCharacterIds
} = charactersAdapter.getSelectors(state => selectCharactersData(state) ?? initialState) 