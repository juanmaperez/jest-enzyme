import React from 'react'
import { shallow } from 'enzyme'
import { findElement, checkProps } from '../test/testUtils'
import Input from './Input'

const setup = (props = {}) => {
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