import React from 'react';
import {mount} from 'enzyme'
import { findElement } from './../test/testUtils'
import App from './App';
import hookActions from './actions/hookActions'

const mockGetSecretWord = jest.fn()

/**
 * Setup function for App Component
 * @param { string } secretWord desired secretWord state value for test
 * @returns { ReactWrapper }
 */
const setup = (secretWord = 'party') => {
  // mocking the getSecretWord action for checking when is called or not
  mockGetSecretWord.mockClear()
  hookActions.getSecretWord =  mockGetSecretWord

  // mocking the useReducer for setting a value for secretWord instead of null
  const mockUseReducer = jest.fn()
    .mockReturnValue([
      { secretWord,
      language: 'en' },
      jest.fn()
    ])

  React.useReducer = mockUseReducer;
  // use mount because useEffect is not called on shallow
  // https://github.com/airbnb/enzyme/issues/2086
  return mount(<App/>)
}

describe('<App/>', () => {
  test('it renders without errors', () => {
    const wrapper = setup()
    const component = findElement(wrapper, '.App')
    expect(component.length).toBe(1)
  });

  describe('getSecretWord calls', () => {
    test('gets call on App mount', () => {
      setup()
      expect(mockGetSecretWord).toHaveBeenCalled()
    })

    test('it does not get called when app updates', () => {
      const wrapper = setup();
      // we need to clear the mock since getSecretWords gets called on App mount when we setup
      mockGetSecretWord.mockClear()
      // We use setProps to rerender the component
      wrapper.setProps();

      expect(mockGetSecretWord).not.toHaveBeenCalled()
    })
  })

  describe('secretWord is not null',  () => {
    let wrapper
    beforeEach(() => {
      wrapper = setup('party')
    })
    test('renders app component when the secretWord is not null', () => {
      const appComponent = findElement(wrapper, '.App')
      expect(appComponent.exists()).toBe(true)
    })

    test('does not render spinner when the secretWord is not null', () => {
      const spinner = findElement(wrapper, '.spinner')
      expect(spinner.exists()).toBe(false)
    })
  })

  describe('secretWord is null',  () => {
    let wrapper
    beforeEach(() => {
      wrapper = setup(null)
    })
    test('does not renders app component when the secretWord is null', () => {
      const appComponent = findElement(wrapper, '.App')
      expect(appComponent.exists()).toBe(false)
    })

    test('render spinner when the secretWord is null', () => {
      const spinner = findElement(wrapper, '.spinner')
      expect(spinner.exists()).toBe(true)
    })
  })
})

