import React, { Fragment } from 'react'
import LanguageContext from './contexts/LanguageContext'
import stringsModule from './helpers/strings'
import GuessedWordsContext from './contexts/GuessedWordsContext'

const GuessedWords = () => {

  const language = React.useContext(LanguageContext)
  const [ guessedWords ] = GuessedWordsContext.useGuessedWords()
  return (
    <Fragment>
      <div className="row w-100 guessed-words">
        { guessedWords.length < 1 
          ? <h3 className="col col-12 guessed-instructions row">{ stringsModule.getStringByLanguage(language, 'guessPrompt')}</h3>
          : <div className="col col-12 w100 guessed-table">
              <h3>{ stringsModule.getStringByLanguage(language, 'guessedWords')}</h3>
              <table className="table table-sm">
                <thead className="thead-light">
                  <tr>
                  <th>Pos</th>
                  <th>{ stringsModule.getStringByLanguage(language, 'guessColumnHeader')}</th>
                  <th>{ stringsModule.getStringByLanguage(language, 'matchingLettersColumnHeader')}</th>
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
    </Fragment>
  )
}


export default GuessedWords