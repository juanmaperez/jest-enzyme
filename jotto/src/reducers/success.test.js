import { CORRECT_GUESS } from './../actions/constants'
import success from './success'

describe('SuccessReducer', () => {
  test('returns true when the action is CORRECT_GUESS', () => {
    const newState = success( undefined, { type : CORRECT_GUESS})
    expect(newState).toBe(true)
  })

  test('returns false when there is no action', () => {
    const newState = success(undefined, {})
    expect(newState).toBe(false)
  })
})