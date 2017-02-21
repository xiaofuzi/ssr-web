title: 基于NodeJS实现的一个css预处理器
date: 2015-12-14 15:36:51
tags: [nodeJS, 开源项目]
---


<div class="header-preview" style=""><h2>json_script,基于nodeJS实现的css预处理器</h2><p>just for fun?</p></div>

一时兴起，想用json格式来编写css，然后就出现了json_script.json是一种十分简洁的数据格式，学过javascript的人都会用，现在已作为web中传递数据的一种主要的数据格式，所以也有很多时候需要将json格式的数据转换成css、html。既然如此，为什么不能直接将json转为web页面呢？web页面基本上是由css/html/javascript组成的，所以可以用json或是javascript来直接生成一张web页面那不是很方便？

## just for fun?
虽然只是因为有趣，但我还是发现有人已经做出了这样的东西，而且还很不错。但依然不影响我去做这样一个东西的兴趣，这也是在web组件化上探索的一步。

<!-- more -->
<div><a href="https://github.com/xiaofuzi/json_script" target="_blank"><img style="position: fixed; top: -7px; right: 0; border: 0;z-index: 999;" src="https://i.alipayobjects.com/e/201211/1dbSqT9ykm.png" width="149" height="149" alt="Fork me on GitHub"></a></div>

## 原理？

这里得益于json这种数据格式非常简洁，已经不再需要正则这种进行数据提取。因为它已经自带了很好的结构化的信息。
* 传入json格式数据
* 转换为中间数据格式(css是不支持嵌套的，转换成不嵌套的格式)
* 生成css格式数据

### json

```javascript
{
    '.wrap': {
        'margin-top': '20px',
        'padding': '20px',
        'color': '#444',
        p: {
            'padding-top': '20px',
            'font-size': '28px'
        }
    }
}
```

### 中间格式-json_css

```javascript
{
    '.wrap': {
        'margin-top': '20px',
        'padding': '20px',
        'color': '#444',
        p: false
    }
    '.wrap p': {
            'padding-top': '20px',
            'font-size': '28px'
        }
}
```

### css格式

```javascript
.wrap {
  margin-top: 20px;
  padding: 20px;
  color: #444;
}
.wrap p {
  padding-top: 20px;
  font-size: 28px;
}
```

## 如何安装


```git
npm install --save json_script
```
全局安装

```git
npm install json_script -g
```

项目介绍: http://yangxiaofu.com/json_script/readme.html
github: https://github.com/xiaofuzi/json_script

