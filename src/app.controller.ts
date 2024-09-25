import { Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";


@Controller('book')
export class BookController {
    

    // add book

    @Post("/add")
    addBook(): string{
        return 'add book'
    }

    // delete book

    @Delete("/delete")
    deleteBook(): string{
        return 'delete book'
    }

    // update book

    @Put("/update")
    updateBook(): string{
        return 'update book'
    }

    // get book 

    @Get("/get")
    getBook(): string{
        return 'get book'
    }

    @Get(':id')
findOne(@Param() params: any): string {
  console.log(params.id);
  return `This action returns a #${params.id} cat`;
}
}