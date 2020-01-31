import React from 'react'
import { mount } from 'enzyme'
import { findElement, checkProps } from '../test/testUtils'
import Input from './Input'

import LanguageContext from './contexts/LanguageContext'
import SuccessContext from './contexts/SuccessContext'
import GuessedWordsContext from './contexts/GuessedWordsContext'

const setup = ({ secretWord, language, success}) => {
  secretWord = secretWord || 'party'
  language = language || 'en'
  success = success || false
  const wrapper = mount(
    <LanguageContext.Provider value={ language }>
      <SuccessContext.SuccessProvider value={[success, jest.fn()]}>
        <GuessedWordsContext.GuessedWordsProvider>
          <Input secretWord={secretWord} />
        </GuessedWordsContext.GuessedWordsProvider>
      </SuccessContext.SuccessProvider>
    </LanguageContext.Provider>
  )
  return wrapper
}

describe('<LanguagePicker/>', () => {
  test('it renders the correct string for submit on english language', () => {
    const wrapper = setup({})
    const button = findElement(wrapper, '.submit')
    expect(button.text()).toBe('Submit')
  })

  test('it renders the correct string for submit on spanish language', () => {
    const wrapper = setup({ language: 'es'})
    const button = findElement(wrapper, '.submit')
    expect(button.text()).toBe('Enviar')
  })
})

describe('<Input/>', () => {
  test('props received are correct', () => {
    const expectedProps = { secretWord : 'party'}
    checkProps(Input, expectedProps)
  })

  test('it renders without errors', () => {
    const secretWord = 'party'
    const wrapper =  setup({ secretWord })
    const component = findElement(wrapper, '.input-component')
    expect(component.length).toBe(1)
  })
})

describe('state controlled input field', () => {
  let wrapper
  let mockSetCurrentGuess = jest.fn()
  
  beforeEach(() => {
    mockSetCurrentGuess.mockClear()
    React.useState = jest.fn(() => ['', mockSetCurrentGuess])
    wrapper = setup({})
  })

  test('state updates with value of input box upon change', () => {
    const inputBox = findElement(wrapper, '.input')
    const mockEvent =  { target: { value: 'train'}}
    inputBox.simulate('change', mockEvent)

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train')
  })

  test('set currentGuess gets called with an empty string', () => {
    const submit = findElement(wrapper, '.submit')
    submit.simulate('click', {preventDefault: () => {}})

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('')
  })
})


test('input component does not show when success is true' , () => {
  const wrapper = setup({ secretWord: 'party', success: true })
  expect(wrapper.isEmptyRender()).toBe(true)
})