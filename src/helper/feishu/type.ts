/*
 * @Author: xuhua
 * @Date: 2023-02-08 10:10:28
 * @LastEditors: xuhua
 * @LastEditTime: 2023-02-08 10:13:01
 * @FilePath: /demo/src/helper/feishu/type.ts
 * @Description:  飞书相关类型定义
 */
export interface CreateApprovalParams {
  approval_code: string;
  user_id: string;
  form: string;
}

export interface GetApprovalDefinedParams {
  approval_code: string;
}

export interface GetApprovalInstanceParams {
  instance_code: string;
  user_id?: string;
  open_id?: string;
}
