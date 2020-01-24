import React from 'react'
import { connect } from 'react-redux'

import { resetGame } from './actions'


export const UnconnectedResetButton = ({resetGame, success}) => {

  const handleClick = (e) => {
    e.preventDefault()
    resetGame()
  } 

  return success 
  ? <button className="btn btn-info reset" onClick={(e) => handleClick(e)}>Reset Game</button>
  : null
}



const mapStateToProps = ({ success }) => {
  return {
    success
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetGame: () => dispatch(resetGame())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UnconnectedResetButton)