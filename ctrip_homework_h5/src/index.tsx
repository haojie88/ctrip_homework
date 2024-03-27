// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.less'

// 改变REM换算比例
import 'lib-flexible';

// ANTD-MOBILE
import { ConfigProvider } from "antd-mobile";
import zhCN from 'antd-mobile/es/locales/zh-CN'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>,
)
