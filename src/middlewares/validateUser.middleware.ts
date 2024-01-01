import {
    BadRequestException,
    Injectable,
    NestMiddleware,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ValidateUserMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const { email, password } = req.body;
        if (
            !email ||
            typeof email !== 'string' ||
            !password ||
            typeof password !== 'string'
        ) {
            throw new BadRequestException(
                'Please enter a valid username and password',
            );
        }
        next();
    }
}
