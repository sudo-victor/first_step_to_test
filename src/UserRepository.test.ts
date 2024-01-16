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