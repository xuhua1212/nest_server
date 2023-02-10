/*
 * @Author: xuhua
 * @Date: 2023-02-10 15:29:48
 * @LastEditors: xuhua
 * @LastEditTime: 2023-02-10 15:29:57
 * @FilePath: /demo/src/app.controller.spec.ts
 * @Description:
 */
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {});
  });
});
