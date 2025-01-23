import {
  BadGatewayException,
  BadRequestException,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
@Injectable()
export class UserTimeMiddleWare implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const time = new Date();
    const Hour = time.getHours();
    console.log(Hour);
    if (Hour >= 10 && Hour < 18) {
      next();
    } else {
      throw new BadRequestException('request only allowed from 10 to 18');
    }
  }
}
@Injectable()
export class halfMiddleWare implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const randomNumber = Math.random() * 100;
    if (randomNumber < 50) {
      next();
    } else {
      throw new BadRequestException('bad requestssssss');
    }
  }
}
@Injectable()
export class deleteMiddleWare implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const header = req.headers['delete'];
    if (!header) {
      throw new BadGatewayException('please add header');
    } else {
      next();
    }
  }
}
