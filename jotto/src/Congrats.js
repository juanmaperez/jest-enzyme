import React from 'react'

/**
 * Functional React Component
 * @function 
 * @param { object } props React props
 * @returns { JSX.Element } Rendered component or null if 'success' props is false
 */

export default ({success}) => {
  return (
    <div className="congrats">
      { success ? <span className="message">Congrats! you guessed the word</span> : null }
    </div>
  )
}