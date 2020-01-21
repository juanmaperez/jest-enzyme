import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import ResetButton from './ResetButton'
/**
 * Functional React Component
 * @function 
 * @param { object } props React props
 * @returns { JSX.Element } Rendered component or null if 'success' props is false
 */

const Congrats = ({success}) => {
  return (
    <div className="congrats">
      { !success 
        ? null 
        : <Fragment>
          <span className="alert alert-success message">Congrats! you guessed the word</span> 
          <ResetButton/>
        </Fragment>
      }
    </div>
  )
}

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
}

export default Congrats;