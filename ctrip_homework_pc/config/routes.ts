export default [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '登录',
      path: '/login',
      component: './Login',
      layout:false
      // menuRender: false,
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '角色权限',
      path: '/access',
      component: './Access',
    },
    {
      name: ' 审核列表',
      path: '/table',
      component: './Table',
    },
  ]