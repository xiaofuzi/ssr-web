title: html不能这么写，你知道吗？
date: 2015-11-17 16:51:15
tags: html
archives: pl
topper: true
---

* a标签不可以嵌套交互式元素
* 块级元素可以包含内联元素和某些块级元素，内联元素不能包含块级元素，只能包含内联元素
* p标签不能包含块级元素
* 这些标签不可包含块级元素
* li标签可以包含div以及ul，ul的子元素应该只有li
* 元素并排（块级和块级并列，内联和内联并列)

<!-- more -->

## 标签错误嵌套

### 语法错误

* a标签不可以嵌套交互式元素[a， audio（如果设置了controls属性）， button， details， embed， iframe， img（如果设置了usemap属性）， input（如果type属性不为hidden状态）， keygen， label， menu（如果type属性为toolbar状态），object（如果设置了usemap属性）， select， textarea， video（如果设置了controls属性）]

```css
/*下面这些写法浏览器是不能够正常解析的*/
<a href="">
	<a href="">click</a>
</a>
<a href="">
	<button>click</button>
</a>
<a href="">
	<input type="text">
</a>
<a href="">
	<textarea name="" id="" cols="10" rows="5"></textarea>
</a>
```
<a href=""><a href="">click</a></a><a href=""><button>click</button></a><a href=""><input type="text"></a><a href=""><textarea name="" id="" cols="30" rows="10"></textarea></a>

有的虽然解析正常，但却达不到预想的目的

### 语义错误

页面可能正常解析，但不符合语义。这是因为浏览器自带容错机制，对于不规范的写法也能够正确的解析，各浏览器的容错机制不同，所以尽量按规范来写。

* 块级元素可以包含内联元素和某些块级元素，内联元素不能包含块级元素，只能包含内联元素

```css
/*规范的写法*/
<div>
	<h2>jikexueyuan</h2>
	<p>IT education</p>
</div>
/*不规范的写法*/
<span>
	<div>wrong</div>
</span>
```

* p标签不能包含块级元素

```css
/*不规范的写法*/
<p>
	<h1></h1>
</p>
<p>
	<div></div>
</p>
```
* 如下的标签不可包含块级元素

```css
h1、h2、h3、h4、h5、h6、p

/*不规范的写法*/
<h1>
	<h2></h2>
</h1>
<h2>
	<p></p>
</h2>
```

* li标签可以包含div以及ul(这个是不是很牛，可以包含父级元素)

```css
/*规范的写法*/
<li>
	<ul>
		<li></li>
		<li></li>
		<li></li>
	</ul>
	<div></div>
</li>
/*不规范的写法*/
<ul>
	<a href="">迷路的a标签</a>
	<li></li>
	<li></li>
	<li></li>
</ul>
```

* 元素并排（块级和块级并列，内联和内联并列)

```css
/*规范的写法*/
<div>
	<h2></h2>
	<p></p>
</div>
<div>
	<img src="" alt="">
	<a href=""></a>
	<span></span>
</div>

/*不规范的写法*/
<div>
	<span>我是内联元素</span>
	<p>我是块级元素</p>
</div>
```

如有错误，请指出，欢迎补充其它一些错误情况。

