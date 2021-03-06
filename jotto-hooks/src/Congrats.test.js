import React from 'react'
import { mount, ShallowWrapper } from 'enzyme'
import { findElement, checkProps } from './../test/testUtils'
import LanguageContext from './contexts/LanguageContext'
import Congrats from './Congrats'
import SuccessContext from './contexts/SuccessContext'

/** 
 * Factory function to create a ShallowWrapper for the Congrats Component
 * @function setup
 * @param {object} testValues - Context values specific to this setup
 * @returns {ShallowWrapper} 
 */

const setup = ({success, language}) => {
  language = language || 'en'
  success = success || false
  return mount(
    <LanguageContext.Provider value={language}>
      <SuccessContext.SuccessProvider value={[success, jest.fn()]}>
        <Congrats />
      </SuccessContext.SuccessProvider>
    </LanguageContext.Provider>
  )
}

describe('<LanguagePicker/>', () => {
  test('correctly renders congrats string in english', () => {
    const wrapper = setup({ success: true })
    const component = findElement(wrapper, '.message')
    expect(component.text()).toBe('Congratulations! You guessed the word!')
  })

  test('correctly renders congrats string in spanish', () => {
    const wrapper = setup({ success: true })
    const component = findElement(wrapper, '.message')
    expect(component.text()).toBe('Congratulations! You guessed the word!')
  })
})

describe('<Congrats />', () => {
  test('renders without error', ()=> {
    const wrapper = setup({})
    const component = findElement(wrapper, '.congrats')
    expect(component.length).toBe(1)
  })
  
  test('renders no text when success is false', () => {
    const wrapper = setup({})
    const component = findElement(wrapper, '.congrats')
    expect(component.text()).toBe('')
  })
  
  test('renders non-empty congrats message when success is true', () => {
    const wrapper = setup({success: true})
    const component = findElement(wrapper, '.message')
    expect(component.text().length).not.toBe(0)
  })
  
})
