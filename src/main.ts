/*
 * @Author: xuhua
 * @Date: 2023-02-07 17:27:34
 * @LastEditors: xuhua
 * @LastEditTime: 2023-02-10 17:38:40
 * @FilePath: /demo/src/main.ts
 * @Description:  项目入口文件
 */

declare const module: any;

// 统一版本管理
import { VersioningType, VERSION_NEUTRAL } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
// 统一返回数据格式
import { TransformInterceptor } from './common/interceptor/transform.interceptor';

// 处理统一异常
import { AllExceptionsFilter } from './common/exceptions/base.exception.filter';
// 处理请求异常
import { HttpExceptionFilter } from './common/exceptions/http.exception.filter';

import { generateDocument } from './doc';

import { AppModule } from './app.module';
async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  // 使用 Fastify 作为底层框架
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());

  // 统一返回数据格式
  app.useGlobalInterceptors(new TransformInterceptor());

  // 处理统一异常
  app.useGlobalFilters(new AllExceptionsFilter(), new HttpExceptionFilter());

  // 接口版本管理 v1/v2
  app.enableVersioning({
    defaultVersion: [VERSION_NEUTRAL],
    // defaultVersion: '1',
    type: VersioningType.URI,
  });

  // 生成接口文档
  generateDocument(app);

  // 热更新
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
  await app.listen(8080);
}
bootstrap();
