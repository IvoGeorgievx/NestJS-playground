import {
    Controller,
    Get,
    Param,
    Post,
    Put,
    Req,
    UseGuards,
} from '@nestjs/common';
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

    // @UseGuards(JwtGuard)
    @Put(':id')
    markAsDone(
        @Req() req: Request & { user: User },
        @Param('id') todoId: string,
    ) {
        return this.todoService.markAsDone(+todoId);
    }

    @UseGuards(JwtGuard)
    @Post('create')
    createTodo(@Req() req: Request & { user: User }) {
        console.log(req.user.id);
        const userId = req.user.id;
        const { title } = req.body;
        return this.todoService.createTodo(userId, { title });
    }
}
