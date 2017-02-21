title: 简单cssHack了解，让ie支持H5、css3
date: 2015-11-13 15:08:09
archives: pl
tags: css
---

## 为什么需要css Hack?

由于不同的浏览器和浏览器各版本对CSS的支持及解析结果不一样，由此带来的的结果是同样的页面在不同的浏览器中显示效果不一样，甚至会出现布局错乱的情况，为了保证各浏览器呈现的效果一致，有时会需要对各个浏览器做单独的处理。（Hack只是进行修补工作，不要当做一个主要的功能。个人觉得参照优雅降级的方式做兼容会比较好，先兼容主流的、版本高的浏览器。然后针对低版本不能兼容的点做相应的处理。)

["优雅降级", "渐进增强"]

PS: 个人觉得给css3属性增加前缀也是hack的一种

常用的hack方式

* 条件注释方式
* 属性前缀方式

<!-- more -->

## ie Hack解决方案

### 1.条件注释法

类型于编程语言里的条件语句

```javascript
if(条件满足){
	显示相应的内容
}
```

	只在IE下生效

```html
	<!--[if IE]>
	这段文字只在IE浏览器显示
	<![endif]-->
```

	只在IE6下生效

```html
	<!--[if IE 6]>
	这段文字只在IE6浏览器显示
	<![endif]-->
```
	
	只在IE6以上版本生效
	
```html
	<!--[if gte IE 6]>
	这段文字只在IE6以上(包括)版本IE浏览器显示
	<![endif]-->
```
	
	只在IE8上不生效
	
```html
	<!--[if ! IE 8]>
	这段文字在非IE8浏览器显示
	<![endif]-->
```

	非IE浏览器生效
	
```html
	<!--[if !IE]>
	这段文字只在非IE浏览器显示
	<![endif]-->
```

### 2.属性前缀法(以下hack在标准模式下使用)

ie6-hack

"_": 只有ie6能够识别的前缀

```css
height: 100px;
width: 100px;
_height: 150px;/*在ie6下得到的宽高为150px，其余浏览器为100px*/
_width: 150px;
```

ie7-hack

"+": 只有ie7能够识别的前缀

```css
height: 100px;
width: 100px;
+height: 150px;/*在ie7下得到的宽高为150px，其余浏览器为100px*/
+width: 150px;
```

ie6、7-hack

"*": 只有ie6、7能够识别的前缀

```css
height: 100px;
width: 100px;
*height: 150px;/*在ie6/7下得到的宽高为150px，其余浏览器为100px*/
*width: 150px;
```

### 属性后加数字声明的方式

“\9″ 	IE6/IE7/IE8/IE9/IE10都生效
“\0″ 	IE8/IE9/IE10都生效，是IE8/9/10的hack
“\9\0″ 	只对IE9/IE10生效，是IE9/10的hack

在处理ie的hack时，一般会需要对ie6/7/8做单独的处理，6/7有单独的前缀，8并没有。下面说明如何对8做单独的处理

```css
height: 100px;
width: 100px;
height: 150px\0;	/*在ie8/9/10可以识别*/
width: 100px\9\0;	/*在ie9/10可以识别*/
```

按如上的设置方式，就对ie8做了单独的处理。


## 如何让ie支持H5(包括ie6)

下载地址1：https://github.com/afarkas/html5shiv
下载地址2：[html5shiv.min.js](/js/html5shiv.min.js)
使用方式，在页面头部添加如下代码：

```html
<!–[if IE]>  
<script src=”[html5.js]”></script>  
<![endif]–>
```
这里的src引入的是我们下载的htmlshiv.js文件。


## 如何让ie支持CSS3属性

借助于ie-css3.htc,[点我下载](/css/ie-css3.htc)

语法：

```css
/*给body添加后，body下的子元素都可以使用*/
body{
	behavior: url(ie-css3.htc);
}
```

