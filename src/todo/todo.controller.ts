import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { Request } from 'express';
import { JwtGuard } from 'src/auth/guard';

@Controller('todos')
export class TodoController {
    @UseGuards(JwtGuard)
    @Get('mine')
    getMine(@Req() req: Request) {
        return req.user;
    }
}
