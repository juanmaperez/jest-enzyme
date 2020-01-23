import React, { Component } from 'react'
import { connect } from 'react-redux'

import { resetGame } from './actions'


export class UnconnectedResetButton extends Component {

  handleClick = (e) => {
    e.preventDefault()
    this.props.resetGame()
  } 

  render() {
    return this.props.success 
    ? <button className="btn btn-info reset" onClick={(e) => this.handleClick(e)}>Reset Game</button>
    : null
  }
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