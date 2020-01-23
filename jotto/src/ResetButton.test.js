import React from 'react'
import { shallow } from 'enzyme'
import ResetButton, { UnconnectedResetButton } from './ResetButton'
import { findElement, storeFactory } from '../test/testUtils'

const setup = (state = {}) => {
  const store = storeFactory(state)
  const wrapper = shallow(<ResetButton store={store} />).dive().dive()
  return wrapper
}

describe('<ResetButton />', () => {
  describe('SecretWord not guessed', () => {
    test('it renders the button', () => {
      const success = true;
      const wrapper = setup({success})
      const button = findElement(wrapper, '.reset')
      expect(button.length).toBe(1) 
    })
  })

  describe('SecretWord guessed', () => {
    test('it doesnt renders the button', () => {
      const success = false;
      const wrapper = setup({success})
      const button = findElement(wrapper, '.reset')
      expect(button.length).toBe(0) 
    })
  })
})

describe('Redux props on ResetButton', () => {
  test('has success piece of state as prop', ( )=> {
    const success = true;
    const wrapper = setup({ success })
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success)
  })

  test('guessWord action creator is a function prop', () => {
    const success = true;
    const wrapper = setup({ success })
    const resetGameProp = wrapper.instance().props.resetGame
    expect(resetGameProp).toBeInstanceOf(Function)
  })
})


describe('<UnconnectedResetButton />', () => {
  let wrapper
  let button
  let resetGameMock
  beforeEach(() => {
    resetGameMock = jest.fn()
    const success = true;
    const props = {
      success,
      resetGame: resetGameMock
    }
    wrapper = shallow(<UnconnectedResetButton {...props}/>)
    button = findElement(wrapper, '.reset')
    button.simulate('click', { preventDefault(){}})
  })

  test('after click the button disappears', () => {
    const resetGameCount = resetGameMock.mock.calls.length
    expect(resetGameCount).toBe(1)
  })
})