import { randomUUID } from "crypto";

// Cliente
interface ICustomer {
  id: string;
  name: string;
  document: string;
  address: string;
}

// Funcionario
interface IEmployee {
  code: string;
  name: string;
}

interface ICar {
  id: string;
  releasedAt: number;
  color: string;
  plate: string;
  model: string;
  brand: string;
  price: number;
  description: string;
  status: string;
}

interface IRent {
  customerId: string;
  cardId: string;
  employeeCode: string;
}

export class Localiza {
  customers: ICustomer[] = []
  employees: IEmployee[] = []
  cars: ICar[] = []
  rents: IRent[] = []

  registerCustomer(name: string, document: string, address: string) {
    const customerAlreadyExists = this.customers.find((customer) => customer.document === document)
    if (customerAlreadyExists) {
      return "Customer already exists"
    }

    const customer = {
      id: randomUUID(),
      name,
      document,
      address,
    }

    this.customers.push(customer)
  }

  registerEmployee() {}

  registerCar() {}

  rent() {}

  listAvailableCars() {}

}