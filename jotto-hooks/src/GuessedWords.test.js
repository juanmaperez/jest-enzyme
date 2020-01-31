import React from 'react'
import { shallow, mount } from 'enzyme' 
import { findElement } from './../test/testUtils'
import GuessedWords from './GuessedWords'
import LanguageContext from './contexts/LanguageContext'
import GuessedWordsContext from './contexts/GuessedWordsContext'

// THIS IS THE VERSION MOCKING USECONTEXT AND SHALLOW
// PROS
  // - Isolated unit test
      // - doesn't rely on other functionality
      // - can use shallow  
// CONS
  // - Multiple useContext mocks are dangerous
      // - specify order of return values
      // - very brittle
      // -  not relevant for custom hook / internal state pattern  

// /** 
//  * Factory function to create a ShallowWrapper for the GuessedWords Component
//  * @function setup
//  * @param {object} props - Component props specific to this setup
//  * @returns {ShallowWrapper} 
//  */

// const mockSetup = ({ guessedWords }) => {
//   const mockUseGuessedWords = jest.fn().mockReturnValue([guessedWords, jest.fn()]);
//   GuessedWordsContext.useGuessedWords = mockUseGuessedWords;
//   return shallow(<GuessedWords />)
// }


// describe(' Mock <GuessedWords />', ()=> {
  
//   describe('if there are no words guessed', () => {
//     let wrapper
//     beforeEach(()=> {
//       wrapper = mockSetup({guessedWords: []})
//     })

//     test('renders without errors', () => {
//       const component = findElement(wrapper, '.guessed-words')
//       expect(component.length).toBe(1)
//     })
//     test('renders intructions to guess a word', () => {
//       const instructions = findElement(wrapper, '.guessed-instructions')
//       expect(instructions.length).toBe(1)
//     })

//   })
//   describe('if there are words guessed', () => {
//     let wrapper
//     let guessedWords = [
//       { guessedWord: 'train', letterMatchCount: 3},
//       { guessedWord: 'agile', letterMatchCount: 1},
//       { guessedWord: 'party', letterMatchCount: 2},
//     ]
//     beforeEach(()=>{
//       wrapper =  mockSetup({guessedWords})
//     })
//     test('renders without error', () => {
//       const component = findElement(wrapper, '.guessed-words')
//       expect(component.length).toBe(1)
//     })

//     test('renders guessed words section', () => {
//       const table = findElement(wrapper, '.guessed-table')
//       expect(table.length).toBe(1)
//     })

//     test('correct number of guessed words', () => {
//       const rows = findElement(wrapper, '.guessed-word')
//       expect(rows.length).toBe(guessedWords.length) 
//     })
//   })
// })


// describe('<LanguagePicker/>', () => {
//   test('correctly renders guess prompt string in english by default', () => {
//     const wrapper = mockSetup({guessedWords: []})
//     const guessInstructions = findElement(wrapper, '.guessed-instructions')
//     expect(guessInstructions.text()).toBe('Try to guess the secret word!')
//   })

//   test('correctly renders guess prompt in spanish', () => {
//     const mockUseContext = jest.fn().mockReturnValue('es')
//     React.useContext = mockUseContext;
//     const wrapper = mockSetup({ guessedWords: []})
//     const guessInstructions = findElement(wrapper, '.guessed-instructions')
//     expect(guessInstructions.text()).toBe('Intenta adivinar la palabra secreta')
//   })
// })





// THIS IS THE VERSION USING PROVIDER AND MOUNT

// PROS
  // - closer to actual app
  // - provider functionality unlikely to fail
      
// CONS
  // - need to use mount
    // - shallow just return provider
    // - test depends on children of component under test


/** 
 * Factory function to create a ShallowWrapper for the GuessedWords Component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper} 
 */
const providerSetup = ({ language, guessedWords }) => {
  language = language || 'en'
  guessedWords = guessedWords || []
  return mount(
    <LanguageContext.Provider value={ language }>
      <GuessedWordsContext.GuessedWordsProvider value={[guessedWords, jest.fn()]}>
        <GuessedWords />
      </GuessedWordsContext.GuessedWordsProvider>
    </LanguageContext.Provider>
  )
}


describe('Provider <GuessedWords />', ()=> {
  
  describe('if there are no words guessed', () => {
    let wrapper
    beforeEach(()=> {
      wrapper = providerSetup({guessedWords: []})
    })
    test('renders without errors', () => {
      const component = findElement(wrapper, '.guessed-words')
      expect(component.length).toBe(1)
    })
    test('renders intructions to guess a word', () => {
      const instructions = findElement(wrapper, '.guessed-instructions')
      expect(instructions.length).toBe(1)
    })

  })
  describe('if there are words guessed', () => {
    let wrapper
    let guessedWords = [
      { guessedWord: 'train', letterMatchCount: 3},
      { guessedWord: 'agile', letterMatchCount: 1},
      { guessedWord: 'party', letterMatchCount: 2},
    ]
    beforeEach(()=>{
      wrapper =  providerSetup({guessedWords})
    })
    test('renders without error', () => {
      const component = findElement(wrapper, '.guessed-words')
      expect(component.length).toBe(1)
    })

    test('renders guessed words section', () => {
      const table = findElement(wrapper, '.guessed-table')
      expect(table.length).toBe(1)
    })

    test('correct number of guessed words', () => {
      const rows = findElement(wrapper, '.guessed-word')
      expect(rows.length).toBe(guessedWords.length) 
    })
  })
})


describe('<LanguagePicker/>', () => {
  test('correctly renders guess prompt string in english by default', () => {
    const wrapper = providerSetup({guessedWords: []})
    const guessInstructions = findElement(wrapper, '.guessed-instructions')
    expect(guessInstructions.text()).toBe('Try to guess the secret word!')
  })

  test('correctly renders guess prompt in spanish', () => {
    const wrapper = providerSetup({ language: 'es', guessedWords: []})
    const guessInstructions = findElement(wrapper, '.guessed-instructions')
    expect(guessInstructions.text()).toBe('Intenta adivinar la palabra secreta')
  })
})