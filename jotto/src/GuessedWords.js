import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import GiveUpButton from './GiveUpButton'

const GuessedWords = ({ guessedWords }) => (
  <Fragment>
    <div className="row w-100 guessed-words">
      { guessedWords.length < 1 
        ? <h3 className="col col-12 guessed-intructions row">Try to guess the secret word!</h3>
        : <div className="col col-12 w100 guessed-table">
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
    <GiveUpButton />
  </Fragment>

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