import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ secretWord}) => {

  const [currentGuess, setCurrentGuess ] = React.useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setCurrentGuess(currentGuess)
  }

  return (
    <div className="input-component">
      <form className="form-inline">
        <input
          className="input mb-2 mx-sm-3" 
          type="text" 
          placeholder="Enter guess word" 
          value={ currentGuess }
          onChange={ (e) => setCurrentGuess(e.target.value)} 
        />
        <button 
          className="submit btn btn-primary mb-2"
          onClick={ (e) => handleSubmit(e) }
        >Guess</button>
      </form>
    </div>
  )
}

Input.propTypes = {
  secretWord: PropTypes.string.isRequired
}

export default Input
