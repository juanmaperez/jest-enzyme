import React from 'react'
import PropTypes from 'prop-types'

import StringsModule from './helpers/strings'
import LanguageContext from './contexts/LanguageContext'
import SuccessContext from './contexts/SuccessContext'
import GuessedWordsContext from './contexts/GuessedWordsContext'
import { getLetterMatchCount } from './helpers'


const Input = ({ secretWord }) => {

  const language = React.useContext(LanguageContext)
  const [currentGuess, setCurrentGuess ] = React.useState('')
  const [ success, setSuccess ] = SuccessContext.useSuccess()
  const [ guessedWords, setGuessedWords ] = GuessedWordsContext.useGuessedWords() 

  const handleSubmit = (e) => {
    e.preventDefault()
    
    setGuessedWords([...guessedWords, {guessedWord: currentGuess, letterMatchCount: getLetterMatchCount(currentGuess, secretWord)}])
    // check against secret word if the guess is correct
    if( currentGuess === secretWord) {
      setSuccess(true)
    } 
    // clearing the input box
    setCurrentGuess('')
  }
  return success 
    ? null
    : <div className="input-component">
      <form className="form-inline">
        <input
          className="input mb-2 mx-sm-3 input-box" 
          type="text" 
          placeholder={ StringsModule.getStringByLanguage(language, 'guessInputPlaceholder')} 
          value={ currentGuess }
          onChange={ (e) => setCurrentGuess(e.target.value)} 
        />
        <button 
          className="submit btn btn-primary mb-2"
          onClick={ (e) => handleSubmit(e) }
        >{ StringsModule.getStringByLanguage(language, 'submit')}</button>
      </form>
    </div>

}

Input.propTypes = {
  secretWord: PropTypes.string.isRequired
}

export default Input
