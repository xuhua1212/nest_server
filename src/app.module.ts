/*
 * @Author: xuhua
 * @Date: 2023-02-07 17:27:34
 * @LastEditors: xuhua
 * @LastEditTime: 2023-02-08 10:20:27
 * @FilePath: /demo/src/app.module.ts
 * @Description:  项目入口文件
 */
import { Module, CacheModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { getConfig } from './utils';
@Module({
  imports: [
    CacheModule.register({ isGlobal: true }),
    ConfigModule.forRoot({ ignoreEnvFile: true, isGlobal: true, load: [getConfig] }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
