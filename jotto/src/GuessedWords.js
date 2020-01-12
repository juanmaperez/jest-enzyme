import React from 'react'
import PropTypes from 'prop-types'

const GuessedWords = ({ guessedWords }) => (
  <div className="row guessed-words">
    { guessedWords.length < 1 
      ? <h2 className="guessed-intructions">Try to guess the secret word!</h2>
      : <div className="guessed-table">
          <h2>Guessed words</h2>
          <table className="table table-sm">
            <thead className="thead-light">
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