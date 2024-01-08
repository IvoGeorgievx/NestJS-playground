import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TodoService {
    constructor(private prisma: PrismaService) {}

    async getTodos(userId: number) {
        const todos = await this.prisma.todo.findMany({
            where: {
                userId,
            },
        });
        return todos;
    }

    async createTodo(userId: number, data: { title: string }) {
        const todo = await this.prisma.todo.create({
            data: {
                ...data,
                userId,
            },
        });
        return todo;
    }

    async markAsDone(todoId: number) {
        const todo = await this.prisma.todo.update({
            where: {
                id: todoId,
            },
            data: {
                completed: true,
            },
        });
        return todo;
    }
}
