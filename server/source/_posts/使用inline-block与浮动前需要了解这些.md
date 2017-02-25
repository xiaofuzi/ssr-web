title: 使用inline-block与浮动前需要了解这些
date: 2015-11-06 15:06:36
archives: pl
tags: css
---


HTML标签分为块级元素和行内元素，块级元素会独占一行。

常见的块级元素：

```css
h1,h2,h3,h4,h5,
div,p,form,hr,menu,ul,dl,ol,pre,table,address,blockquote
```

常见的内联元素
```css
a,abbr,acronym,br,cite,code,em,i,
img,input,label,select,small,span,sub,sup,textarea
```

块级元素：块级元素独占一行，可以设定元素的宽（width）、高（height）和内外边距，块级元素一般是其他元素的容器，可容纳块级元素和行内元素。常见的块级元素有div, p ,h1~h6等。

<!-- more -->

行内元素：行内元素不可以设置宽（width）和高（height），但可以与其他行内元素位于同一行，行内元素内一般不可以包含块级元素。行内元素的高度一般由元素内部的字体大小决定，宽度由内容的长度控制。常见的行内元素有a, em ,strong等。（img标签虽然是行内元素，但自带宽高属性，即可以设置宽高)

给行内元素和块级元素加上display:inline-block;后会将元素转换为行内块元素，即不独占一行而且可以按盒子模型进行布局。



## 行内元素（inline)
<div class="margin-auto">
	<span style="background:red;">行内元素</span>  <span style="background:green;">行内元素</span>  <span style="background:blue;">行内元素</span>
	<hr>
</div>

## 行内块元素（inline-block)

<div class="margin-auto">
	<span style="background:red;display:inline-block;">行内元素</span>  <span style="background:green;display:inline-block;">行内元素</span>  <span style="background:blue;display:inline-block;">行内元素</span>
	<hr>
</div>

从上面可以看到内联元素之间都会产生空格，该空格的大小受设置字体大小的影响(注：当html标签间有空格或换行的情况,如果没有则不会产生空格的)

## 行内块元素（inline-block)并排空格解决方式

* margin负值
* font-size: 0;
* 浮动替代方式

```css
margin-left: -5px;
```

<div class="margin-auto">
	<span style="background:red;display:inline-block;">行内元素</span>  <span style="background:green;display:inline-block;margin-left:-5px;">行内元素</span>  <span style="background:blue;display:inline-block;margin-left:-5px;">行内元素</span>
	<hr>
</div>

```css
/*这里给父容器设置字体大小为0，有的浏览器不兼容,此时可以给子元素单独设字体大小*/
font-size: 0;
```

<div class="margin-auto" style="font-size: 0;">
	<span style="background:red;display:inline-block;font-size:14px;">行内元素</span>  <span style="background:green;display:inline-block;font-size:14px;">行内元素</span>  <span style="background:blue;display:inline-block;font-size:14px;">行内元素</span>
	<hr style="font-size: 14px;">
</div>

```css
float: left;
```

<div class="margin-auto" style="float: left;"><div><span style="background:red;display:inline-block;font-size:14px;float: left;">行内元素</span>  <span style="background:green;display:inline-block;font-size:14px;float: left;">行内元素</span>  <span style="background:blue;display:inline-block;font-size:14px;float: left;">行内元素</span></div>
	<hr>
</div>


## 清除浮动

```css
float: left;/*设置浮动*/
clear: both;/*清除浮动*/
```

浮动会导致父层塌陷，所以需要清除浮动来将父层撑开。


* 父级设置浮动
* 带clear属性的空元素
* 父级设置overflow: hidden;或overflow: auto;在IE6中还需要触发hasLayout ，例如为父元素设置容器宽高或设置 zoom:1。
* 使用css的:after伪元素。给浮动元素的容器添加一个clearfix的class，然后给这个class添加一个:after伪元素实现元素末尾添加一个看不见的块元素（Block element）清理浮动。


```css
.clearfix:after{
  content: ""; 
  display: block; 
  height: 0; 
  clear: both; 
  visibility: hidden;  
  }

.clearfix {
  /* 触发 hasLayout ie6/7*/ 
  zoom: 1; 
  }
```

示例：

```html
<div class="content">
	<div class="sub-cont" style="float:left;"></div>
	<div class="sub-cont" style="float:left;"></div>
	<div class="sub-cont" style="float:left;"></div>
</div>
```

清除方式一：

```html
<div class="content" style="float:left;">
	<div class="sub-cont" style="float:left;"></div>
	<div class="sub-cont" style="float:left;"></div>
	<div class="sub-cont" style="float:left;"></div>
</div>
```

该种方式父容器自身会浮动，所以需要注意父容器浮动所带来的影响

清除方式二：

```html
<div class="content">
	<div class="sub-cont" style="float:left;"></div>
	<div class="sub-cont" style="float:left;"></div>
	<div class="sub-cont" style="float:left;"></div>
	<div style="clear:both"></div>
</div>
```

清除方式三：

```html
<div class="content" style="overflow:hidden;zoom:1;">
	<div class="sub-cont" style="float:left;"></div>
	<div class="sub-cont" style="float:left;"></div>
	<div class="sub-cont" style="float:left;"></div>
</div>
```

清除方式四：

```html
<div class="content clearfix">
	<div class="sub-cont" style="float:left;"></div>
	<div class="sub-cont" style="float:left;"></div>
	<div class="sub-cont" style="float:left;"></div>
</div>
```


