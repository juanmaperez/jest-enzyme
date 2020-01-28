import React from 'react';
import {shallow} from 'enzyme'
import { findElement } from './../test/testUtils'
import App from './App';

const setup = () => shallow(<App/>)

describe('<App/>', () => {
  test('it renders without errors', () => {
    const wrapper = setup()
    const component = findElement(wrapper, '.App')
    expect(component.length).toBe(1)
  });
})

