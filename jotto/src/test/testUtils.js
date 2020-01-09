
/**
 * 
 * @param {ShallowWrapper} wrapper Enzyme shallow wrapper
 * @param {string} selector selector for any tag, class, id or whatever attribute we are looking for
 * @returns {ShallowWrapper}
 */
export const findElement = (wrapper, selector) => wrapper.find(selector)