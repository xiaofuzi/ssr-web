title: css居中那些事
date: 2015-11-03 15:36:51
archives: pl
tags: css
---

## 目录

* [margin: 0 auto](#CSS_margin_属性)
* [text-algin: center;](#text-align实现水平居中)
* [position:absolute + margin负值](#绝对定位实现垂直居中)
* [position:absolute + translate偏移](#绝对定位且居中元素不知宽高的情况)
* [position:absolute + margin:auto](#绝对定位+margin:auto;实现水平垂直居中)


## CSS margin 属性

<div style="border: 1px solid #444;">
	<p style="background:green;margin:5px 4px 3px 5px;">设置 p 元素的 4 个外边距：margin:5px 4px 3px 5px;</p>
</div>

<!-- more -->

### 定义和用法

margin 简写属性在一个声明中设置所有外边距属性。该属性可以有 1 到 4 个值。

### 说明

这个简写属性设置一个元素所有外边距的宽度，或者设置各边上外边距的宽度。
块级元素的垂直相邻外边距会合并，而行内元素实际上不占上下外边距。行内元素的的左右外边距不会合并。同样地，浮动元素的外边距也不会合并。允许指定负的外边距值，不过使用时要小心。

注释：允许使用负值。

垂直外边距之所以设计为可以在垂直方向合并主要是方便文本的排版，即一段文本分行的时候上下两行直接的间距不会叠加。

简写的情况：

```css
/*四个方向的外边距都是10px*/
margin: 10px;
```

```css
/*上下的外边距都是10px，左右的外边距20px*/
margin: 10px 20px;
```

```css
/*上的外边距都是10px，左右的外边距是5px，下外边距15px*/
margin: 10px 5px 15px;
```

```css
/*四个值依次是上、右、下、左*/
margin: 10px 5px 15px 20px;
```
```css
/*设为auto的计算方式*/
margin: 0 auto;	/*常用的水平居中对齐方式*/
margin: auto;
```

上述的auto的计算方式是父容器-子元素剩余部分浏览器自动计算，以上述的水平居中方式为例，左右的外边距等于父容器减去子容器剩余部分的宽度均匀分配给左右，从而实现居中对齐的效果。

上诉的第二种声明并不能实现垂直居中的效果，具体可以看w3c标准声明或看下[知乎的这篇文章](http://www.zhihu.com/question/21644198)。

### margin使用百分比单位计算的情况

```css
/*百分比是按照父容器的宽度来计算的，务必注意*/
margin: 20%;
```

从上我们可以知道通过margin如何实现水平居中。

## text-align实现水平居中

text-align 属性规定元素中的文本的水平对齐方式。通过它我们可以设置行内元素的对齐方式

```css
text-align:center
```

<p style="text-align:center;border:1px solid #444;">text-align实现水平居中,我已经居中了</p>


## 绝对定位实现垂直居中

<div style="position:relative;background:#444;height:200px;">
	<div style="position:absolute;top:50%;left:50%;margin-top:-50px;margin-left:-50px;width:100px;height:100px;background:#ffffff;text-align:center;line-height:100px;">居中一</div>
</div>

实现代码：

```css
	position:absolute;
	top:50%;
	left:50%;
	margin-top:-50px;
	margin-left:-50px;
	width:100px;
	height:100px;
```
采用绝对定位加负外边距的方式，首先上，左偏移父容器的50%;然后再自身偏移自己宽高的50%，从而实现垂直水平居中。该方式需要居中元素的宽高确定。

## 绝对定位且居中元素不知宽高的情况

<div style="position:relative;background:#444;height:200px;">
	<div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:100px;height:100px;background:#ffffff;text-align:center;line-height:100px;">居中二</div>
</div>

```css
	position:absolute;
	top:50%;
	left:50%;
	transform:translate(-50%,-50%);
	width:100px;
	height:100px;
```

在这里使用css3的transform:translate(-50%,-50%);属性来实现元素自身的一个偏移

## 绝对定位+margin:auto;实现水平垂直居中

<div style="position:relative;background:#444;height:200px;">
	<div style="position:absolute;top:0;left:0;bottom:0;right:0;width:100px;height:100px;margin:auto;background:#ffffff; text-align:center;line-height:100px;">居中三</div>
</div>

```css
position:absolute;
top:0;
left:0;
bottom:0;
right:0;
width:100px;
height:100px;
margin:auto;
```
