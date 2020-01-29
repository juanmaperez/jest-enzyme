import React from 'react'
import { shallow } from 'enzyme'
import { findElement, checkProps } from '../test/testUtils'
import Input from './Input'

const setup = (props = { secretWord: 'party'}) => {
  const wrapper = shallow(<Input {...props } />)
  return wrapper
}

describe('<Input/>', () => {
  test('props received are correct', () => {
    const expectedProps = { secretWord : 'party'}
    checkProps(Input, expectedProps)
  })

  test('it renders without errors', () => {
    const secretWord = 'party'
    const wrapper =  setup({ secretWord})
    const component = findElement(wrapper, '.input-component')
    expect(component.length).toBe(1)
  })
})

describe('state controlled input field', () => {
  let wrapper
  let mockSetCurrentGuess = jest.fn()
  
  beforeEach(() => {
    mockSetCurrentGuess.mockClear()
    React.useState = jest.fn(() => ['', mockSetCurrentGuess])
    wrapper = setup()
  })

  test('state updates with value of input box upon change', () => {
    const inputBox = findElement(wrapper, '.input')
    const mockEvent =  { target: { value: 'train'}}
    inputBox.simulate('change', mockEvent)

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train')
  })

  test('set currentGuess gets called with an empty string', () => {
    const submit = findElement(wrapper, '.submit')
    submit.simulate('click', {preventDefault: () => {}})

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('')
  })
})