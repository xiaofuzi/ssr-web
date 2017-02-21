title: CommonJS模块加载工具实现
date: 2016-01-02 15:36:51
tags: [nodeJS, 开源项目]
---

module.exports 和 exports 有时会让人迷惑，深入了解才发现是如此的简单。模块加载现在已经渐渐成为js开发中的一个必不可少的功能，所以在这里简单的实现一个遵循commonJS规范的模块加载工具，下面是核心代码。
注：浏览器端因为同步加载方式可能会阻塞，所以一般使用的是AMD规范，如requireJS.

```js
var fs = require('fs'),
    vm = require('./sandbox'),
    pathFormat = require('./helper/formatPath');

/*
 * global variable myrequire
 */
module.exports = global.myrequire = myrequire;

/*
 * params {modName} required mod name
 * return {exports} exports mod 
 */


function myrequire(modname) {
    modname = pathFormat(modname);
    /*
     * cache
     */
    if (modname in myrequire.cache) {
        return myrequire.cache[modname];
    }


    var modScript = fs.readFileSync(modname, 'utf8');
    var myexports = vm.run(modScript);
    myrequire.cache[modname] = myexports;

    return myexports;
};

/*
 * cache required modules
 */
myrequire.cache = Object.create(null);
```

## sandbox implements

* initila commit 使用的是 new Function 来实现
* 现使用nodeJS的vm模块

## node原生模块兼容

* 支持require和module.exports/exports
* 如需要更多全局变量支持可直接挂载在global下

## guide
* myrequire()-导入
* mymodule()-导出
* 使用绝对路径

github: https://github.com/xiaofuzi/commonJS