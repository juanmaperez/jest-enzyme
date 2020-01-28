import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getSecretWord } from './actions'
import './App.css';
import GuessedWords from './GuessedWords'
import Congrats from './Congrats'
import Input from './Input'
import GuessesCounter from './GuessesCounter'
import SetSecretWord from './SetSecretWord'

export class UnconnectedApp extends Component {

  componentDidMount() {
    this.props.getSecretWord()
  }

  render(){
    const { success, guessedWords, secretWord } = this.props
    return (
      <div className="app container">
        <h1 className="row mt-5">Jotto</h1>
        {/* <p className="row mt-3">The secret word is { secretWord }</p> */}
        <div className="row mt-3">
          <Input/>
          <Congrats success={success}/> 
        </div>
        <div className="row mt-3">
          <GuessedWords guessedWords={guessedWords}/>
        </div>
        <div className="row mt-3">
          <GuessesCounter guessedWords={guessedWords} />
        </div>
        <div className="row mt-3">
          <SetSecretWord />
        </div>
      </div>
    );
  }

}

const mapStateToProps = ({ guessedWords, secretWord, success}) => {
  return {
    guessedWords,
    secretWord,
    success
  }
} 

const mapDispatchToProps = dispatch => {
  return {
    getSecretWord: () => dispatch(getSecretWord())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UnconnectedApp);
