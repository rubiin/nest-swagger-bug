import {
  Entity,
  EntityRepositoryType,
  Filter,
  Property,
  Repository,
  Unique,
  wrap,
} from '@mikro-orm/core';
import { EntityRepository } from '@mikro-orm/mongodb';
import { HttpException, HttpStatus } from '@nestjs/common';
import { CommonEntity } from 'src/entities/common.entity';

@Entity()
export class User extends CommonEntity {
  [EntityRepositoryType]?: UserRepo;

  @Property()
  name: string;

  @Property({ unique: true })
  username: string;

  @Property({ hidden: true })
  password?: string;
}

@Repository(User)
export class UserRepo extends EntityRepository<User> {
  async save<T extends User>(user: T): Promise<User> {
    const _user = wrap(new User()).assign(user);
    await super.persistAndFlush(_user);
    return _user;
  }

  async update<T extends User>(id: any, userPart: Partial<T>): Promise<User> {
    const user = await super.findOne(id);

    if (!user) {
      throw new HttpException('not found', HttpStatus.NOT_FOUND);
    }

    wrap(user).assign(userPart);
    await super.persistAndFlush(user);

    return user;
  }
}
