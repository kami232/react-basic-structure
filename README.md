# react 项目通用目录结构
1. `src/` 所有的源文件
2. `test/` 测试文件
3. `build/` 最终生成的，供HTML引用的文件



## 目录结构

- **src**目录

```
src/
|--app.js  整个应用的入口
|--views  应用中某个页面的入口文件，一般为路由组件
|  |--Home.js  例如，首页的入口就是Home.js
|  |--Home.css  Home页面对应的样式
|  |--HomeRedux.js  Home页面中所有与 Redux 相关的reducer、actioncreater的汇总，即
|					 components/Home/ 下所有 Redux.js 的汇总
|--components 所有应用的组件
|  |--Home  例如，views/ 中一个名为 Home 的view，则在components/ 中就有一个名为Home  
|	  |	     子文件夹
|     |--Table.js  Home 页面中的一个列表组件
|     |--Table.css  列表组件对应的样式
|     |--TableRedux.js  列表组件的reducer、action creator及 action type，整合在同  
|                       一个文件中
|--container
|  |--DevTools.js  配置 DevTools
|  |--Root.js  一般被app.js依赖，用于根据环境判断是否需要加载DevTools
|--layouts  布局相关的组件及样式，如菜单、侧边栏、header、footer等
|--redux  Redux store相关的配置
|  |--reducers.js  整个应用中所有reducer的汇总
|--routes  路由相关的配置
|--utils  工具函数、常量等
|--styles  全局公共样式
|--app.css  应用主样式表

```

