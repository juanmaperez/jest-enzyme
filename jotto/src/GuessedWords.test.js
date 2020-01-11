import React from 'react'
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

  })
  describe('if there are words guessed', () => {

  })
})
