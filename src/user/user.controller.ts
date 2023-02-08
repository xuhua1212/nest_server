/*
 * @Author: xuhua
 * @Date: 2023-02-07 17:39:12
 * @LastEditors: xuhua
 * @LastEditTime: 2023-02-08 11:31:05
 * @FilePath: /demo/src/user/user.controller.ts
 * @Description:  用户控制器
 */
import { Controller, Get, Post, Body, Patch, Param, Delete, Version, VERSION_NEUTRAL } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { BusinessException } from '@/common/exceptions/business.exception';
import { ConfigService } from '@nestjs/config';
@Controller({
  version: '1',
  path: 'user',
})
export class UserController {
  constructor(private readonly userService: UserService, private readonly configService: ConfigService) {}

  // 获取环境变量
  @Get('getTestName')
  getTestName() {
    return this.configService.get('TEST_VALUE').name;
  }

  @Get('getTestValue')
  getTestValue() {
    return this.configService.get('TEST_VALUE').test_value;
  }

  @Get('findBusinessError')
  findBusinessError() {
    const a: any = {};
    try {
      console.log(a.b.c);
    } catch (error) {
      throw new BusinessException('参数错了');
    }
    return this.userService.findAll();
  }
}
