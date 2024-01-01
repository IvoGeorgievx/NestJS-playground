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
}
