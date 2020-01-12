import React, { Component } from 'react';
import './App.css';
import GuessedWords from './GuessedWords'
import Congrats from './Congrats'

class App extends Component {
  render(){
    return (
      <div className="app container">
        <h1 className="row">Jotto</h1>
        <Congrats success={false}/>
        <GuessedWords guessedWords={[]}/>
      </div>
    );
  }

}

export default App;
