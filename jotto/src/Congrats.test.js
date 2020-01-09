import React from 'react'
import Enzyme, { shallow, ShallowWrapper } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import { findElement } from './test/testUtils'

import Congrats from './Congrats'

Enzyme.configure({adapter: new EnzymeAdapter()})
/** 
 * Factory function to create a ShallowWrapper for the Congrats Component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper} 
 */
const setup = (props = {}) => {
  return shallow(<Congrats {...props}/>)
}

test('renders without error', ()=> {
  const wrapper = setup()
  const component = findElement(wrapper, '.congrats')
  expect(component.length).toBe(1)
})

test('renders no text when success prop is false', () => {
  const wrapper = setup({success: false})
  const component = findElement(wrapper, '.congrats')
  expect(component.text()).toBe('')
})

test('renders non-empty congrats message when success prop is true', () => {
  const wrapper = setup({success: true})
  const component = findElement(wrapper, '.message')
  expect(component.text().length).not.toBe(0)
})