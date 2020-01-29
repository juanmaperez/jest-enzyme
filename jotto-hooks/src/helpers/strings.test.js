import stringsModule from './strings'
const { getStringByLanguage } = stringsModule

const strings = {
  en: { submit: 'submit' },
  es: { submit: 'enviar' },
  mermish: {}
}

describe('language string testing', () => {
  let mockWarn = jest.fn()
  let originalWarn
  beforeEach(() => {
    // we need to save the console.warn to restore it as it was before 
    // for getting the warning in the future instead of a mock function
    originalWarn = console.warn
    console.warn = mockWarn
  })
  afterEach(() => {
    console.warn = originalWarn
  })
  test('it get the correct submit string for english', () => {

    const string = getStringByLanguage('en', 'submit', strings)
    expect(string).toBe(strings.en.submit)
    expect(mockWarn).not.toHaveBeenCalled()
  })
  
  test('it get the correct submit string for spanish', () => {
    
    const string = getStringByLanguage('es', 'submit', strings)
    expect(string).toBe(strings.es.submit) 
    expect(mockWarn).not.toHaveBeenCalled() 
  })
  
  test('it get the correct submit string if language doesnt exist', () => {
    
    const string = getStringByLanguage('it', 'submit', strings)
    expect(string).toBe(strings.en.submit)
    expect(mockWarn).toHaveBeenCalledWith(`Could not get string [submit] for [it]`)
  })
  
  test('it returns the correct submit string if the key doesnt exist', () => {
  
    const string = getStringByLanguage('mermish', 'submit', strings)
    expect(string).toBe(strings.en.submit)
    expect(mockWarn).toHaveBeenCalledWith(`Could not get string [submit] for [mermish]`)
  })
})


