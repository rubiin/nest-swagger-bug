import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserRepo } from './entities/user.entity';
import { LoginDto } from './dto/login.dto';
import { ack } from '@app/shared';
import { LoginException } from './exception/login.exception';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private userRepo: UserRepo) {}

  async create(createUserDto: CreateUserDto) {
    return await this.userRepo.save(createUserDto);
  }

  findAll() {
    return this.userRepo.findAll();
  }

  findOne(id: string) {
    return this.userRepo.findOneOrFail({ id });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userRepo.update(id, updateUserDto);
  }

  remove(id: string) {
    return this.userRepo.nativeDelete({ id });
  }

  async login(loginDto: LoginDto) {
    const user = await this.userRepo.findOne({
      username: loginDto.username,
      password: loginDto.password,
    });

    if (!user) {
      throw new LoginException();
    }

    return user;
  }
}
