const languageStrings = {
  en: {
   congrats: 'Congratulations! You guessed the word!',
   submit: 'Submit',
   guessPrompt: 'Try to guess the secret word!',
   guessInputPlaceholder: 'enter guess',
   guessColumnHeader: 'Guessed Words',
   guessedWords: 'Guesses',
   matchingLettersColumnHeader: 'Matching Letters',
  },
  es: {
   congrats: 'Enhorabuena! Acertaste la palabra secreta',
   submit: 'Enviar',
   guessPrompt: 'Intenta adivinar la palabra secreta',
   guessInputPlaceholder: 'Introduce la palabra',
   guessedWords: 'Intentos',
   guessColumnHeader: 'Palabras intentadas',
   matchingLettersColumnHeader: 'Encontrando letras',
  }
}

function getStringByLanguage( languageCode, stringKey, strings= languageStrings){
  if(strings[languageCode] && strings[languageCode][stringKey]){
    return strings[languageCode][stringKey]
  }
  console.warn(`Could not get string [${stringKey}] for [${languageCode}]`)
  return strings.en[stringKey] 
}

export default {
  getStringByLanguage,
}