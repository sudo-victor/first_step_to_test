import { describe, test, expect } from "vitest"
import { UserRepository } from "./UserRepository"

describe("Save", () => {
  test("Deve ser capaz de salvar um usuário no array", () => {
    const userRepository = new UserRepository()
    const username = "Jose"

    userRepository.save(username)

    expect(userRepository.users).toHaveLength(1)
    expect(userRepository.users[0].name).toEqual("Jose")
  })
})

describe("List", () => {
  test("Deve ser capaz de listar os usuários", () => {
    // Preparaçao/Arrange/Given
    const repository = new UserRepository()
    repository.save("Victor")
    repository.save("Anderson")
    // Execuçao/Act/When
    const result = repository.list()
    // Validaçao/Assert/Then
    expect(result).toHaveLength(2)
  })
})

describe("GetOne", () => {
  test.only("Deve ser capaz de buscar um usuário por id", () => {
    const repository = new UserRepository()
    repository.save("Victor")
    const userId = repository.users[0].id
    const result = repository.getOne(userId)
    expect(result).toStrictEqual({ id: userId, name: "Victor" })
  })
})

describe("Delete", () => {
  test("deve ser capaz de remover um usuário", () => {
    const repository = new UserRepository()
    repository.save("Victor")
    const userId = repository.users[0].id

    repository.delete(userId)
    const user = repository.getOne(userId)

    expect(user).toBe(undefined)
    expect(repository.users).toHaveLength(0)
  })
})
