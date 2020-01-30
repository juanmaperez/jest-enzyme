import React from 'react'
import { shallow, mount } from 'enzyme'
import GuessedWordsContext from './GuessedWordsContext'


// Fake functional component for testing
const FunctionalComponent = () => {
  GuessedWordsContext.useGuessedWords()
  return <div></div>
}


describe('<GuessedWordsContext />', () => {
  test('useGuessedWords throws an error if its not within a provider', () => {
    expect(() => {
      shallow(<FunctionalComponent/>)
    }).toThrow('useGuessedWord must be within a GuessedWords Provider')
  })

  test('useGuessedWords doesnt throw an error if its within a provider', () => {
    expect(() => {
      mount(
        <GuessedWordsContext.GuessedWordsProvider>
          <FunctionalComponent/>
        </GuessedWordsContext.GuessedWordsProvider>
      )
    }).not.toThrow('useGuessedWord must be within a GuessedWords Provider')
  })
})