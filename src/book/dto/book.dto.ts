import { IsNumber, IsString } from "class-validator";

export class BookDto {
    @IsNumber()
    id: string;

    @IsString()
    title: string;
    
    author: string;
    Published: string;
}