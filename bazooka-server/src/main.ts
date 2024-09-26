import { NestFactory } from '@nestjs/core';
import { ValidationPipe,VersioningType } from '@nestjs/common';
import { AppModule } from './app.module';
import { SwaggerModule,DocumentBuilder } from '@nestjs/swagger';
require('dotenv').config();


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
  .setTitle('Brokie-Launchpad')
  .setDescription('API document for Brokie-Launchpad')
  .setVersion('1.0')
  .addTag('Auth')
  .addServer('http://localhost:3002','local environment')
  .addBearerAuth()
  .addSecurity('apiKey',{
    type:'apiKey',
    in:'header',
    name:'x-api-key'
  })
  .addSecurity('clientId',{
    type:'apiKey',
    in:'header',
    name:'x-client-id'
  })
  .build();

  const document = SwaggerModule.createDocument(app,options);
  SwaggerModule.setup('api',app,document);

  app.enableVersioning({
    type:VersioningType.URI,
    defaultVersion:'1'
  })
  app.enableCors({
    origin: '*', // Allow all origins
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS', // Allowed methods
    allowedHeaders:
      'Content-Type,Accept,x-api-key,x-client-id', // Allowed headers including Authorization for Bearer tokens
    // credentials: true, // Support credentials
  });
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(4004);
}
bootstrap();
