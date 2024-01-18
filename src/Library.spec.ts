import { describe, it, expect, beforeEach } from "vitest"
import { Library } from "./Library"

// Quantidade de return e throw

// Quando um method/function nao tiver return/throw o cenário será o caso "feliz"

beforeEach(() => {
  console.log("beforeEach")
})

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

describe("Library -> LIST", () => {
  it("Deve ser capaz de listar os livros cadastrados", () => {
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
    library.save(params)
    // Validaçao
    expect(library.books).toHaveLength(2)
  })
})

describe("Library -> GET BY CATEGORY", () => {
  it("Deve ser capaz de listar os livros cadastrados de uma categoria especifica", () => {
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
    library.save(params)
    library.save({ ...params, category: "horror" })
    const result = library.getByCategory("fantasia")
    // Validaçao
    expect(result).toHaveLength(2)
  })
})

describe("Library -> ALLOCATE BOOK", () => {
  it("Deve ser capaz de alocar um livro para um cliente", () => {
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
    const bookId = library.books[0].id
    library.allocateBook("Victor", bookId)
    // Validaçao
    const book = library.books[0]
    expect(book.status).toBe("allocated")
    expect(book.customerName).toBe("Victor")
  })
})

