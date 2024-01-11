import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { AuthDto } from './dto';
export declare class AuthService {
    private prisma;
    private jwt;
    private config;
    saltRounds: number;
    constructor(prisma: PrismaService, jwt: JwtService, config: ConfigService);
    register(dto: AuthDto): Promise<{
        token: string;
    }>;
    login(dto: AuthDto): Promise<{
        token: string;
    }>;
    signToken(userId: number, email: string): Promise<string>;
}
