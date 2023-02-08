/*
 * @Author: xuhua
 * @Date: 2023-02-07 18:17:27
 * @LastEditors: xuhua
 * @LastEditTime: 2023-02-08 10:25:28
 * @FilePath: /demo/src/common/exceptions/business.exception.ts
 * @Description:  业务运行中预知且主动抛出异常
 */
import { HttpException, HttpStatus } from '@nestjs/common';

import { BUSINESS_ERROR_CODE } from './business.error.codes';

type BusinessError = {
  code: number;
  message: string;
};

export class BusinessException extends HttpException {
  constructor(error: BusinessError | string) {
    if (typeof error === 'string') {
      error = {
        code: BUSINESS_ERROR_CODE.COMMON,
        message: error,
      };
    }
    super(error, HttpStatus.OK);
  }

  static thorwForbidden() {
    throw new BusinessException({
      code: BUSINESS_ERROR_CODE.ACCESS_FORBIDDEN,
      message: '抱歉哦，您无此权限！',
    });
  }
}
