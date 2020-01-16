import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import App from './App';
import { findElement, storeFactory } from './../test/testUtils'
/** 
* Setup function to create a shallowWrapper of App Component
* @function setup
* @param {object} props component props specific to this setup
* @param {object} state initial state for setup
* @returns { ShallowWrapper}
*/

const setup = ( state = {} ) => {
  const store = storeFactory(state)
  const wrapper = shallow(<App store={store} />).dive().dive()
  return wrapper
}

describe('<App />', () => {
  let wrapper
  let secretWord
  let guessedWords
  let success
  beforeEach(() => {
    secretWord = 'party';
    guessedWords = []
    success = true
    wrapper = setup({
      secretWord,
      guessedWords,
      success
    })
  })
  test('renders without an error', () => {
    expect(findElement(wrapper, '.app').length).toBe(1)
  });

  test('receives the `success` as a prop', () => {
    const successProp = wrapper.instance().props.success
    expect(successProp).toBe(success)
  })

  test('receives the `guessedWords` as a prop', () => {
    const guessedWordsProp = wrapper.instance().props.guessedWords
    expect(guessedWordsProp).toEqual(guessedWords)
  })

  test('receives the `secretWord` as a prop', () => {
    const secretWordProp = wrapper.instance().props.secretWord
    expect(secretWordProp).toBe(secretWord)
  })

  test('it receives getSecretWord prop as function', () => {
    const getSecretWordProp = wrapper.instance().props.getSecretWord
    expect(getSecretWordProp).toBeInstanceOf(Function)
  })
})


