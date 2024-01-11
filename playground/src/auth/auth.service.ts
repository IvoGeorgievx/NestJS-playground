import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';

import { AuthDto } from './dto';

@Injectable()
export class AuthService {
    saltRounds = 10;
    constructor(
        private prisma: PrismaService,
        private jwt: JwtService,
        private config: ConfigService,
    ) {}
    async register(dto: AuthDto) {
        const hash = await bcrypt.hash(dto.password, this.saltRounds);
        try {
            const user = await this.prisma.user.create({
                data: {
                    email: dto.email,
                    hash,
                },
            });
            const token = await this.signToken(user.id, user.email);
            return {
                token: token,
            };
        } catch (error) {
            if (error.code === 'P2002') {
                // P2002 = unique constraint failed
                throw new ForbiddenException('Email already exists');
            }
        }
    }

    async login(dto: AuthDto) {
        const user = await this.prisma.user.findUnique({
            where: {
                email: dto.email,
            },
        });
        if (!user) {
            throw new ForbiddenException('Wrong email or password');
        }
        const isPasswordValid = await bcrypt.compare(dto.password, user.hash);
        if (!isPasswordValid) {
            throw new ForbiddenException('Wrong email or password');
        }
        const token = await this.signToken(user.id, user.email);
        return {
            token: token,
        };
    }

    async signToken(userId: number, email: string): Promise<string> {
        const payload = {
            sub: userId,
            email,
        };
        const secret = this.config.get('JWT_SECRET');

        return this.jwt.signAsync(payload, {
            expiresIn: '1d',
            secret: secret,
        });
    }
}
