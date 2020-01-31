import React from 'react'
import { mount } from 'enzyme'
import { findElement } from './../test/testUtils'

import GuessedWordsContext from './contexts/GuessedWordsContext'
import SuccessContext from './contexts/SuccessContext'

import Input from './Input'
import GuessedWords from './GuessedWords'

const setup = (guessedWordStrings = [], secretWord = 'party') => {
  const wrapper =  mount(
    <GuessedWordsContext.GuessedWordsProvider>
      <SuccessContext.SuccessProvider>
        <Input secretWord={ secretWord }/>
        <GuessedWords />
      </SuccessContext.SuccessProvider>
    </GuessedWordsContext.GuessedWordsProvider>
  )
  const submitBtn = findElement(wrapper, '.submit')
  const inputBox = findElement(wrapper, '.input-box')
  
  guessedWordStrings.map(word => {
    const mockEvent = {target: { value: word }}
    inputBox.simulate('change', mockEvent)
    submitBtn.simulate('click', { preventDefault: () => {} })
  })

  return [wrapper, inputBox, submitBtn]
}

// Updating the SuccessContext
// Updating the GuessedWordsContext and the guessedWords component reflexct the changes

describe('test word guesses', () => {
  let wrapper
  let inputBox
  let submitBtn
  describe('non-empty guessedWordStrings', () => {
    
    let guessedWordStrings = ['agile']

    beforeEach(() => {
      [wrapper, inputBox, submitBtn] = setup(guessedWordStrings, 'party')
    })
    
    describe('correct guess', () => {
      beforeEach(() => {
        const mockEvent = { target: { value: 'party'}}
        inputBox.simulate('change', mockEvent)
        submitBtn.simulate('click', { preventDefault : () => {}})
      })

      // Test related to SuccessContext
      test('Input component contains no children', () => {
        expect(wrapper.isEmptyRender()).toBe(false)
      })

      // Test related to GuessedWordsContext
      test('GuessedWords component table count reflects the updated guess', () => {
        const rows = findElement(wrapper, '.guessed-word')
        expect(rows.length).toBe(guessedWordStrings.length + 1) 
      })

    })
  
    describe('incorrect guess', () => {

      beforeEach(() => {
        const mockEvent = { target: { value: 'train'}}
        inputBox.simulate('change', mockEvent)
        submitBtn.simulate('click', { preventDefault : () => {}})
      })
      
      // Test related to SuccessContext
      test('input box exists', () => {
        expect(inputBox.exists()).toBe(true)
      })

      // Test related to GuessedWordsContext
      test('GuessedWords component table count reflects the updated guess', () => {
        const rows = findElement(wrapper, '.guessed-word')
        expect(rows.length).toBe(guessedWordStrings.length + 1) 
      })
    })
  })
  
})




