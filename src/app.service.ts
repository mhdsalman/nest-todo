import { Injectable } from "@nestjs/common";

@Injectable()
export class BookService {
  // add book

  addBook(): string {
    return 'add book';
  }

  // delete book

  deleteBook(): string {
    return 'delete book';
  }

  // update book

  updateBook(): string {
    return 'update book';
  }

  // get book

  getBook(): string {
    return 'get book';
  }
}
