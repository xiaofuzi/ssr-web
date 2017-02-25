
> ssr-web project

A fast, simple & powerful blog framework, powered by Node.js and Vue. 

一个基于 Node.js 和 Vue 的高效、简单功能强大的静态博客生成器。

### Online: [http://yangxiaofu.com/ssr-web/](http://yangxiaofu.com/ssr-web/)
### 依赖项

* [express](https://github.com/expressjs/express)
* [nuxt.js](https://github.com/nuxt/nuxt.js)
*  NodeJS


## 如何安装

* `git clone https://github.com/xiaofuzi/ssr-web`

* 通过 [iat](https://github.com/e-f-e/iat) 命令行工具
    * `npm install iat -g`
    * iat ssr-web


## 如何使用

``` bash
# 安装依赖
$ npm install # Or yarn install

# 热加载开发
$ npm run dev

# 生产环境编译
$ npm run build
$ npm run start
```

## 生成博客

* npm run start(如未编译请先编译`npm run build`)
* npm run g(此时 server 还需处于启动状态，即 `npm run start`命令或 `npm run dev`命令还在运行)

## 使用 github Page 托管博客
    推送到 github 仓库并设置 github page 地址，因为默认静态文件生成与 docs 目录，所以将该目录设为 github page 根目录即可

## 提示

    * `<a-link></a-link>` 组件是为了替代 `<nuxt-link></nuxt-link>`（在generate 后发现有 bug）组件。
    * 若不是处于域名根目录，需要更改导航的根地址，nuxt.config.js 的 router.base 属性和 `<a-link></a-link>` 组件的根地址两处。

## DOC

### 目录说明

* client
    * 前端代码（详情参考 nuxt.js 文档）

* server
    * 博客文档存放的目录，`source/_posts`目录下的会作为博文处理
    
* 插件功能
    [查看mdToJson文档](https://github.com/xiaofuzi/mdToJson)

## Todo
 * 主题功能

## 如何联系我们

<img width='200' src="https://e-f-e.github.io/ffe/static/ffe-qq.png" alt="contact us">
