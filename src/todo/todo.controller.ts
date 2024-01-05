import { Controller, Get, Put, Req, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { TodoService } from './todo.service';
import { Request } from 'express';

import { User } from 'src/types/user';

@Controller('todos')
export class TodoController {
    constructor(private todoService: TodoService) {}

    @UseGuards(JwtGuard)
    @Get('mine')
    getMine(@Req() req: Request & { user: User }) {
        const userId = req.user.id;
        return this.todoService.getTodos(userId);
    }

    @UseGuards(JwtGuard)
    @Put(':id')
    markAsDone(@Req() req: Request, todoId: number) {
        return this.todoService.markAsDone(todoId);
    }
}
