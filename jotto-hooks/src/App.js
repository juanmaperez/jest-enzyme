import React from 'react';
import './App.css';

import hookActions from './actions/hookActions';

import Input from './Input'
import LanguagePicker from './LanguagePicker'
import Congrats from './Congrats'
import GuessedWords from './GuessedWords'

import LanguageContext from './contexts/LanguageContext'
import SuccessContext from './contexts/SuccessContext'



const initialState = { secretWord: null, language: 'en'}

/**
 * Reducer to update the state called automatically by dispatch
 * @param { object } state existing state 
 * @param { object } action object cointaining the type and the payload 
 *                   for example { type: 'SET_SECRET_WORD, payload: 'party'}
 * @returns {object} new state
 */
const reducer = (state, action) => {
  switch(action.type){
    case 'SET_SECRET_WORD':
      return {
        ...state, 
        secretWord: action.payload
      }
    case 'SET_LANGUAGE':
      return {
        ...state,
        language: action.payload
      }
    default: 
      return state
  }
}

function App() {

  const [state, dispatch] = React.useReducer(
    reducer,
    initialState
  )

  const setSecretWord = (secretWord) => dispatch({ type: 'SET_SECRET_WORD', payload: secretWord})

  const setLanguage = (lang) => dispatch({ type: 'SET_LANGUAGE', payload: lang})

  React.useEffect(() => {
    hookActions.getSecretWord(setSecretWord)
  }, [])


  const { secretWord, language } = state
  return secretWord 
    ? <div className="App container">
        <h1>Jotto {secretWord}</h1>
        <LanguageContext.Provider value={language}>
          <LanguagePicker setLanguage={ setLanguage} />
          <SuccessContext.SuccessProvider>
            <Input secretWord={ secretWord }/>
            <Congrats />
          </SuccessContext.SuccessProvider>
          {/* <GuessedWords/> */}
        </LanguageContext.Provider>
      </div>
    : <div className="container spinner">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
          <p>Loading secret word</p>
        </div>
      </div>
  ;
}

export default App;
