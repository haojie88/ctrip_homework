// 运行时配置
import {history} from 'umi'
import {RequestConfig,RunTimeLayoutConfig} from '@umijs/max'
import {message} from 'antd'
// 全局初始化数据配置，用于 Layout 用户信息和权限初始化

//做登录逻辑的函数，会返回登录信息。
export async function getInitialState(): Promise<{ name: string; avatar?:string }> {
  return {
    name:"小荣",
    avatar: 'https://p26-passport.byteacctimg.com/img/user-avatar/312989b46037c16843b1eb44aea82fa2~180x180.awebp?'
  };
}

//Layout的运行时配置，自定义控制Layout的渲染逻辑
export const layout:RunTimeLayoutConfig = ({initialState}) => {
  //initialState是上面登录函数返回的信息
  return {
    logo: require('@/assets/imgs/logo.png'),
    menu:{
      locale:false
    },
    layout:'mix',
    splitMenus:true,
    avatarProps: {
      src: initialState?.avatar || undefined, //右上角头像
      title: initialState?.name || '用户', //右上角名称
      size: 'small',
    },
    onPageChange:()=>{
      //此处可以根据用户的登录状态，引导用户进行指定的路由访问
      const {islogin} = initialState
      // if(!islogin){
      //   history.push('./login')
      // }
    },
    token: {
      //菜单的样式配置
      //   colorBgAppListIconHover: 'rgba(0,0,0,0.06)',
      //   colorTextAppListIconHover: 'rgba(255,255,255,0.95)',
      //   colorTextAppListIcon: 'rgba(255,255,255,0.85)',
      sider: {
        //侧边菜单的配置 ，这里具体看文档
        // colorBgCollapsedButton: '#fff',
        // colorTextCollapsedButtonHover: '#1677ff',
        // colorTextCollapsedButton: 'rgba(0,0,0,0.45)',
        colorMenuBackground: '#fff',
        // colorBgMenuItemCollapsedElevated: 'rgba(0,0,0,0.85)',
        colorMenuItemDivider: 'rgba(255,255,255,0.15)',
        colorBgMenuItemHover: 'rgba(0,0,0,0.06)',
        colorBgMenuItemSelected: 'rgba(0,0,0,0.05)',
        colorTextMenuSelected: '#1677ff',
        colorTextMenuItemHover: '#1677ff',
        // colorTextMenu: 'rgba(255,255,255,0.75)',
        // colorTextMenuSecondary: 'rgba(255,255,255,0.65)',
        colorTextMenuTitle: 'rgba(255,255,255,0.95)',
        colorTextMenuActive: '#1677ff',
        colorTextSubMenuSelected: '#1677ff',
      },
    },
  };
};

export const request: RequestConfig={
  timeout:1000,
  errorConfig: {
    errorHandler(error: any) {
      const { response } = error;
      if (response && response.status === 500) {
        message.error('请求错误：服务器故障，请稍后再试');
      }
    },
    errorThrower() {},
  },
  // 请求拦截
  requestInterceptors: [
    (config: any) => {
      let token = localStorage.getItem('token') || '';
      if (token.startsWith('"')) {
        token = JSON.parse(token);
      }
      if (token) {
        config.headers.Authorization = 'Bearer ' + token;
      }
      return config;
    },
    (error: any) => {
      return error;
    },
  ],
  // 相应拦截
  responseInterceptors: [
    (response: any) => {
      const { data, message } = response;
      if (!data.success) {
        message.error(message);
      }
      return response;
    },
  ],
}
