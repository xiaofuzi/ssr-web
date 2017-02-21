title: jQuery is not must for us——DOM操作
date: 2015-11-24 12:50:32
tags: jquery
archives: pl
---

通过浏览器提供的DOM API,我们可以完成对页面元素的增删改查移动等。

* 创建元素
* 插入元素
* 移动元素
* 删除元素
* 类操作
* 属性操作
* 文本操作
* 样式操作

<!-- more -->

## 创建元素

```javascript
/*jquery*/
	$('<div></div>');
/*DOM*/
document.createElement('div');
```

## 插入元素

```html
<div id="1"></div>
<div id="2"></div>
<div id="3"></div>
```

### 在id为1的div的后面插入一个id为1.1的div

```html
<div id="1"></div>
<div id="01"></div>
<div id="2"></div>
<div id="3"></div>
```

```javascript
/*jquery*/
	$('#1').after('<div id="1.1"></div>');
/*DOM*/
document.getElementById('1').insertAdjacentHTML('afterend', '<div id="1.1"></div>');
```

### 在id为1的div之前插入一个id为A的div

```html
<div id="A"></div>
<div id="1"></div>
<div id="2"></div>
<div id="3"></div>
```

```javascript
$('#1').before('<div id="A"></div>');

/*DOM
document.getElementById('1').insertAdjacentHTML('beforebegin', '<div id="A"></div>');
```

### 插入子元素

```html
<div id="parent">
	<div id="oldChild"></div>
</div>
```

插入一个子元素将其变成

```html
<div id="parent">
	<div id="newChild"></div>
	<div id="oldChild"></div>
</div>
```

```javascript
$('#parent').prepend('<div id="newChild"></div>');

/*DOM*/
document.getElementById('parent')
	.insertAdjacentHTML('afterbegin', '<div id="newChild"></div>');
```

## 移动元素

将下面的结构

```html
<div id="parent">
	<div id="c1"></div>
	<div id="c2"></div>
	<div id="c3"></div>
</div>
<div id="orphan"></div>
```
变成

```html
<div id="parent">
	<div id="c1"></div>
	<div id="c2"></div>
	<div id="c3"></div>
	<div id="orphan"></div>
</div>
```

### jQuery

```javascript
$('#parent').append('#orphan');
```

### DOM

```javascript
document.getElementById('parent')
	.appendChild(document.getElementById('orphan'));
```

如果想将id为orphan的div插入到c1

### jQuery

```javascript
$('#parent').prepend($('#orphan'));
```

```javascript
document.getElementById('parent')
	.insertBefore(document.getElementById('orphan'), document.getElementById('c1'));
```

## 移除

这里假设存在一个id为foobar的元素

### jQuery

```javascript
$('#foobar').remove();
```

### DOM

```javascript
document.getElementById('foobar').parentNode.removeChild(document.getElementById("foobar"));
```

## 添加和移除class

现在我们希望将

```html
<div id="foo"></div>
```

```html
<div id="foo" class="bold"></div>
```

### jQuery

```javascript
$('#foo').addClass('bold');
```

### DOM

```javascript
/*IE9有问题*/
docuement.getElementById('foo').classList.add('bold');

/*所有浏览器都支持*/
document.getElementById('foo').className += 'bold';
```

移除bold类


### jQuery

```javascript
$('#foo').removeClass('bold');
```

### DOM
```javascript
/*IE9有问题*/
docuement.getElementById('foo').classList.remove('bold');

/*所有浏览器都支持
document.getElementById('foo').className = document.getElementById('foo').className.replace(/^bold$/, '');
```

## 属性修改


给id="foo"的元素设置role属性为button

### jQuery

```javascript
$('#foo').attr('role', 'button');
```

### DOM

```javascript
document.getElementById('foo').setAttribute('role', 'button');
```

移除我们添加的属性

### jQuery

```javascript
$('#foo').removeAttr('role');
```

### DOM

```javascript
document.getElementById('foo').removeAttribute('role');
```

## 文本修改

### jQuery

```javascript
$('#foo').text('Goodbye!');
```

### DOM

```javascript
document.getElementById('foo').innerHTML = 'Goodbye!';
document.getElementById('foo').innerText = 'GoodBye!';
/*IE9+*/
document.getElementById('foo').textContent = 'GoodBye!';
```


## 样式修改

### jQuery

```javascript
$('#note').css('fontWeight', 'bold');
```

### DOM

```javascript
document.getElementById('note').style.fontWeight = 'bold';
```














