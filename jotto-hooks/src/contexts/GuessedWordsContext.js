import React from 'react'


const GuessedWordsContext = React.createContext()

const useGuessedWords = () => {
  // useContext is a hook that returns the context value
  // In this case, the context value is an [value, setter] array for the context state
  // useContext also subscribes to changes, and will update any time the context value changes
  // we have memoize this so that it will only update when the guessedWords value updates
  const context = React.useContext(GuessedWordsContext)
  // throws an error if the context doesn't exist -- means we are not in its provider
  if(!context) {
    throw new Error('useGuessedWord must be within a GuessedWords Provider')
  }

  return context
}

const GuessedWordsProvider = (props) => {
  const [guessedWords, setGuessedWords ] = React.useState([])
  
  const value = React.useMemo(() => [guessedWords, setGuessedWords], [guessedWords])
  
  return <GuessedWordsContext.Provider value={value} {...props}/>
} 

export default {
  useGuessedWords,
  GuessedWordsProvider
}