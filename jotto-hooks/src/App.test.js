import React from 'react';
import {mount} from 'enzyme'
import { findElement } from './../test/testUtils'
import App from './App';
import hookActions from './actions/hookActions'

const mockGetSecretWord = jest.fn()

/**
 * Setup function for App Component
 * @returns { ReactWrapper }
 */
const setup = () => {
  mockGetSecretWord.mockClear()
  hookActions.getSecretWord =  mockGetSecretWord
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
})

