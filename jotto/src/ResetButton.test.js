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
  test('it renders the button', () => {
    const success = true;
    const wrapper = setup({success})
    const button = findElement(wrapper, '.reset')
    expect(button.length).toBe(1) 
  })
})

describe('Redux props on ResetButton', () => {
  test('has success piece of state as prop', ( )=> {
    const success = true;
    const store = storeFactory({success})
    const wrapper = shallow(<ResetButton store={store} />).dive()
    const successProp = wrapper.props().success;
    expect(successProp).toBe(success)
  })

  test('guessWord action creator is a function prop', () => {
    const success = true;
    const resetGameMock = jest.fn()
    const store = storeFactory({success})
    const wrapper = shallow(<ResetButton store={store} resetGame={resetGameMock}/>).dive()

    const resetGameProp = wrapper.props().resetGame
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

  test('the function is called once', () => {
    const resetGameCount = resetGameMock.mock.calls.length
    expect(resetGameCount).toBe(1)
  })
})