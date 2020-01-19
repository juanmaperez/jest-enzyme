import React from 'react'
import PropTypes from 'prop-types'

const GuessesCounter = ({ guessedWords }) => {
  return (
    <div className="guesses-counter alert alert-info">
      { guessedWords && guessedWords.length > 0
      ? `Total guesses: ${guessedWords.length}`
      : `No guesses attempted` }
    </div>
  ) 
}

GuessesCounter.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
}

export default GuessesCounter
