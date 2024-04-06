import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { AppConfig } from './app.types';
import * as Config from 'config';

async function bootstrap(config: AppConfig) {
  const fastifyAdapter = new FastifyAdapter({ logger: true });

  // Utilise le nouveau paquet @fastify/cors
  await fastifyAdapter.register(import('@fastify/cors'), {
    // Configure CORS ici
    origin: 'http://localhost:4200',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    fastifyAdapter,
  );

  await app.listen(config.port, config.host);

  Logger.log(
    `Application served at http://${config.host}:${config.port}`,
    'bootstrap',
  );
}

bootstrap(Config.get<AppConfig>('server'));
