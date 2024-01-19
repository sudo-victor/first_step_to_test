import { it, expect } from "vitest"
import { Localiza } from "./Localiza"
import { randomUUID } from "crypto"

it("should not be able to register customer with duplicated document", () => {
  const localiza = new Localiza()
  const customer = {
    id: randomUUID(),
    name: "Anderson",
    document: "12312312312",
    address: "Rua tal"
  }
  localiza.customers.push(customer)
  const result = localiza.registerCustomer(customer.name, customer.document, customer.address)
  expect(result).toBe("Customer already exists")
})

it("should be able to register a customer", () => {
  const localiza = new Localiza()
  localiza.registerCustomer("Jose", "32132132112", "Rua tal")
  // toHaveLength -> tamanho igual a ....
  expect(localiza.customers).toHaveLength(1)
  // to equal -> igual
  // to be -> seja -> 
  expect(localiza.customers[0].name).toEqual("Jose")
  expect(localiza.customers[0].document).toEqual("32132132112")
  expect(localiza.customers[0].address).toEqual("Rua tal")
})
