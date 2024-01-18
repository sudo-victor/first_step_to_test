import { describe, it, expect } from "vitest"
import { Library } from "./Library"

// Quantidade de return e throw
// Quando um method/function nao tiver return/throw o cenário será o caso "feliz"

describe("Library -> SAVE", () => {
  it("Deve ser capaz de adicionar um livro no array", () => {
    // Preparaçao
    const library = new Library()
    const params = {
      title: "Pequeno principe",
      summary: "dfghjkl",
      authorName: "Anônimo",
      category: "fantasia"
    }
    // Execuçao
    library.save(params)
    // Validaçao
    const book = library.books[0]
    expect(library.books).toHaveLength(1)
    expect(book.title).toBe("Pequeno principe")
    expect(book.summary).toBe("dfghjkl")
    expect(book.authorName).toBe("Anônimo")
  })
})
