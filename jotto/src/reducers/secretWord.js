import { SET_SECRET_WORD } from './../actions/constants'

/**
 * @function secretWordReducer
 * @param { string } state - State before reducer
 * @param { object } action - Action sent to reducer
 * @returns { string } -  new state (secretWord payload from action)
 */

export default ( state = null, {type, payload}) => {
  switch(type){
    case SET_SECRET_WORD:
      return payload;
    default:
      return state
  }
}