import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

@Controller('book')
export class BookController {
    
    @Get()
    findAllUser(): string {
        return 'This API will return all books';
    }

    @Post()
    add(): string {
        return 'This API will create a new book';
    }
}