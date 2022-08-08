import { IsString } from 'class-validator';

export class LoginDto {
  /**
   * 用户名
   */
  @IsString()
  username: string;

  @IsString()
  password: string;
}
