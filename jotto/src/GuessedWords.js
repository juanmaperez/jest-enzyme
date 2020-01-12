import React from 'react'
import PropTypes from 'prop-types'

const GuessedWords = ({ guessedWords }) => (
  <div className="guessed-words">
    { guessedWords.length < 1 
      ? <h2 className="guessed-intructions">Guess the secret word!</h2>
      : <div className="guessed-table">
          <table>
            <thead>
              <th>
                <th>Pos</th>
                <th>Word</th>
                <th>Appearances</th>
              </th>
            </thead>
            <tbody>
            {
              guessedWords.map((word, idx) => {
                return (
                <tr key={idx} className="guessed-word">
                  <td>#{ idx + 1}</td>
                  <td>{ word.guessedWord }</td>
                  <td>{ word.letterMatchCount }</td>
                </tr>
              )})
            }
            </tbody>
          </table>
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