# 审核管理系统（PC站点）

审核管理系统的PC站点，不同角色可以对用户发布的游记做上线前的审核检查，删除等操作。

## 技术栈
    umijs+ react + npnm + ant-design-pro

umijs的优点是封装性很高，开箱即用。但是黑盒，需要定制化的时候会很麻烦。
umijs里面内置了anti-design,无需再下载插件即可引入使用。
mock是一个模拟后台发送请求返回数据的文件夹，实现前后端分离，基于react-router实现。通过预先跟
服务器约定好的接口，模拟请求数据甚至逻辑，能够让前端开发独立自主，不会被服务端的开发所阻塞。

路由：request
状态管理器：useModel和Dva,不是非常复杂的应用，选择useModel即可
框架更新但文档没有更新
https://procomponents.ant.design/components/layout   ant二次封装高级库