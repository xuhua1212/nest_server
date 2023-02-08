/*
 * @Author: xuhua
 * @Date: 2023-02-07 18:02:53
 * @LastEditors: xuhua
 * @LastEditTime: 2023-02-07 18:22:24
 * @FilePath: /demo/src/common/exceptions/base.exception.filter.ts
 * @Description:  处理统一异常,异常过滤器
 */
import { FastifyReply, FastifyRequest } from 'fastify';

import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
  ServiceUnavailableException,
  HttpException,
} from '@nestjs/common';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<FastifyReply>();
    const request = ctx.getRequest<FastifyRequest>();

    request.log.error(exception);

    // 非Http标准异常的处理
    response.status(HttpStatus.SERVICE_UNAVAILABLE).send({
      statusCode: HttpStatus.SERVICE_UNAVAILABLE,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: new ServiceUnavailableException().getResponse(),
    });

    // const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

    // response.status(status).send({
    //   statusCode: status,
    //   timestamp: new Date().toISOString(),
    //   path: request.url,
    //   message: exception instanceof ServiceUnavailableException ? '服务不可用' : exception,
    // });
  }
}
