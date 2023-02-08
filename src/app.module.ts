/*
 * @Author: xuhua
 * @Date: 2023-02-07 17:27:34
 * @LastEditors: xuhua
 * @LastEditTime: 2023-02-08 09:29:22
 * @FilePath: /demo/src/app.module.ts
 * @Description:  项目入口文件
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { getConfig } from './utils';
@Module({
  imports: [ConfigModule.forRoot({ ignoreEnvFile: true, isGlobal: true, load: [getConfig] }), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
