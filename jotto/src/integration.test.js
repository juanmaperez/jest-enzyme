import { storeFactory } from './../test/testUtils'
import { guessWord } from './actions'

describe('guessWord Action dispatcher', () => {
  const secretWord = 'party';
  const unsuccessfullGuess = 'train';

  describe('no guessed words', () => {
    let store 
    const initialState = { secretWord }
    beforeEach(() => {
      store = storeFactory(initialState)
    })
    test('updates state correctly for unsuccessful guess', () => {
      store.dispatch(guessWord(unsuccessfullGuess));
      const expectedState = {
        ...initialState,
        guessedWords: [
          { guessedWord: unsuccessfullGuess, 
          letterMatchCount: 3 }
        ],
        success: false 
      }
      const newState = store.getState()
      expect(newState).toEqual(expectedState)
    })

    test('updates state correctly for successful guess', () => {
      const successfullGuess = 'party'
      store.dispatch(guessWord(secretWord))
      const expectedState = {
        secretWord,
        guessedWords: [{
          guessedWord: successfullGuess,
          letterMatchCount: 5
        }],
        success: true
      }
      const newState = store.getState()
      expect(newState).toEqual(expectedState)
    })
  })

  describe('there are guessed words', () => {
    const guessedWords = [{ guessedword: 'agile', letterMatchCount: 1}]
    const initialState = { secretWord, guessedWords }
    let store
    beforeEach(() => {
      store = storeFactory(initialState)
    })

    test('updates state correctly for unsuccessful guess', () => {
      store.dispatch(guessWord(unsuccessfullGuess))
      const newState = store.getState()
      const expectedState = {
        secretWord,
        guessedWords : [
          ...guessedWords,
          { guessedWord: unsuccessfullGuess, letterMatchCount: 3 }
        ],
        success: false
      }
      expect(newState).toEqual(expectedState)
    })

    test('updates state correctly for successful guess', () => {
      store.dispatch(guessWord(secretWord))
      const newState = store.getState()
      const expectedState = {
        secretWord,
        guessedWords : [
          ...guessedWords,
          { guessedWord: secretWord, letterMatchCount: 5 }
        ],
        success: true
      }
      expect(newState).toEqual(expectedState)
    })
  })
})