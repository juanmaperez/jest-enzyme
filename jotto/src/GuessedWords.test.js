import React from 'react'
import { shallow } from 'enzyme' 
import { findElement, checkProps } from './../test/testUtils'
import GuessedWords from './GuessedWords'

const defaultProps = {
  guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }]
}
/** 
 * Factory function to create a ShallowWrapper for the GuessedWords Component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper} 
 */
const setup = (props) => {
  const setupProps = {...defaultProps, ...props}
  return shallow(<GuessedWords {...setupProps} />)
}


describe('<GuessedWords />', ()=> {
  
  test('throws not warning with expected props', () => {
    checkProps(GuessedWords, defaultProps) 
  })

  describe('if there are no words guessed', () => {
    let wrapper
    beforeEach(()=> {
      wrapper = setup({guessedWords: []})
    })
    test('renders without errors', () => {
      const component = findElement(wrapper, '.guessed-words')
      expect(component.length).toBe(1)
    })
    test('renders intructions to guess a word', () => {
      const instructions = findElement(wrapper, '.guessed-intructions')
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
      wrapper =  setup({guessedWords})
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
