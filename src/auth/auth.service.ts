import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) {}
    async register(dto: AuthDto) {
        const hash = await argon.hash(dto.password);
        try {
            const user = await this.prisma.user.create({
                data: {
                    email: dto.email,
                    hash,
                },
            });
            delete user.hash;
            return user;
        } catch (error) {
            if (error.code === 'P2002') {
                // P2002 = unique constraint failed
                throw new ForbiddenException('Email already exists');
            }
        }
    }

    login() {
        return 'login user';
    }
}
