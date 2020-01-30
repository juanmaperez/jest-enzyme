import React from 'react'
import PropTypes from 'prop-types'

const LanguagePicker = ({ setLanguage }) => {
  const languages = [
    {code: 'en', text: 'english'},
    {code: 'es', text: 'spanish'}
  ]
  return (
    <div className="language-picker">
      { languages.map(lang => 
        <span key={lang.code} 
              className="link" 
              onClick={() => setLanguage(lang.code)}> 
          &nbsp; { lang.text } &nbsp;
        </span> )}
    </div>
  )
}

LanguagePicker.propTypes = {
  setLanguage: PropTypes.func.isRequired
}

export default LanguagePicker