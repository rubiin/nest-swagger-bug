import { HttpException } from '@nestjs/common';

export class BusinessException extends HttpException {
  code: number;

  constructor(message, statusCode) {
    super(message, statusCode);
  }

  getCode() {
    if (this.code === undefined) {
      throw Error('code not undefined');
    }
    return this.code;
  }
}

/**
 * 异常分类：
 * 系统级
 * 数据库错误，语法错误...
 *
 * 业务级
 * 登录错误，没有权限，参数错误，密码错误，等
 *
 */
