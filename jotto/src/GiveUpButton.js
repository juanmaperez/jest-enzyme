import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import ResetButton from './ResetButton'

export class UnconnectedGiveUpButton extends Component {
  
  state = { givenUp : false }
 
  handleClick = (e) => {
    e.preventDefault()
    this.setState( ({givenUp}) => ({ givenUp: !givenUp}))
  }

  render() {
    const { success, guessedWords, secretWord } = this.props
    return (
      <div>
        { guessedWords.length < 1 || success
        ? null
        : !this.state.givenUp 
        ? <button className="btn btn-warning give-up-btn" onClick={ (e) => this.handleClick(e)}>Give up</button>
        : <Fragment>
            <div className="alert alert-warning">The secret word was { secretWord }</div>
            <div className='reset-wrapper' onClick={ (e) => this.handleClick(e) }>
              <ResetButton />
            </div>
          </Fragment>
          }
      </div>)
  }

}


const mapStateToProps = ({ success, guessedWords, secretWord }) => ({
  success,
  secretWord,
  guessedWords
})

export default connect(mapStateToProps)(UnconnectedGiveUpButton);
