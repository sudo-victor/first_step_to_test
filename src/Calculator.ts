export class Calculator {
  sum(x: number, y: number) {
    if (x < 0 || y < 0) {
      return "Params must be positive"
    }

    return x + y
  }

  multiply(x: number, y: number) {
    if (x < 0 || y < 0) {
      return "Params must be positive"
    }

    return x * y
  }

  division(x: number, y: number) {
    if (x < 0 || y < 0) {
      return "Params must be positive"
    }
    
    return x / y
  }
}