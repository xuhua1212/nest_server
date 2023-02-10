/*
 * @Author: xuhua
 * @Date: 2023-02-07 17:27:34
 * @LastEditors: xuhua
 * @LastEditTime: 2023-02-10 17:47:37
 * @FilePath: /demo/src/app.module.ts
 * @Description:  项目入口文件
 */
import { Module, CacheModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './modules/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { getConfig } from './utils';
import { User } from './modules/user/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'xuhua1212',
      database: 'nest_demo',
      entities: [User],
      synchronize: true,
    }),
    CacheModule.register({
      isGlobal: true,
      store: getConfig('REDIS_CONFIG').host,
      port: getConfig('REDIS_CONFIG').port,
      auth_path: getConfig('REDIS_CONFIG').auth,
      db: getConfig('REDIS_CONFIG').db,
    }),
    ConfigModule.forRoot({ ignoreEnvFile: true, isGlobal: true, load: [getConfig] }),
    UserModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
