import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { timeMiddleWare } from './middlewares/time.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(timeMiddleWare)
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
