
> ssr-web project

A fast, simple & powerful blog framework, powered by Node.js and Vue. 

### dependecies tool

* [express](https://github.com/expressjs/express)
* [nuxt.js](https://github.com/nuxt/nuxt.js)

##  五分钟搭建博客

## Build Setup

``` bash
# 安装依赖
$ npm install # Or yarn install

# 热加载开发，本地预览地址: localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start
```

## 生成博客

打开两个终端分别运行以下命令

* npm run start
* npm run g

## 使用 github Page 托管博客
## 提示

    * `<a-link></a-link>` 组件是为了替代 `<nuxt-link></nuxt-link>`组件。
    * 若不是根目录，需要更改链接的跟地址，nuxt.config.js 的 router.base 属性和 `<a-link></a-link>` 组件的根地址。

## DOC

### 目录说明

* client
    * 前端代码

* server
    * 博客文档存放的目录，`source/_posts`目录下的会作为博文处理

* 插件功能
    [查看mdToJson文档](https://github.com/xiaofuzi/mdToJson)

## Todo
 * 主题功能

