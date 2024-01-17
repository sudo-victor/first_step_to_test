
interface IUser {
  id: string;
  name: string
}

export class UserRepository {
  users: IUser[] = []

  save(name: string) {
    const user = {
      id: String(Math.random()),
      name
    }

    this.users.push(user)
  }

  list() {
    return this.users
  }

  getOne(id: string) {
    return this.users.find((user) => user.id === id)
  }

  delete(id: string) {
    const index = this.users.findIndex((user) => user.id === id)
    if (index < 0) {
      return "User not found"
    }
    this.users.splice(index, 1)
  }
}