import { ConfigModule } from '@nestjs/config';
import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { DevtoolsModule } from '@nestjs/devtools-integration';
import { LoggerMiddleware } from 'middlewares/logger.middleware';
import { ValidateUserMiddleware } from 'middlewares/validateUser.middleware';
import { AuthMiddleware } from 'middlewares/auth.middleware';

import { protectedRoutes } from './protected.routes';

@Module({
    imports: [
        DevtoolsModule.register({
            http: process.env.NODE_ENV !== 'production',
        }),
        AuthModule,
        UserModule,
        PrismaModule,
        ConfigModule.forRoot({
            isGlobal: true,
        }),
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware).forRoutes({
            path: '*',
            method: RequestMethod.ALL,
        });

        consumer.apply(ValidateUserMiddleware).forRoutes({
            path: 'auth/login',
            method: RequestMethod.POST,
        });
        consumer.apply(AuthMiddleware).forRoutes(...protectedRoutes);
    }
}
