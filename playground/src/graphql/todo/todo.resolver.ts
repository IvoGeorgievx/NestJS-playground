import { Request } from 'express';
import { Context, Query, Resolver } from '@nestjs/graphql';
import { Todo } from './todo.schema';
import { TodoService } from 'src/todo/todo.service';
import { User } from 'src/types/user';

@Resolver((of: () => Todo) => Todo)
export class TodoResolver {
    constructor(private todoService: TodoService) {}

    @Query((returns) => [Todo])
    async getTodos(@Context() { req }: { req: Request & { user: User } }) {
        // undefined req.user????
        console.log(req.user);
        // ???
        const userId = 14;
        return this.todoService.getTodos(userId);
    }
}
