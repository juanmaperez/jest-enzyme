import React from 'react'
import PropTypes from 'prop-types'

const GuessedWords = ({ guessedWords }) => (
  <div className="row guessed-words">
    { guessedWords.length < 1 
      ? <h3 className="col guessed-intructions row">Try to guess the secret word!</h3>
      : <div className="col guessed-table">
          <h3>Guessed words</h3>
          <table className="table table-sm">
            <thead className="thead-light">
              <tr>
              <th>Pos</th>
              <th>Word</th>
              <th>Appearances</th>
              </tr>
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