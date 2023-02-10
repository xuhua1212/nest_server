/*
 * @Author: xuhua
 * @Date: 2023-02-07 17:39:12
 * @LastEditors: xuhua
 * @LastEditTime: 2023-02-10 16:18:35
 * @FilePath: /demo/src/modules/user/user.module.ts
 * @Description:
 */
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
