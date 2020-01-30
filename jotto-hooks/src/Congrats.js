import React, { Fragment } from 'react'

import SuccessContext from './contexts/SuccessContext'
import LanguageContext from './contexts/LanguageContext'
import stringsModule from './helpers/strings'

/**
 * Functional React Component
 * @function 
 * @returns { JSX.Element } Rendered component or null if 'success' props is false
 */

const Congrats = () => {

  const language = React.useContext(LanguageContext)
  const [success] = SuccessContext.useSuccess()

  return (
    <div className="congrats">
      { !success 
        ? null 
        : <Fragment>
            <span className="alert alert-success message">
              {stringsModule.getStringByLanguage(language, 'congrats')}
            </span> 
          </Fragment>
      }
    </div>
  )
}

export default Congrats;