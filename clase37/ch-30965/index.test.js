const message = require('./index')

test('return a valid greeting', () => {
  expect(message('Test')).toBe('Hola Test desde el módulo modificado.')
})