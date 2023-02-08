/*
 * @Author: xuhua
 * @Date: 2023-02-08 09:42:39
 * @LastEditors: xuhua
 * @LastEditTime: 2023-02-08 09:46:40
 * @FilePath: /demo/src/doc.ts
 * @Description: swagger Api
 */
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as packageConfig from '../package.json';

export const generateDocument = (app) => {
  const options = new DocumentBuilder()
    .setTitle(packageConfig.name)
    .setDescription(packageConfig.description)
    .setVersion(packageConfig.version)
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/api/doc', app, document);
};
