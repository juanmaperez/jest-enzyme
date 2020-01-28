import React from 'react'
import { shallow } from 'enzyme'
import SetSecretWord, { UnconnectedSetSecretWord } from './SetSecretWord'
import { findElement } from '../test/testUtils'

const setup = (props) => {
  const wrapper = shallow(<UnconnectedSetSecretWord {...props}/>)
  return wrapper
}

describe('<UnconnectedSetSecretWord', () => {
  let wrapper
  let button
  let secretWordMock = 'train'
  let setSecretWordMock
  
  beforeEach(() => {
    setSecretWordMock = jest.fn()
    const props = {
      makeSecretWord : setSecretWordMock
    }
    
    wrapper = setup(props)
    wrapper.setState({secretWord : secretWordMock})

    button = findElement(wrapper, '.user-input')
  })

  test('it renders without errors', () => {
    expect(button.length).toBe(1)
  })

  test('the input is not visible until it click in show button', () => {
    const setter = findElement(wrapper, '.setter')
    expect(setter.length).toBe(0)
  })

  test('on button click it set show state as true', () => {
    button.simulate('click', { preventDefault(){}})
    const setter = findElement(wrapper, '.setter')
    expect(setter.length).toBe(1)
  })

  test('SetSecretWord is called with secret word in input', () => {
    button.simulate('click', { preventDefault(){}})
    const submit = findElement(wrapper, '.set-btn')
    submit.simulate('click', { preventDefault(){}})
    const word = setSecretWordMock.mock.calls[0][0]
    expect(word).toBe(secretWordMock)
  })

})


describe('<SetSecretWord />', () => {
  test('on Set secret word click the setSecretWord function is called', () => {

  })
})