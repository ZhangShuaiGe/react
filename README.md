react项目
===============
### 2017/6/9
*  项目引入了 ant design(支持响应式)
*  头部组件 和 底部组件完成
*  登录注册模块完成
*  用fetch 请求的 新闻接口api
*  用了react-router 路由组件
*  用了react-responsive 插件动态区分加载pc端和mobile端组件
*  配套工具 webpack css-lorder style-lorder 具体看package.json文件

### 2017/7/19
加入了redux，管理state,兄弟元素间的沟通终于解决。用在了控制头部的点击新闻类型 会跳转到兄弟组件，一个完全新的组件，但是点的 新闻类型没法传递过去。

###运行方法：

* 安装依赖：cnpm install
* npm run start
* (没有配置呢个open插件)浏览器手动敲：http://localhost:8080/ 
