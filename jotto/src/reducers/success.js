import { SUCCESS } from './../actions/constants'

/**
 * @function successReducer
 * @param {boolean} state state of the reducer
 * @param {Object} action action to be reduced
 * @returns {boolean} depending if we succeded guessing the word
 */
export default (state = false, action) => {
  switch(action.type){
    case SUCCESS:
      return true;
    default:
      return state
  }
}