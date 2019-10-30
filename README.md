# react 项目通用目录结构
1. `src/` 所有的源文件
2. `build/` 最终生成的，供HTML引用的文件



## 目录结构

- **src**目录

```
src/
|--index.js  整个应用的入口
|--app.js 页面连接store和router
|--page  应用中某个页面的入口文件，一般为路由组件
|  |--Home
|    |--index.js  例如，首页的入口就是Home.js
|    |--home.scss  Home页面对应的样式
|    |--store  Home页面相关的actionTypes、actionCreators、reducer
|
|--common 公共基础组件
|  |--header 比如头部导航 结构和page类似
|
|--components 所有应用的组件
|  |--Home  例如，page/ 中一个名为 Home 的view，则在components/ 中就有一个名为Home  
|	  |	     子文件夹
|     |--Table.js  Home 页面中的一个列表组件
|     |--Table.css  列表组件对应的样式
|
|--lib 使用库文件存放
|--fonts 字体图标
|--routes  路由相关的配置
|--store  store相关文件
|  |--reducer  整合所有reducer
|  |--index  创建store
|
|--app.css  全局样式表

```

