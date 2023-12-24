import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) {}
    register(dto: AuthDto) {
        return 'register user';
    }

    login() {
        return 'login user';
    }
}
