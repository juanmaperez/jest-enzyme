/**
 * @method getLetterMatchCount
 * @param {string} guessedWord 
 * @param {string} secretWord
 * @returns {number} 
 */
export const getLetterMatchCount = (guessedWord, secretWord) => {
  const matches = guessedWord.split('').reduce((acc,letter) => {
    const index = secretWord.indexOf(letter);
    if( index >= 0 && !acc[index]){
      acc[index] = 1
    }
    return acc;
  }, {})
  return Object.keys(matches).length
}