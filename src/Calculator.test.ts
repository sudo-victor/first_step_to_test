import { test, expect, describe } from "vitest"
import { Calculator } from "./Calculator"

describe("Sum", () => {
  test("Deve ser possível lançar um erro se os parametros nao forem positivos", () => {
    // Preparar
    const calculator = new Calculator()
    const x = -2
    const y = -10

    // Executar
    const result = calculator.sum(x, y)

    // Validar
    expect(result).toEqual("Params must be positive")
  })

  test("Deve ser possível somar 3 mais 5 e retornar 8", () => {
    const calculator = new Calculator()
    const x = 3
    const y = 5

    const result = calculator.sum(x, y)

    expect(result).toEqual(8)
  })
})

describe("Multiply", () => {
  test("Deve ser possível multiplicar 3 vezes 3 e retornar 9", () => {
    const calculator = new Calculator()
    const x = 3
    const y = 3
    const result = calculator.multiply(x, y)
    expect(result).toEqual(9)
  })
  test("Nao deve ser possível multiplicar passando um número negativo", () => {
    const calculator = new Calculator()
    const x = -3
    const y = 3
    const result = calculator.multiply(x, y)
    expect(result).toEqual("Params must be positive")
  })
})

describe("Division", () => {
  test("Deve ser possivel dividir", () => {
    const calculator = new Calculator()
    const x = 100
    const y = 4
    const result = calculator.division(x,y)
    expect(result).toEqual(25)
  })

  test("Nao deve ser possivel dividir com números negativos", () => {
    const calculator = new Calculator()
    const x = -100
    const y = 4
    const result = calculator.division(x,y)
    expect(result).toEqual("Params must be positive")
  })
})