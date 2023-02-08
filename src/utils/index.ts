/*
 * @Author: xuhua
 * @Date: 2023-02-08 09:24:32
 * @LastEditors: xuhua
 * @LastEditTime: 2023-02-08 09:36:10
 * @FilePath: /demo/src/utils/index.ts
 * @Description:  工具函数
 */
import { parse } from 'yaml';
const path = require('path');
const fs = require('fs');
// 获取项目运行环境
export const getEnv = () => {
  return process.env.RUNNING_ENV || 'dev';
};

// 读取项目配置
export const getConfig = () => {
  const environment = getEnv();
  const yamlPath = path.join(process.cwd(), `./.config/.${environment}.yaml`);
  const file = fs.readFileSync(yamlPath, 'utf8');
  const config = parse(file);
  return config;
};
