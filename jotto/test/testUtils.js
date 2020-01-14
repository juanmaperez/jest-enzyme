import checkPropTypes from 'check-prop-types'
import { createStore, applyMiddleware } from 'redux'
import { middlewares } from "./../src/configureStore";
import rootReducer from './../src/reducers'

/**
 * Create a testing store with imported reducers, middlewares, globals: RootReducer
 * @function storeFactory
 * @param { Object } initialState
 * @returns { store }  
 */
export const storeFactory = initialState => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
  return createStoreWithMiddleware(rootReducer, initialState)
}


/**
 * Finds an element into the wrapper according to the selector
 * @param {ShallowWrapper} wrapper Enzyme shallow wrapper
 * @param {string} selector selector for any tag, class, id or whatever attribute we are looking for
 * @returns {ShallowWrapper}
 */
export const findElement = (wrapper, selector) => wrapper.find(selector)


export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(component.propTypes, conformingProps, 'prop', component.name)
  expect(propError).toBeUndefined()
}

