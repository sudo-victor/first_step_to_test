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
  carId: string;
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

  registerEmployee(name: string) {
    const employee = {
      name,
      code: randomUUID()
    }

    this.employees.push(employee)
  }

  registerCar(data: Omit<ICar, "id" & "status">) {
    const car = {
      ...data,
      id: randomUUID(),
      status: "available"
    }

    this.cars.push(car)
  }

  rent(customerId: string, carId: string, employeeCode: string) {
    const car = this.cars.find((car) => car.id === carId && car.status === "available")
    if(!car) {
      return "Car is not available"
    }

    car.status = "rented"
    const rent = {
      customerId,
      carId,
      employeeCode
    }
    this.rents.push(rent)
  }

  listAvailableCars() {
    return this.cars.filter(car => car.status === "available")
  }

}