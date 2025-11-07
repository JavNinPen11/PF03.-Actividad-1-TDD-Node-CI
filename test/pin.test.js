import { describe, it, expect } from 'vitest'
import { esPinValido } from '../src/esPinValido.js'

describe('Validación de PIN', () => {
  it('rechaza null, undefined o vacío', () => {
    expect(esPinValido(null)).toBe(false)
    expect(esPinValido(undefined)).toBe(false)
    expect(esPinValido('')).toBe(false)
  })

  it('solo acepta longitud 4 o 6', () => {
    expect(esPinValido('123')).toBe(false)
    expect(esPinValido('12345')).toBe(false)
    expect(esPinValido('1234')).toBe(true)
    expect(esPinValido('123456')).toBe(true)
  })

  it('solo acepta dígitos del 0 al 9', () => {
    expect(esPinValido('12a4')).toBe(false)
    expect(esPinValido('12 4')).toBe(false)
    expect(esPinValido('１２３４')).toBe(false) 
  })

  it('no permite todos los dígitos iguales', () => {
    expect(esPinValido('1111')).toBe(false)
    expect(esPinValido('888888')).toBe(false)
  })

  it('acepta ejemplos válidos', () => {
    expect(esPinValido('0123')).toBe(true)
    expect(esPinValido('987654')).toBe(true)
  })
})