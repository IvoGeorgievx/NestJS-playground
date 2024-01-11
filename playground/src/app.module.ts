import { ConfigModule } from '@nestjs/config';
import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { DevtoolsModule } from '@nestjs/devtools-integration';
import { LoggerMiddleware } from 'src/middlewares/logger.middleware';
import { ValidateUserMiddleware } from 'src/middlewares/validateUser.middleware';
import { AuthMiddleware } from 'src/middlewares/auth.middleware';

import { protectedRoutes } from './protected.routes';
import { TodoModule } from './todo/todo.module';
import { GraphqlModule } from './graphql/graphql.module';

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
        TodoModule,
        GraphqlModule,
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
