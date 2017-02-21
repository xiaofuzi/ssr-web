title: 简单的dom库和轻量级mvvm框架的尝试
date: 2016-02-21 19:07:19
tags: [js]
---

很早之前就有去jquery化的打算，但一直在犹豫，直到最近用原生的写的越来越多，所以将jquery的功能抽取出来，封装了一个简单的 dom 库。jquery是一个非常好的库，使用非常方便，但随着浏览器兼容性越来越好，jquery也显得并不是那么必要。除此之外，现在热门的前端框架大多不依赖于jquery,而是使用原生的js或是自己封装一个小的库，原生的js能带来一定速度上的提升，同时编码量也并不比使用jquery多多少，所以个人觉得去jquery也将成为一个趋势。

mvvm最近特别火，仿佛不熟悉某一款框架都不好出去见人了，自己也用了许多，一直没有特别顺手的。一直也想写一个组件式的库或框架，在筹备的过程中一直没有好的思路，所以索性先模仿其它框架来写，再从中体会。本次参考angularJS写了一个微型的框架，从中也做了不少改进，本着轻框架的原则，将更多的逻辑交由用户去做，即只在常规的css+html+js的基础上做些改进.虽然如此离实际使用还是有距离，不过再写的过程中却发现不少问题，所以说造轮子其实也是很有意义的。

### tiny.js(a simple dom libary)

暂且就这么命名好了，功能上还是参考了jquery的很多特性，同时也做了不少的改进。

### 特性

* 链式调用
* 获取单一 dom 元素
* 拟人化的api
* 函数式编程

## api doc:

### core

* DOM
* all
* each
* map

### dom

* val
* clone
* append
* prepend
* after
* before
* remove
* prev
* next
* siblings
* addClass
* removeClass
* toggleClass
* hasClass
* attr
* removeAttr
* text
* html
* replaceWith

### css

* css
* height
* width
* innerHeight
* innerWidth
* outHeight
* outWidth
* position
* viewportPostion
* scrollTop
* scrollLeft

### event

* on
* off
* trigger
* triggerCustom

### ajax

* getJSON
* post
* get

### animation

* fadeIn
* fadeOut
* hide
* show

待完善
github: https://github.com/xiaofuzi/tiny.js

## con.js

核心思想： 给声明式的html增添逻辑编程的能力。

大多数情况下的web页面使用html+css+js就可以，不需要过多的库和框架，这三者的结合其实能满足大部分的需求，但富web应用还是显得有些不足，需要手动的不断的反复的更新dom,但如果只是因为一张页面上需要几个功能比较复杂的组件就去引入框架又显得有些没有必要，所以说大多数情况下需要的是轻量化的框架。

### 特性
* 通过指令，给html增加上下文的概念(如同函数的上下文)
* 双向数据绑定
* angular式的脏检查更新数据
* 模板语法
* 静态数据类型

more and more.....

github: https://github.com/xiaofuzi/con.js