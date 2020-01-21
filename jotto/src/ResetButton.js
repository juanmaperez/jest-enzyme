import React from 'react'
import { connect } from 'react-redux'

import { resetGame } from './actions'


export const UnconnectedResetButton = ({ success }) => {
  return success 
  ? <button className="btn btn-info">Reset Game</button>
  : null
}


const mapStateToProps = ({ success }) => {
  return {
    success
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetGame: dispatch(resetGame())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UnconnectedResetButton)