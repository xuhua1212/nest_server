/*
 * @Author: xuhua
 * @Date: 2023-02-07 17:39:12
 * @LastEditors: xuhua
 * @LastEditTime: 2023-02-08 10:19:46
 * @FilePath: /demo/src/user/user.module.ts
 * @Description:
 */
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
