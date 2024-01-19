import { describe, it, expect } from "vitest"
import { Localiza } from "./Localiza"
import { randomUUID } from "crypto"

describe("Register Customer", () => {

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
})

describe("Rent", () => {
  it("should not be able to rent a car if car does not exists", () => {
    const localiza = new Localiza()
    const result = localiza.rent("customer_id", "id-falso", "asdasd")
    expect(result).toBe("Car is not available")
  })

  it("should be able to rent a car", () => {
    const localiza = new Localiza()
    const car = {
      id: randomUUID(),
      releasedAt: 2022,
      color: "cinza",
      plate: "AAA9999",
      model: "Stepway",
      brand: "Renault",
      price: 200,
      description: "asdasdasd",
      status: "available"
    }
    localiza.cars.push(car)
    localiza.rent("customer-id", car.id, "employee-id")
    expect(localiza.cars[0].status).toBe("rented")
    expect(localiza.rents).toHaveLength(1)
  })
})