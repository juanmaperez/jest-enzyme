import React from 'react';
import Enzyme, { shallow, ShallowWrapper } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16'
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter()})

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

/**
 * Return shallowWrapper containing node(s) with the node attribute, class or id given
 * @function findElement
 * @param { ShallowWrapper } wrapper wrapper element
 * @param { string} value value of the class, id or attribute of the element
 * @returns { ShallowWrapper }
 */

const findElement = (wrapper, value) => wrapper.find(value)


test('renders without an error', () => {
  const wrapper = setup()
  expect(findElement(wrapper, '.app').length).toBe(1)
});

test('renders increment button', () => {
  const wrapper = setup()
  expect(findElement(wrapper, '.increment').length).toBe(1)
});

test('renders decrement button', () => {
  const wrapper = setup()
  expect(findElement(wrapper, '.decrement').length).toBe(1)
})

test('renders a counter display', () => {
  const wrapper = setup()
  expect(findElement(wrapper, '.display').length).toBe(1)
});

test('counter starts at 0', () => {
  const wrapper = setup()
  const initalCounter = wrapper.state('counter')
  expect(initalCounter).toBe(0)
});

test('onClick increment the counter add 1', () => {
  const counter = 7
  const wrapper = setup(null, {counter})
  const button = findElement(wrapper, '.increment')
  button.simulate('click')
  expect(wrapper.state('counter')).toBe(8)
});

test('onClick increment the error message dissapear', () => {
  const counter = 0
  const wrapper = setup(null, {counter})
  const button = findElement(wrapper, '.increment')
  button.simulate('click')
  expect(findElement(wrapper, '.error').length).toBe(0)
});

test('onClick decrement the counter substract 1', () => {
  const counter = 5
  const wrapper = setup(null, {counter})
  const button = findElement(wrapper, '.decrement')
  button.simulate('click')
  expect(wrapper.state('counter')).toBe(4)
})

test('counter value is never less than zero', () => {
  const counter = 0
  const wrapper = setup(null, {counter})
  const button = findElement(wrapper, '.decrement')
  button.simulate('click')
  expect(wrapper.state('counter')).toBe(0)
})

test('displays error', () => {
  const counter = 0
  const wrapper = setup(null, {counter})
  const button = findElement(wrapper, '.decrement')
  button.simulate('click')
  expect(findElement(wrapper, '.error').length).toBe(1)
})