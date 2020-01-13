import React from 'react'
import { shallow } from 'enzyme'

import { findElement, storeFactory }from './../test/testUtils'
import Input from './InputField'

const setup = (initialState = {}) => {
  const store = storeFactory(initialState)
  const wrapper = shallow(<Input store={store} />)
  
}

setup()


test('', () => {

})
  
// describe('renders', () => {
//   describe('word has not been guessed', ()=> {

//     test('renders component without errors', () => {})

//     test('renders input box', () => {})

//     test('renders submit button', () => {})
  
//   })

//   describe('word has not been guessed', () => {
//     test('renders component without errors', () => {})

//     test('does not renders input box', () => {})

//     test('does not renders submit button', () => {})
//   })
// })

// describe('update state', () => {

// })