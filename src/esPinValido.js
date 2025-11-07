function esPinValido(pin) {
if (typeof pin !== 'string') return false

  const longitud = pin.length

  if (longitud !== 4 && longitud !== 6) return false

  for (let i = 0; i < longitud; i++) {
    const caracter = pin[i]
    if (caracter < '0' || caracter > '9') return false
  }

  const primerCaracter = pin[0]
  let iguales = true
  for (let i = 1; i < longitud; i++) {
    if (pin[i] !== primerCaracter) {
      iguales = false
      break
    }
  }

  if (iguales) return false

  return true
}

export {
    esPinValido
}

