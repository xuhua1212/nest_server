/*
 * @Author: xuhua
 * @Date: 2023-02-07 18:03:09
 * @LastEditors: xuhua
 * @LastEditTime: 2023-02-08 10:25:42
 * @FilePath: /demo/src/common/exceptions/http.exception.filter.ts
 * @Description:  处理请求异常,异常过滤器
 */
import { FastifyReply, FastifyRequest } from 'fastify';
import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { BusinessException } from './business.exception';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<FastifyReply>();
    const request = ctx.getRequest<FastifyRequest>();
    const status = exception.getStatus();

    // 处理http异常前先处理业务异常
    if (exception instanceof BusinessException) {
      const error = exception.getResponse();
      response.status(HttpStatus.OK).send({
        data: null,
        code: error['code'],
        extra: {},
        message: error['message'],
        success: false,
      });
    }

    response.status(status).send({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: exception.getResponse(),
    });
  }
}
