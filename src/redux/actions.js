import { GET_ALL_CHARACTERS, GET_CHARACTER_DETAIL, CLEAN_CHARACTER_DETAIL } from "./action-types";
import axios from 'axios';

export const getAllCharacters = () => {
    return function(dispatch) {
        fetch('https://rickandmortyapi.com/api/character/')
        .then(response => response.json())
        .then(data => {
            return dispatch({ type: GET_ALL_CHARACTERS, payload: data.results})
        })
    }
}

export const getCharacterDetail = (id) => {
    return function(dispatch) {
        axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => response.data)
        .then(data => {
            return dispatch({ type: GET_CHARACTER_DETAIL, payload: data})
        })
    }
}

export const cleanCharacterDetail  = () => {
    return {type: CLEAN_CHARACTER_DETAIL}
}