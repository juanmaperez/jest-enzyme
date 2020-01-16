import axios from 'axios'
import { CORRECT_GUESS, GUESS_WORD, SET_SECRET_WORD } from './constants'
import { getLetterMatchCount } from './../helpers'

/**
 * Returns Redux Thunk functions that dispatches GUESS_WORD action and 
 * ( conditionally ) CORRECT_GUESS action
 * @function gueesWord
 * @param { string } guessedWord
 * @returns { function } redux thunk function 
 */

export const guessWord = guessedWord => (dispatch, getState) => {
  const secretWord = getState().secretWord
  const letterMatchCount = getLetterMatchCount(guessedWord, secretWord)
  dispatch({ 
    type: GUESS_WORD, 
    payload : { 
      guessedWord, 
      letterMatchCount 
    }
  })
  if(guessedWord === secretWord){
    dispatch({ type: CORRECT_GUESS})
  }
}

export const getSecretWord = () => (dispatch) => {
  return axios.get('http://localhost:3030')
    .then( response => {
      dispatch({
        type: SET_SECRET_WORD,
        payload: response.data
      })
    })
}
