import React from 'react'
import PropTypes from 'prop-types'

const GuessedWords = ({ words }) => (
  <div></div>
)

GuessedWords.proptypes = {
  words: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
}

export default GuessedWords