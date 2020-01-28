import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setSecretWord } from './actions'

export class UnconnectedSetSecretWord extends Component {
  state = {
    show: false,
    secretWord : '', 
    set: false
  }

  componentDidUpdate(){
    this.resetComponent()
  }

  display = () => this.setState(({show}) => ({ show: !show}))

  handleSecretWord = () => {
    if( this.state.secretWord !== '') {
      this.props.makeSecretWord(this.state.secretWord)
    }
  }

  resetComponent = () => {
    if(this.props.secretWord === this.state.secretWord){
      this.setState({ show: false, secretWord: '', set: true})
      setTimeout(() => this.setState({ set: false })
      , 4000)
    }
  }
d
  render () { 
    const { show, secretWord, set } = this.state

    return (
      <div>
        <button 
          className="btn btn-primary user-input" 
          onClick={ this.display }>
            Add a custom secret word
        </button>
        { set && <div className="alert alert-success">Secret word set successfully</div> }
        { show && <div>
            <input 
              className="input input-group-text setter" 
              type="text"
              placeholder="Enter a word"
              value={secretWord} 
              name="secretword" 
              onChange={ e => this.setState({ secretWord: e.target.value })}/>
            <button 
              className="btn btn-success set-btn" 
              onClick={ this.handleSecretWord }>
                Set secret word
            </button>
          </div>}    
      </div>
    )
  }
}

const mapStateToProps = ({secretWord}) => ({
  secretWord
})

const mapDispatchToProps = (dispatch) => ({
  makeSecretWord: (secretWord) => dispatch(setSecretWord(secretWord))
})

export default connect(mapStateToProps, mapDispatchToProps)(UnconnectedSetSecretWord)