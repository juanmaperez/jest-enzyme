import { GUESS_WORD } from './../actions/constants'


/**
 * @function guessedWordReducer
 * @param { array } state state of the words guessing the secret word
 * @param { object } action contains the action type and the payload with the next guessed word
 * @returns { array } returns the array of guessed words
 */

export default (state = [], { type, payload }) => {
  switch(type) {
    case GUESS_WORD:
      return [...state, payload]
    default:
      return state;
  }
}