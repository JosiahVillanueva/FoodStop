import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api');

  const options = new DocumentBuilder()
  .setTitle('Bookstore123')
  .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/bookstore', app, document);

  await app.listen(3000);
}
bootstrap();
