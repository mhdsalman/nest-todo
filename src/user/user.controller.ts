import { Controller, Get, Post } from "@nestjs/common";

@Controller('users')
export class UserController {
    constructor() {}

    @Get()
    findAllUser(): string {
        return 'This API will return all users';
    }

    @Post()
    createUser(): string {
        return 'This API will create a new user';
    }
}