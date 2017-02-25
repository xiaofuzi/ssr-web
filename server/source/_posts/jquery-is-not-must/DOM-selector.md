title: jQuery is not must for us--元素选取
date: 2015-11-28 11:40:32
tags: jquery
archives: pl
---

## 元素选择

1 .ID
2 .class
3 .Tag
4 .Attributes
5 .伪类
6 .孩子选择器
7 .后代选择器
8 .排除选择器
9 .多组选择器

### ID

#### jQuery

```javascript
$("#myElement");
```
#### DOM API 

```javascript
document.getElementById("myElement");
/*IE 8+*/
document.querySelector('#myElement');
```
<!-- more -->
### class
#### jQuery

```javascript
$('.myElement');
```
#### DOM API 

```javascript
/*ie 9+*/
document.getElementsByClassNmae('.myElement');
/*ie 8+*/
document.querySelectorAll('.myElement');
```

### Tag

#### jQuery

```javascript
$('div');
```
#### DOM API 

```javascript
document.getElementsByTagName('div');
/**ie 8+/
document.querySelectorAll('div');
```

### Attribute[属性]

#### jQuery

```javascript
$('[data-bar="red-bar"');
```
#### DOM API 

```javascript
/*ie 8+*/
document.querySelectorAll('[data-bar="red-bar"');
```

### 伪类

#### jQuery

```javascript
$('#myForm:invalid');
```
#### DOM API 

```javascript
//IE 10+
document.querySelectorAll('#myForm:invalid')
```

### 孩子选择器

#### jQuery

```javascript
$('#parent').children();
```
#### DOM API 

```javascript
/*会返回注释和文本节点*/
document.getElementById('parent').childNodes
/*ie 9+ 忽略注释和文本节点*/
document.getElementById('parent').children;
```

选择包含ng-click属性的子节点

#### jQuery

```javascript
$('#parent').children('[ng-click]');
$('#parent > [ng-click]');
```
#### DOM API 

```javascript
document.querySelector('#parent > [ng-click]');
```

### 后代选择

#### jQuery

```javascript
$("#parent a");
```
#### DOM API 

```javascript
document.querySelectorAll("#parent a");
```

### 排除选择

#### jQuery

```javascript
$("div").not('.ignore');
$('div:not(.ignore)');
```
#### DOM API 

```javascript
documenet.querySelectorAll('div:not(.ignore)');
```

### 多重选择

#### jQuery

```javascript
$('DIV, A, SCRIPT');
```
#### DOM API 

```javascript
document.querySelectorAll('DIV, A, SCRIPT');
```

### jQuery选择器模拟

```javascript
window.$ = function(selector) {
    var selectorType = 'querySelectorAll';

    if (selector.indexOf('#') === 0) {
        selectorType = 'getElementById';
        selector = selector.substr(1, selector.length);
    }

    return document[selectorType](selector);
};
```













