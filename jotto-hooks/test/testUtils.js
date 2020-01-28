import checkPropTypes from 'check-prop-types'

/**
 * Finds an element into the wrapper according to the selector
 * @param {ShallowWrapper} wrapper Enzyme shallow wrapper
 * @param {string} selector selector for any tag, class, id or whatever attribute we are looking for
 * @returns {ShallowWrapper}
 */
export const findElement = (wrapper, selector) => wrapper.find(selector)

/**
 * Throws an error if confirmingProps don't pass propTypes validations
 * @param { React.Component } component Component to check props against
 * @param { object} conformingProps Props we expect to confirm to defined propTypes
 */
export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(component.propTypes, conformingProps, 'prop', component.name)
  expect(propError).toBeUndefined()
}

