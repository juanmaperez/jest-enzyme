import React from 'react' 
import GiveUpButton, { UnconnectedGiveUpButton } from './GiveUpButton'
import { shallow, mount } from 'enzyme'

import { ResetGame, resetGame } from './actions'
import { storeFactory, checkProps, findElement } from '../test/testUtils'


const setup = (initialState = {}, state = null) => {
  const store = storeFactory(initialState)
  const wrapper = shallow(<GiveUpButton store={store}/>).dive().dive()
  if(state) wrapper.setState(state)
  return wrapper
}


describe('<GiveUpButton/>', () => {
  describe('guessed Words list more than 0', () => {
    let wrapper
    let secretWord = 'party'
    beforeEach(() => {
      const guessedWords = [{ guessedWord: 'train', letterMatchCount: 3 }]
      wrapper = setup({ guessedWords, secretWord })
    })
    test('has not given up and it renders the button', () => {
      const initialState = wrapper.state('givenUp')
      expect(initialState).toBe(false)
    })

    test('has not given up and it renders the button', () => {
      const button = findElement(wrapper, '.give-up-btn')
      expect(button.length).toBe(1)
    })

    test('has given up and it renders alert with the correct sentence', () => {
      const button = findElement(wrapper, '.give-up-btn')
      button.simulate('click', {preventDefault(){}})
      const alert = findElement(wrapper, '.alert')
      expect(alert.text()).toBe(`The secret word was ${ secretWord }`)
    })
  })

  describe('guessed Words list 0', () => {
    test('it does not render button or alert', () => {
      const secretWord = 'party'
      const guessedWords = []
      const wrapper = setup({ guessedWords, secretWord })
      const alert = findElement(wrapper, '.alert')
      const button = findElement(wrapper, '.give-up-btn')
      expect(alert.length + button.length).toBe(0)
    })
  })

  describe('Redux props', () => {
    let wrapper
    let success
    let secretWord
    beforeEach(() => {
      secretWord = 'party';
      success = true;
      wrapper = setup({ secretWord, success })
    })
    test('has success piece of state as prop', ( )=> {
      const successProp = wrapper.instance().props.success;
      expect(successProp).toBe(success)
    })

    test('has secretWord piece of state as prop', ( )=> {
      const secretWordProp = wrapper.instance().props.secretWord;
      expect(secretWordProp).toBe(secretWord)
    })

    test('has guessedWords piece of state as prop', ( )=> {
      const guessedWordsProps = wrapper.instance().props.guessedWords;
      expect(guessedWordsProps).toEqual([])
    })


  })
})




describe('<UnconnectedGiveUpButton/>', () => {
  let wrapper
  let resetGameMock

  beforeEach(() => {
    resetGameMock = jest.fn()
    const props = {
      guessedWords : [{ guessedWord: 'train', letterMatchCount: 3 }],
      resetGameLater: resetGameMock
    }
    wrapper = shallow(<UnconnectedGiveUpButton {...props}/>)
    const button = findElement(wrapper, '.give-up-btn')
    button.simulate('click', { preventDefault(){} })
  })


  test('the givenUp state is changed after click', () => {
    expect(wrapper.instance().state.givenUp).toBe(true)
  })


  test('the resetGame button set the state as false', () => {
    const resetBtn = findElement(wrapper, '.reset-wrapper')
    resetBtn.simulate('click', {preventDefault(){}})
    expect(wrapper.instance().state.givenUp).toBe(false)
  })
})