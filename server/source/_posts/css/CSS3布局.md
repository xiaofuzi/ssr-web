title: CSS3布局
date: 2014-12-09 17:39:26
tags: css
---

## 目录

* 伸缩盒(Flexible Box)(新)


## 伸缩盒(Flexible Box)(新)

* flex
	* flex-grow
	* flex-shrink
	* flex-basis
* flex-flow
	* flex-direction
	* flex-wrap
* align-content
* align-items
* align-self
* justify-content
* order

### flex

flex帮助我们设置剩余空间如何进行分配(这里要注意是剩余空间，剩余空间等于父容器的宽度减轻子元素的宽度之和)，水平方向的分配。

```css
/*下面书写方式意义一样*/
flex: none;
flex: 0 0 auto;
```
flex-grow:用来指定扩展比率，即剩余空间为正值时该子元素所分配到的空间比例。
flex-shrink: 指定收缩比例，剩余空间为负值时才有意义。
flex-basis:用来指定伸缩基准值，即子元素的宽度基值

### flex-flow

控制子元素的排列方向、单行或多行。

flex-direction：row | row-reverse | column | column-reverse

* row：即横向从左到右排列（左对齐）。
* row-reverse：对齐方式与row相反。
* column：即纵向从上往下排列（顶对齐）。
* column-reverse：对齐方式与column相反。

### flex-wrap

控制flex容器是单行还是多行

flex-wrap：nowrap | wrap | wrap-reverse

* nowrap：flex容器为单行。该情况下flex子项可能会溢出容器
* wrap：flex容器为多行。该情况下flex子项溢出的部分会被放置到新行，子项内部会发生断行
* wrap-reverse：反转 wrap 排列。

### align-content
当伸缩容器的侧轴还有多余空间时，本属性可以用来调准「伸缩行」在伸缩容器里的对齐方式，这与调准伸缩项目在主轴上对齐方式的 <' justify-content '> 属性类似。请注意本属性在只有一行的伸缩容器上没有效果。

注：水平排列时，水平方向为主轴，纵向为侧轴












