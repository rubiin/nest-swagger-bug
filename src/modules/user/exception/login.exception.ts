import { HttpStatus } from '@nestjs/common';
import { BusinessException } from 'src/exception/business.exception';

export class LoginException extends BusinessException {
  code = 1000;
  constructor(msg = '密码或者账号错误') {
    super(msg, HttpStatus.UNAUTHORIZED);
  }
}
