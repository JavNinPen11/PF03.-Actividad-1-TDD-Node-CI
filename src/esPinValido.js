function esPinValido(pin) {
    if (typeof pin !== 'string') {
    return false
  }

  const longitud = pin.length
  if (longitud !== 4 && longitud !== 6) {
    return false
  }

  for (let i = 0; i < longitud; i++) {
    const c = pin[i]
    if (c < '0' || c > '9') {
      return false
    }
  }

  let todosIguales = true
  for (let i = 1; i < longitud; i++) {
    if (pin[i] !== pin[0]) {
      todosIguales = false
      break
    }
  }

  if (todosIguales) {
    return false
  }

  return true
}

export {
    esPinValido
}

