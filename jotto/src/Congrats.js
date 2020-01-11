import React from 'react'
import PropTypes from 'prop-types'
/**
 * Functional React Component
 * @function 
 * @param { object } props React props
 * @returns { JSX.Element } Rendered component or null if 'success' props is false
 */

const Congrats = ({success}) => {
  return (
    <div className="congrats">
      { success ? <span className="message">Congrats! you guessed the word</span> : null }
    </div>
  )
}

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
}

export default Congrats;