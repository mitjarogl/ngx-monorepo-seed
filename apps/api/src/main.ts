import { AppModule } from './app/app.module';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger, ValidationPipe } from '@nestjs/common';
import * as bodyParser from 'body-parser';
import { environment } from './environments/environment';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true })); // forbidUnknownValues
  app.use(bodyParser.json({ limit: '300mb' }));
  app.use(bodyParser.urlencoded({ limit: '300mb', extended: true }));
  const globalPrefix = 'v1';
  app.setGlobalPrefix(globalPrefix);
  // Swagger support
  if (process.env.NODE_ENV === 'development') {
    const options = new DocumentBuilder()
      .setTitle('API services')
      .setVersion('1.0')
      .setBasePath('v1')
      .addBearerAuth()
      .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('docs', app, document);
  }

  await app.listen(environment.port, () => {

    Logger.log(`Environment: ${environment.environment}`);
    Logger.log(`Listening at: ${environment.url}:${environment.port}/${globalPrefix}`);
  });
}

bootstrap();

