import { PrismaService } from 'src/prisma/prisma.service';
export declare class TodoService {
    private prisma;
    constructor(prisma: PrismaService);
    getTodos(userId: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        completed: boolean;
        userId: number;
    }[]>;
    createTodo(userId: number, data: {
        title: string;
    }): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        completed: boolean;
        userId: number;
    }>;
    markAsDone(todoId: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        completed: boolean;
        userId: number;
    }>;
}
