title: javascript 闭包、this
date: 2016-1-25 15:06:36
tags: [js, pl]
---

> 闭包其实很好理解，但是由于经常把this和闭包绑在一起，从而加大了理解的难度，如果将他们分开考虑，那就清晰多了。

## 闭包

闭包并不是js首创，在许多语言中都支持闭包，如schemer、ruby等。如果没有闭包，像js这样的支持高阶函数特性的语言将是一个噩梦。

* 静态作用域
* 动态作用域

```js
var name = "xiaofu";
var person = function(lastname){
	var name = 'yang';

	function personName(){
		return name + lastname;
	}
	return personName;
}
var pName = person();
pName("xiaoming");
```
js是函数作用域的，即一个function就是一个作用域，所以personName在person这个函数的作用域里面。但是调用的是在这个作用域的外面，那么当personName执行的时候，它里面的name取的是person这个作用域还是最外层的作用域呢？

如果是静态作用域则调用的是person里面的 name, 如果是动态作用域则调用的是外层的name("xiaofu");而不是"yang"。

而闭包就是用来实现静态作用域的一种方式，即通过闭包将函数和它声明时的作用域保存下来，这样在调用的时候取到的就是声明时所在的作用域而不是调用时的作用域。

<!-- more -->

## this

this则与变量有点不同，即this采用的是类似于动态作用域的情况。js里面一切都是对象，所以函数也都是某个对象的方法，如果没有显示指定则是全局对象。

```js
var person = {
	fullname: function{
		console.log(this);
	},
	printAge: function(){
		console.log(this);
	}
}
person.fullname();		//this指向person
var age = person.printAge;
age();					//this指向window(浏览器中)
```
将person.printAge赋值给age之后，再执行age(),此时age没有显示指定调用对象则默认是window(浏览器环境)。所以this并不是声明所在的环境。


## 箭头函数（es6)

es6中新增了箭头函数，箭头函数与通过function声明的函数不同，它的this是使用的声明时上下文中的this.并且不可通过apply, call等改变。

