title: ES6 new features
date: 2016-1-23 15:06:36
tags: [js, pl]
---

## ES6新语法

### let、const、块级作用域

在这之前js中声明变量可以用var或是直接省略不写就可以声明一个变量，并且使用的是函数作用域。

es6可以通过 let、const(常量)这两个关键字来声明变量，并且支持块级作用域。

```js
var buttons = document.querySelectorAll('button')
  var output = document.querySelector('#output')

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
      output.innerText = buttons[i].innerText
    })
  }
```
上面这段代码会报错，因为点击事件的回调函数中的i的值都是buttons.length而不是当前循环的i.但
如果使用 let i 的话就不会出现这个问题。

### => 箭头函数

箭头函数可以把它当做匿名函数，优点就是语法简洁。

```js
x => x

(x, y) => x + y

x => {
	return x
}

(x, y) => {
	return x + y
}
```
### 函数上下文
箭头函数带来的另外一个改变是函数上下文的绑定(this)，this不再是随着调用者而改变，即使使用
call、apply也不会改变。即函数的上下文一直都是函数声明时的上下文。

```js
name = "xiaofu";
age = 20;
var obj = {
		name: "yang",
		age: 17,
		getName: function(){
			var name = () => {
				return this.name;
			}
			return name;
		},
		getAge: function(){
			var age = function(){
				return this.age;
			}
			return age;
		}
	}
var person = {
	name: 'cat',
	age: 28
}
myname = obj.getName();
myage = obj.getAge();
console.log(myname());				/*yang*/
console.log(myage())				/*20*/
console.log(myname.call(person));	/*yang*/
console.log(myage.call(person));	/*28*/
```
从上面我们可以发现箭头函数输出的一直都是声明的上下文即 obj 对象。

注：let const 带来了变量的作用域改变，而箭头函数带来了this指向的改变。而且我觉得这两个改变使js
与其它主流的语言更接近。

### 模板字符串

* 支持变量注入
* 支持换行

> ruby中就很好的支持这个特性。

模板使我们不在需要使用 '+' 来拼接字符串。

```js
let name = 'yangxiaofu';
let company = 'jikexueyuan';

let greet = `Hi, I am ${name}, I am working at ${company}`
console.log(greet) /* Hi, I am yangxiaofu, I am working at jikexueyuan*/
```  
如果使用es5, 那么我们需要这样做：
```js
var name = 'yangxiaofu';
var company = 'jikexueyuan';

var greet = "Hi, I am " + name ", I am working at ";
	greet += company;
console.log(greet) /* Hi, I am yangxiaofu, I am working at jikexueyuan*/
```

### 函数作为属性时可用省略 function 关键字

```js
let person = {
	//es5
	getName: function(){
		return 'person';
	},
	//es6
	getAge(){
		return 'age';
	}
}
```
不过我还是看着之前的写法比较习惯， function 关键字让我一眼就知道它是一个函数，
不过省略的写法的确简洁不少。

### 多重赋值

```js
let [x, y] = [30, 20];
```

### 默认值参数

```js
//es6
function person(name = "name"){
	return name;
}

//es5
function person(name){
	name = name || "name";
}
```
上面是es5的一种常用的默认值赋值方式，但当传入的值为 false 的情况下则无法达到预想的结果。

### ...args 替代 arguments

```js
/*es5*/
function method01() {
  var args = [].slice.apply(arguments)

}
function method02(name) {
  var args = [].slice.apply(arguments, 1)

}

/*es6*/
function method01(...args) {

}
function method02(name, ...args) {

}
```

### class

本质还是函数

```js
class Cat{}
/*
* [Function: Cat]
*/

class Person {
  constructor(name, height, age) {
    this.name = name;
    this.height = height;
    this.age = age;
  }

  toStr() {
    return `my name is ${this.name}`;
  }
}

var  me = new Person('yangxiaofu', 180, 19)
console.log(me.toStr()) /*my name is yangxiaofu*/
```
不足：无法直接设置类变量，这在其他原生支持类的语言中是可以的

```js
class Person{
	let parent = 'parents';	//wrong
	constructor(name){
		this.name = name;
	}
}
```
上面给类添加一个parent变量的写法是错误的。

### 类继承

```js

class Animal{
	eat(){
		console.log('eating something');
	}
}

class Cat extends Animal{
	constructor(name){
		super()
		this.name = name;
	}
}

var cat = new Cat('cat');
cat.eat();
```

使用extends关键字以及 super 方法，super方法必须在 this使用之前调用。

### 可以通过static定义静态方法

```js
class Animal{
	eat(){
		console.log('eating something');
	}
}

class Cat extends Animal{
	constructor(name){
		super()
		this.name = name;
	}

	static get fullname(){
		return 'cat animal';
	}
}

var cat = new Cat('cat');
console.log(Cat.fullname);
```

与c++这样的语言相比，类的特性还比较少。



