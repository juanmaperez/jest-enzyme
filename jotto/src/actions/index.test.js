import { correctGuess} from './'
import { CORRECT_GUESS } from './constants'
describe('correctGuess', () => {
  test('returns and action with type CORRECT_GUESS', () => {
    const action = correctGuess()
    expect(action).toEqual({ type: CORRECT_GUESS})
  })
})