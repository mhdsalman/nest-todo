import { BadRequestException, Controller, Get } from "@nestjs/common";
import { BookException } from "./book.exception";

@Controller('book')
export class BookController {

    @Get('')
    getBook(): string {
        throw new BookException()
        return 'This API will return all books';
    }
}