import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import LanguageContext from './contexts/LanguageContext'
import stringsModule from './helpers/strings'

/**
 * Functional React Component
 * @function 
 * @param { object } props React props
 * @returns { JSX.Element } Rendered component or null if 'success' props is false
 */

const Congrats = ({success}) => {

  const language = React.useContext(LanguageContext)
  
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

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
}

export default Congrats;