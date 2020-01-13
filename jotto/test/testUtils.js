import checkPropTypes from 'check-prop-types'
import { createStore } from 'redux'

import rootReducer from './../src/reducers'

/**
 * @function storeFactory
 * @param { Object } initialState
 * @returns { store }  
 */
export const storeFactory = initialState => createStore(rootReducer, initialState)


/**
 * 
 * @param {ShallowWrapper} wrapper Enzyme shallow wrapper
 * @param {string} selector selector for any tag, class, id or whatever attribute we are looking for
 * @returns {ShallowWrapper}
 */
export const findElement = (wrapper, selector) => wrapper.find(selector)


export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(component.propTypes, conformingProps, 'prop', component.name)
  expect(propError).toBeUndefined()
}

