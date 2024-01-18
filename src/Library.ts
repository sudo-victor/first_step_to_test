import { randomUUID } from "crypto";

interface IBook {
  id: string;
  title: string;
  summary: string;
  authorName: string;
  category: string;
  status: string
  customerName?: string
}

interface ISaveBook {
  title: string;
  summary: string;
  authorName: string;
  category: string;
}

export class Library {
  books: IBook[] = []

  save(book: ISaveBook) {
    const data = {
      ...book,
      id: randomUUID(),
      status: "available",
    }
    this.books.push(data)
  }

  list() {
    return this.books
  }

  getByCategory(category: string) {
    return this.books.filter((item) => item.category === category)
  }

  allocateBook(customerName: string, bookId: string) {
    const book = this.books.find((item) => item.id === bookId)
    if (!book) {
      return "Book not found"
    }

    book.customerName = customerName
    book.status = "allocated"
  }
}