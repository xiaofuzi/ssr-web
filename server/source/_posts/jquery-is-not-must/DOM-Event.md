title: jQuery is not must for us——事件
date: 2015-11-25 12:40:32
tags: jquery
archives: pl
---

在这里我们将对比Web提供的事件API与jQuery 事件函数间的差别。jQuery给我们提供了非常好的事件API,但理解好底层是如何实现的可以帮助我们更好的使用jQuery,同时遇到错误也能修复。

* 发送DOM事件
* 发送自定义事件
* 监听事件
* 移除事件句柄
* 修改事件
* 事件预测
* 键盘事件
* 鼠标事件
* 浏览器加载事件
* 老式浏览器的支持

<!-- more -->

## DOM事件发送

以点击事件为例：
focus/blur/submit语法相同

### jQuery
```javascript
$(a).click();
```

### DOM API

```javascript
a.click();
```

## 自定义事件

### jQuery
```javascript
/*触发一个事件(custom-event)*/
$('element').trigger('custom-event');
```

### DOM API
```javascript
var event = document.createEvent('Event');
event.initEvent('custom-event', true, true); /*第二和第三参数说明属于冒泡事件并可取消默认事件*/
someElement.dispatchEvent(event);	/*发起事件*/

/*ie not support*/
var event = new CustomEvent('custom-event', {bubbles: true, cancelable: true});
someElement.dispatchEvent(event);
```

## 事件监听

### jQuery
```javascript
$('element').on('click', function(){
	/*当点击的时候做点什么*、
})
```

### DOM API

```javascript
/*ie 9*/
element.addEventLister('click', function(){
	/*当点击的时候做点什么*、
})
```

## 移除事件

### jQuery
```javascript
/*jquery还提供了一个移除某元素上所有事件的api*/
$('element').off('click', myEventHander);
```

### DOM API

```javascript
elment.removeEventLister('click', myEventHander);
```

## 事件修改

阻止事件冒泡
### jQuery
```javascript
$(element).on('event', function(event){
	event.stopPropagation();
})
```

### DOM API

```javascript
element.addEventListener('event', function(event){
	event.stopPropagation();
})
```

阻止其它事件对当前元素的影响

### jQuery
```javascript
$(element).on('event', function(event){
	event.stopImmediatePropagation();
})
```

### DOM API

```javascript
element.addEventListener('event', function(event){
	event.stopImmediatePropagation();
})
```

阻止浏览器默认事件，比如一个a标签的跳转事件

### jQuery
```javascript
$(Aelement).on('click', function(event){
	event.stopPropagation();
})
```

### DOM API

```javascript
Aelement.addEventListener('click', function(event){
	event.preventDefault();
})
```

## 预测事件

```html
<ul id="my-list">
    <li>foo <button>x</button></li>
    <li>bar <button>x</button></li>
    <li>abc <button>x</button></li>
    <li>123 <button>x</button></li>
</ul>
```

点击按钮的时候删除其li标签

### jquery

```javascript
$('#my-list').on('click', 'BUTTON', function() {
    $(this).parent().remove();
});
```

### DOM API

```javascript
document.getElementById('my-list').addEventListener('click', function(event) {
    var clickedEl = event.target;
    if(clickedEl.tagName === 'BUTTON') {
       var listItem = clickedEl.parentNode;
       listItem.parentNode.removeChild(listItem);
    }
});
```

## 键盘事件

### jquery

```javascript
$(document).keydown(function(event){
	if(event.ctrlkey && event.which === 72){
		/*ctrl+H*/
	}
})
```

### DOM API

```javascript
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.which === 72) {
        /*ctrl+H*/
    }
});
```

## 鼠标事件

### jquery

```javascript
$('element').hover(function hoverIn(){
	
},
function hoverOut(){
	
})
```

### DOM API
```javascript
someEl.addEventListener('mouseover', function() {
});

someEl.addEventListener('mouseout', function() {
});
```

## 浏览器加载事件

* 文档加载
* 样式加载
* 图片加载
* iframes加载

### jquery

```javascript
$(window).load(function(){
	/*页面加载并渲染完毕*/
})
```

### DOM API
```javascript
window.addEventListener('load', function(){
	/*页面加载并渲染完毕*/
})
```
文档加载完毕但未渲染

### jquery

```javascript
$(document).ready(function(){
	/*文档加载完毕*/
})
```

### DOM API
```javascript
document.addEventListener('DOMContentLoaded',function(){
	
})
```





### jquery

```javascript

```

### DOM API
```javascript

```












