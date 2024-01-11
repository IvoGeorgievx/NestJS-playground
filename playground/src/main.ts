import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        snapshot: true,
    });
    app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
    app.enableCors();
    await app.listen(3007);
}
bootstrap();
