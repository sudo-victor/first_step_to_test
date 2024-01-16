
interface IUser {
  id: string;
  name: string
}

export class UserRepository {
  users: any = []

  save(name: string) {
    const user = {
      id: Math.random(),
      name
    }

    this.users.push(user)
  }

  list() {}

  getOne() {}

  delete() {}
}