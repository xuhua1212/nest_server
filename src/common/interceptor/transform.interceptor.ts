/*
 * @Author: xuhua
 * @Date: 2023-02-07 17:55:13
 * @LastEditors: xuhua
 * @LastEditTime: 2023-02-07 18:22:31
 * @FilePath: /demo/src/common/interceptor/transform.interceptor.ts
 * @Description:  统一返回数据格式
 */
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Response<T> {
  data: T;
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
    return next.handle().pipe(map((data) => ({ data, status: 0, extra: {}, message: 'success', success: true })));
  }
}
