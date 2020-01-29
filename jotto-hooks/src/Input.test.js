import React from 'react'
import { shallow } from 'enzyme'
import { findElement } from '../test/testUtils'
import Input from './Input'

const setup = (props = {}) => {
  const wrapper = shallow(<Input {...props } />)
  return wrapper
}

describe('<Input/>', () => {
  test('it renders without errors', () => {
    const wrapper =  setup()
    const component = findElement(wrapper, '.input-component')
    expect(component.length).toBe(1)
  })
})