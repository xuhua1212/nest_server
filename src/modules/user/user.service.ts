/*
 * @Author: xuhua
 * @Date: 2023-02-07 17:39:12
 * @LastEditors: xuhua
 * @LastEditTime: 2023-02-10 18:29:16
 * @FilePath: /demo/src/modules/user/user.service.ts
 * @Description:
 */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  getList(): Promise<User[]> {
    console.log('UserService ~ createOrSave ~ user', this.usersRepository);
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<User> {
    return this.usersRepository.findOne(id as any);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  createOrSave(user: User) {
    return this.usersRepository.insert(user);
  }
}
