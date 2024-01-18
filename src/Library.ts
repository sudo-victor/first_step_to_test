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
  list() {}
  getByCategory(category: string) {}
  allocateBook(customerName: string, bookId: string) {}
}