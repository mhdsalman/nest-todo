import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, ValidationPipe } from "@nestjs/common";
import { BookService } from "./book.service";
import { BookDto } from "./dto/book.dto";

@Controller('book')
export class BookController {

    constructor(private bookService: BookService) {}

    // add book
    @Get('/findAll')
    getAllBook(): BookDto[] {
        return this.bookService.findAllBookService();
    }

    // update book
    @Put('/update')
    updateBook(@Body() book: BookDto): string {
        return this.bookService.updateBookService(book);
    }

    // delete book
    @Delete('/delete/:id')
    deleteBook(@Param() bookId: string): string {
        return this.bookService.deleteBookService(bookId);
    }

    // add book
    @Post('/add')
    addBook(@Body() book: BookDto): string {
        return this.bookService.addBookService(book);
    }

    // Pipes
    @Get('/:id')
    getPipes(@Param('id', ParseIntPipe) id: BookDto): string {
        console.log(id, typeof id);
        return 'Get Pipes id'
    }

    @Post('addPipes')
    postPipes(@Body(new ValidationPipe) book: BookDto): string {
        console.log(book, typeof book);
        return 'Post Pipes id'
    }

    
}