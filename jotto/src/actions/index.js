import { CORRECT_GUESS, GUESS_WORD } from './constants'
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