import React from 'react'
import { shallow } from 'enzyme'
import LanguagePicker from './LanguagePicker'
import {findElement, checkProps} from './../test/testUtils'

const mockSetLanguage = jest.fn()
const setup = (props = {setLanguage: mockSetLanguage}) => shallow(<LanguagePicker {...props} />)

describe('<LanguagePicker/>', () => {

  test('it renders without errors', () => {
    const wrapper = setup()
    const component = findElement(wrapper, '.language-picker')
    expect(component.length).toBe(1)
  })

  test('does not throw a warning with expected props', () => {
    const expectedProps = {setLanguage: mockSetLanguage}
    checkProps(LanguagePicker, expectedProps)
  })

  test('renders all language links', () => {
    const wrapper = setup()
    const languageLink = findElement(wrapper, '.link')
    expect(languageLink.length).toBeGreaterThan(0)
  })

  test('calls setLanguage prop upon click', () => {
    const wrapper = setup()
    const languageLink = findElement(wrapper, '.link')
    console.log(languageLink.debug())
    languageLink.first().simulate('click', {preventDefault: () => {}})
    expect(mockSetLanguage).toHaveBeenCalled()
  })
})