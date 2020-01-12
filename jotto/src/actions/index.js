import { CORRECT_GUESS } from './constants'
/**
 * @function correctGuess
 * @returns { object } - Action object with type CORRECT_GUESS
 */
export const correctGuess = () => {
  return { type: CORRECT_GUESS}
}