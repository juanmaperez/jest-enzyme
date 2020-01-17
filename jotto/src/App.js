import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getSecretWord } from './actions'
import './App.css';
import GuessedWords from './GuessedWords'
import Congrats from './Congrats'
import Input from './Input'

export class UnconnectedApp extends Component {

  componentDidMount() {
    this.props.getSecretWord()
  }

  render(){
    const { success, guessedWords, secretWord } = this.props
    return (
      <div className="app container">
        <h1 className="row">Jotto</h1>
        <Input/>
        <Congrats success={success}/> 
        <GuessedWords guessedWords={guessedWords}/>
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
