import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ secretWord}) => {
  return (
    <div className="input-component"></div>
  )
}

Input.propTypes = {
  secretWord: PropTypes.string.isRequired
}

export default Input
