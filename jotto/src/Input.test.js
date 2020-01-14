import React from 'react'
import { shallow } from 'enzyme'

import { findElement, storeFactory }from './../test/testUtils'
import Input from './Input'

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
  
  describe('update state', () => {
  
  })
})
