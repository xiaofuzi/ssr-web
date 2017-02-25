title: js lexer and highlighting
date: 2016-01-09 11:10:53
tags: [js, parser]
---
## js代码分词以及高亮简单实现

### lexer

* 递归
* 正则

### highlighter

highlighter作为lexer的一个中间件对lexer处理所得的token做进一步的处理，得到如下的形式代码：

源码：
```js
/**
* some helper functions
*/
var utils = module.exports = {};
```

高亮处理后：
```html
<span class="js-comment">/**<br />*&nbsp;some&nbsp;helper&nbsp;
functions<br />*/</span><br /><span class="js-keyword">var</span>
&nbsp;<span class="js-identifier">utils</span>&nbsp;<span class="
js-punctuation">=</span>&nbsp;<span class="js-identifier">module
</span><span class="js-punctuation">.</span><span class="js-
identifier">exports</span>&nbsp;<span class="js-punctuation">=</
span>&nbsp;<span class="js-punctuation">{</span><span class="js-
punctuation">}</span><span class="js-punctuation">;</span>
```
这里将js按如下进行划分：

* keyword
* identifier
* number
* punctuation
* string
* regexp
* function
* params
* comment


给每一个类分别添加样式即得到高亮的效果。

[highlighter demo](/compents/high-lighter/js-highlighter.html) 
github: https://github.com/xiaofuzi/parserJS
