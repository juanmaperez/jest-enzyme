import { CORRECT_GUESS, GUESS_WORD } from './constants'

/**
 * Returns Redux Thunk functions that dispatches GUESS_WORD action and 
 * ( conditionally ) CORRECT_GUESS action
 * @function gueesWord
 * @param { string } guessedWord
 * @returns { function } redux thunk function 
 */
export const guessWord = guessedWord => (dispatch, getState) => {

}