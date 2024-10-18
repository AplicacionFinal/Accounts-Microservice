import { envs } from './config/envs';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import * as bodyParser from 'body-parser';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>
  (
    AppModule,
    {transport: Transport.NATS,
      options:{
        servers:envs.NATS_SERVERS
  }}
  );

  
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // solo se permiten los campos que están definidos explícitamente en el DTO.
    transform:true,
    forbidUnknownValues:true,
    //para habilitar la transformación
  }));

  await app.listen();

  Logger.log(`Microservice-Account listening NATS servers: ${envs.NATS_SERVERS}`);


  

}
bootstrap();
