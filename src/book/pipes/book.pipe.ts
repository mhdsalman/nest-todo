import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { BookDto } from "../dto/book.dto";
import { validate } from "class-validator";

export class BookPipe implements PipeTransform {
    async transform(value: any, metadata: ArgumentMetadata): Promise<any> {


        // Convert obj into class
        const bookClass = plainToInstance(BookDto, value);

        // class validation
        const errors = await validate(bookClass)

        if(errors.length > 0){
            throw new BadRequestException('Validation failed'  + JSON.stringify(errors));
        }
        console.log(value, typeof value);

        return value
    }
}