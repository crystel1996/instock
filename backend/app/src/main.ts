import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {

  const app = await NestFactory.create(AppModule, { cors: true });

  const configService = app.get(ConfigService);

  const corsOptions: CorsOptions = {
    origin: [configService.get('FRONTEND_URL')],
    methods: ['GET','HEAD','PUT','PATCH','POST','DELETE'],
    allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'Authorization'],
    exposedHeaders: ['Authorization'],
    credentials: true,
  };

  app.enableCors(corsOptions);

  await app.listen(configService.get('PORT'));
}
bootstrap();
