import { Request } from 'express';
import { TodoService } from 'src/todo/todo.service';
import { User } from 'src/types/user';
export declare class TodoResolver {
    private todoService;
    constructor(todoService: TodoService);
    getTodos({ req }: {
        req: Request & {
            user: User;
        };
    }): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        completed: boolean;
        userId: number;
    }[]>;
}
