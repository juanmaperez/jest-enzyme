import React from 'react'
import { shallow } from 'enzyme'

import GuessesCounter from './GuessesCounter'
import { findElement, checkProps } from '../test/testUtils'

const setup = (props) => {
  const wrapper = shallow(<GuessesCounter {...props} />)
  return wrapper
}

describe('<GuessesCounter/>', () => {

  test('throws not warning with expected props', () => {
    const guessedWords = [{ guessedWord: 'train', letterMatchCount: 3}, { guessedWord: 'party', letterMatchCount: 4 }]
    checkProps(GuessesCounter, {guessedWords}) 
  })

  test('it renders without errors', () => {
    const wrapper = setup({ guessedWords : []})
    const counter = findElement(wrapper, '.guesses-counter')
    expect(counter.length).toBe(1)
  })

  test('displays the number of attemps if guessed words', () => {
    const guessedWords = [{ guessedWord: 'train', letterMatchCount: 3}, { guessedWord: 'party', letterMatchCount: 4 }]
    const wrapper = setup({guessedWords})
    const counter = findElement(wrapper, '.guesses-counter')
    expect(counter.text()).toBe('Total guesses: 2')
  })

  test('displays no guess attemps when guessedWords is empty', () => {
    const guessedWords = []
    const wrapper = setup({guessedWords})
    const counter = findElement(wrapper, '.guesses-counter')
    expect(counter.text()).toBe('No guesses attempted')
  })
})