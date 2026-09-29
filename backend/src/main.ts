import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // libera acesso do app mobile (rede local)
  await app.listen(3000, '0.0.0.0');
  console.log('Backend rodando em http://0.0.0.0:3000');
}
bootstrap();
