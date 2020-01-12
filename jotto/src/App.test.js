import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import App from './App';
import { findElement } from './../test/testUtils'
/** 
* Setup function to create a shallowWrapper of App Component
* @function setup
* @param {object} props component props specific to this setup
* @param {object} state initial state for setup
* @returns { ShallowWrapper}
*/

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />)
  if(state) wrapper.setState(state)
  return wrapper
}


test('renders without an error', () => {
  const wrapper = setup()
  expect(findElement(wrapper, '.app').length).toBe(1)
});