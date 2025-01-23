import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import {
  UserTimeMiddleWare,
  deleteMiddleWare,
  halfMiddleWare,
} from 'src/middlewares/userTime.middleware';

@Module({
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(UserTimeMiddleWare)
      // .exclude({ path: 'posts', method: RequestMethod.POST })
      .forRoutes({ path: 'posts', method: RequestMethod.ALL });

    consumer
      .apply(halfMiddleWare)
      .forRoutes({ path: 'posts', method: RequestMethod.ALL });
      consumer
      .apply(deleteMiddleWare)
      .forRoutes({ path: 'posts', method: RequestMethod.DELETE });
  }
}
