import React from 'react'
import PropTypes from 'prop-types'

const GuessedWords = ({ guessedWords }) => (
  <div className="guessed-words">
    { guessedWords.length < 1 
      ? <h2 className="guessed-intructions">Guess the secret word!</h2>
      : <div className="guessed-table">
        
      </div>
    }
  </div>
)

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
}

export default GuessedWords