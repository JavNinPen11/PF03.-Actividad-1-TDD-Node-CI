import {describe, it, expect} from 'vitest';
import {fibonacci} from '../src/fibonacci.js';

describe('Secuencia de fibonacci', () => {
    it('numero negativo', () => {
        expect(() => fibonacci(-1)).toThrow(RangeError)
        expect(() => fibonacci(-1)).toThrow("Solo numeros enteros >= a 0")
    })
    it('devolver cero', () => {
        expect(() => fibonacci(0)).toBe(0)
        expect(() => fibonacci(0)).toThrow("Debe devolver cero si la entrada es cero")
    })
    it('devolver 1', () => {
        expect(() => fibonacci(1)).toBe(1)
        expect(() => fibonacci(1)).toThrow("Debe devolver 1 si la entrada es 1")
    })
    it('Para n ≥ 2 f(n) = f(n-1) + f(n-2', () => {
        expect(() => fibonacci(2)).toBe(fibonacci(1) + fibonacci(0))
        expect(() => fibonacci(4)).toBe(fibonacci(3) + fibonacci(2))
        expect(() => fibonacci(10)).toBe(55)
    })
})
