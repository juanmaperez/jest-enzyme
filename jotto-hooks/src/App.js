import React from 'react';
import './App.css';
import Input from './Input'
import hookActions from './actions/hookActions';

const initialState = { secretWord: null }

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

  React.useEffect(() => {
    hookActions.getSecretWord(setSecretWord)
  }, [])

  return (
    <div className="App">
      <Input secretWord="party"/>
    </div>
  );
}

export default App;
