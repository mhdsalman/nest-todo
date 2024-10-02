import { Injectable } from "@nestjs/common";
import { BookDto } from "./dto/book.dto";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BookService {
    public books: BookDto[] = []


    // add book
    addBookService(book: BookDto): string {
        book.id = uuidv4();
        this.books.push(book);
        return 'Book has been added successfully';
    }
    // update book
    updateBookService(book: BookDto): string {
        let index  = this.books.findIndex(b => b.id == book.id);
        this.books[index] = book;
        return 'Book has been updated successfully';
    }
    // delete book
    deleteBookService(id: string): string {
        console.log(id);
        console.log(this.books);

        this.books  = this.books.filter(b => b.id !== id);
        console.log(this.books);
        return 'Book has been deleted successfully';
    }
    // find all book
    findAllBookService(): BookDto[] {
        return this.books;
    }
}