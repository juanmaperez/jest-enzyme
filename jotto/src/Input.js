import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { guessWord } from './actions'

export class UnconnectedInput extends Component {

  state = { currentGuess : null }

  handleSubmit = (event) => {
    event.preventDefault()
    const {currentGuess} = this.state
    if(currentGuess && currentGuess.length > 0) {
      this.props.guessWord(currentGuess)
    }
  }
  
  render(){
    const {success} = this.props
    const { currentGuess } = this.state 
    return (
      <div className="input-wrapper input-group-prepend">
      { success 
        ? null
        : ( <Fragment>
              <input className="input input-group-text" value={currentGuess} type="text" placeholder="Enter a word" onChange={(e) => this.setState({currentGuess: e.target.value })}/>
              <button className="btn btn-info mb-2 submit-btn" onClick={(event) => this.handleSubmit(event)}>Submit</button>
            </Fragment>)
      }
      </div>
    )
  }
}

const mapStateToProps = ({ success }) => {
  return { success }
}

const mapDispatchToProps = dispatch => {
  return {
    guessWord: (guess) => dispatch(guessWord(guess)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(UnconnectedInput)