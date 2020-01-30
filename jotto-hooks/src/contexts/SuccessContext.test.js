import React from 'react'
import { shallow, mount } from 'enzyme'
import SuccessContext from './SuccessContext'


// fake functional component which calls useSuccess for our tests
const FunctionalComponent = () => {
  SuccessContext.useSuccess()
  return <div></div>
}

describe('SuccessContext', () => {
  // when we run the component is the function useSuccess which should throw an error for that reason the expect has a function inside
  test('it does not throws an error if the component is within the provider', () => {
    expect(() => {
      shallow(<FunctionalComponent/>)
    }).toThrow('useSuccess must be used within a SuccessProvider')
  })

  test('it throws an error if the component is not within the provider', () => {
    expect(() => {
      mount(
        <SuccessContext.SuccessProvider >
          <FunctionalComponent />
        </SuccessContext.SuccessProvider>
      )
    }).not.toThrow('useSuccess must be used within a SuccessProvider')
  })

})