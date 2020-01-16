import moxios from 'moxios';
import { storeFactory } from './../../test/testUtils'
import { getSecretWord } from './'

describe('getSecretWord action creator', () => {
  beforeEach(() => {
    moxios.install()
  })

  afterEach(() => {
    moxios.uninstall()
  })

  test('adds response word to state', () => {
      const secretWord = 'party'
      const store = storeFactory()

      moxios.wait(() => {
        const request = moxios.requests.mostRecent()
        request.respondWith({
          status: 200,
          response: secretWord
        })
      })
      // it's important return the dispatch promise for testing no completing 
      // until the promise resolves since we need what the expect function returns
      return store.dispatch(getSecretWord()).then(() => {
        const newState = store.getState()
        expect(newState.secretWord).toBe(secretWord)
      })
  })
})