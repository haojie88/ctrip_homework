//核心配置文件  非运行时配置 
//路由配置  第三方组件库的引用

import { defineConfig } from '@umijs/max';
import routes from './routes'

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  //开启项目视图骨架设置
  layout: {
    title: '审核管理系统',
    layout:'side'
    // layout: 'sidemenu',
  },
  routes,
  npmClient: 'pnpm',
});

