import React from 'react'
import { shallow } from 'enzyme'

import { findElement, storeFactory }from './../test/testUtils'
import Input, { UnconnectedInput } from './Input'

const setup = (initialState = {}) => {
  const store = storeFactory(initialState)
  const wrapper = shallow(<Input store={store} />).dive().dive()
  return wrapper;
}

setup()

describe('Input', () => {
  describe('render', () => {
    let wrapper;
    let initialState;
    describe('word has not been guessed', ()=> {
      beforeEach(() => {
        initialState = { success: false}
        wrapper = setup(initialState)
      })
      test('renders component without errors', () => {
        const component = findElement(wrapper, '.input-wrapper')
        expect(component.length).toBe(1)
      })
  
      test('renders input box', () => {
        const input = findElement(wrapper, '.input')
        expect(input.length).toBe(1)
      })
  
      test('renders submit button', () => {
        const button = findElement(wrapper, '.submit-btn')
        expect(button.length).toBe(1)
      })
    
    })
  
    describe('word has been guessed', () => {
      beforeEach(() => {
        initialState = { success: true }
        wrapper= setup(initialState)
      })
      test('renders component without errors', () => {
        const component = findElement(wrapper, '.input-wrapper')
        expect(component.length).toBe(1)
      })
  
      test('does not renders input box', () => {
        const input = findElement(wrapper, '.input')
        expect(input.length).toBe(0)
      })
  
      test('does not renders submit button', () => {
        const button = findElement(wrapper, '.submit-btn')
        expect(button.length).toBe(0)
      })
    })
  })
  
  describe('Redux props', () => {
    test('has success piece of state as prop', ( )=> {
      const success = true;
      const wrapper = setup({ success })
      const successProp = wrapper.instance().props.success;
      expect(successProp).toBe(success)
    })

    test('guessWord action creator is a function prop', () => {
      const wrapper = setup()
      const guessWordProp = wrapper.instance().props.guessWord
      expect(guessWordProp).toBeInstanceOf(Function)
    })
  })
})

describe('<UnconnectedInput />', () => {
  let guessWordMock
  let wrapper
  let guessedWord = 'train'
  beforeEach(() => {
    guessWordMock = jest.fn()

    const props = {
      guessWord: guessWordMock,
      success: false
    }
    // set up app Input component with guessWordMock as the guessWord prop
    wrapper = shallow(<UnconnectedInput {...props} />)
    
    wrapper.setState({currentGuess: guessedWord})

    // find the button an simulate the click
    const button = findElement(wrapper, '.submit-btn')
    button.simulate('click', { preventDefault(){}})

  })
  test('guessWord function is called on click button', () => {  
    // check to see if mock function ran once  
    const guessWordCallsCount = guessWordMock.mock.calls.length
    expect(guessWordCallsCount).toBe(1)
  })


  test('guessWord function is called with the value of the input box', () => {
    const guessMock = guessWordMock.mock.calls[0][0]
    expect(guessMock).toBe(guessedWord)
  })

  test('input box clears after on submit', () => {
    expect(wrapper.state('currentGuess')).toBe('')
  })
})
