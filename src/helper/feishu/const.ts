/*
 * @Author: xuhua
 * @Date: 2023-02-08 10:10:23
 * @LastEditors: xuhua
 * @LastEditTime: 2023-02-08 10:12:05
 * @FilePath: /demo/src/helper/feishu/const.ts
 * @Description: 飞书环境变量
 */

import { getConfig } from '@/utils';

const { FEISHU_CONFIG } = getConfig();

export const APP_ID = FEISHU_CONFIG.FEISHU_APP_ID;
export const APP_SECRET = FEISHU_CONFIG.FEISHU_APP_SECRET;
