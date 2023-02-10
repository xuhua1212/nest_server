/*
 * @Author: xuhua
 * @Date: 2023-02-07 17:39:12
 * @LastEditors: xuhua
 * @LastEditTime: 2023-02-10 18:24:16
 * @FilePath: /demo/src/modules/user/user.controller.ts
 * @Description:  用户控制器
 */
import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { User } from './user.entity';

@ApiTags('用户')
@Controller({ path: 'user' })
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: '查询用户列表' })
  @Get()
  getUserList() {
    return this.userService.getList();
  }

  @ApiOperation({ summary: '查询用户详情' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @ApiOperation({ summary: '添加用户' })
  @Post()
  create(@Body() body: User) {
    console.log('UserController ~ create ~ user', body);
    // return `1111${body.username}---${body.password}`;
    return this.userService.createOrSave(body);
  }

  @ApiOperation({ summary: '删除用户' })
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
