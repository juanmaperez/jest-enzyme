import React from 'react'
import PropTypes from 'prop-types'

import StringsModule from './helpers/strings'
import LanguageContext from './contexts/LanguageContext'

const Input = ({ secretWord }) => {

  const language = React.useContext(LanguageContext)
  const [currentGuess, setCurrentGuess ] = React.useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setCurrentGuess(currentGuess)
  }

  return (
    <div className="input-component">
      <form className="form-inline">
        <input
          className="input mb-2 mx-sm-3" 
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
  )
}

Input.propTypes = {
  secretWord: PropTypes.string.isRequired
}

export default Input
