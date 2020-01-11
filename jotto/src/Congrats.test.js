import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import { findElement, checkProps } from './test/testUtils'

import Congrats from './Congrats'

const defaultProps = { success: false }
/** 
 * Factory function to create a ShallowWrapper for the Congrats Component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper} 
 */
const setup = (props = {}) => {
  const setupProps = {...defaultProps, ...props}
  return shallow(<Congrats {...setupProps}/>)
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


test('does not throw warning with expected props', () => {
  const expectedProps = { success: false }
  checkProps(Congrats, expectedProps)
})