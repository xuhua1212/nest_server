/*
 * @Author: xuhua
 * @Date: 2023-02-07 18:18:42
 * @LastEditors: xuhua
 * @LastEditTime: 2023-02-07 18:21:03
 * @FilePath: /demo/src/common/exceptions/business.error.codes.TS
 * @Description:  业务错误码
 */
export const BUSINESS_ERROR_CODE = {
  // 公共错误码
  COMMON: 10001,
  // 特殊错误码
  TOKEN_INVALID: 10002,
  // 禁止访问
  ACCESS_FORBIDDEN: 10003,
  // 权限已禁用
  PERMISSION_DISABLED: 10004,
  // 权限已过期(用户冻结)
  USER_DISABLED: 10005,
};
