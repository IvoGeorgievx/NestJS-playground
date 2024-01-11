import { TodoService } from './todo.service';
import { Request } from 'express';
import { User } from 'src/types/user';
export declare class TodoController {
    private todoService;
    constructor(todoService: TodoService);
    getMine(req: Request & {
        user: User;
    }): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        completed: boolean;
        userId: number;
    }[]>;
    markAsDone(req: Request & {
        user: User;
    }, todoId: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        completed: boolean;
        userId: number;
    }>;
    createTodo(req: Request & {
        user: User;
    }): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        completed: boolean;
        userId: number;
    }>;
}
