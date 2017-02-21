title: Javascript-类-模块化
date: 2015-12-08 15:06:36
tags: [js]
---

<div class="text-center" style="background:#414141;font-size: 48px;padding:40px 0;color:#ffffff;">Learn OOP -prototype<p style="font-size: 16px;">这里并不吹嘘面向对象有多牛，但作为现在主流的一种编程范式，我们有必要去了解。</p></div>

## 目录

* [Javascript面向对象实现](#Javascript面向对象实现)
	* [封装](#封装)
	* [继承](#继承)
	* [原始类型与复合类型说明](#原始类型与复合类型说明)
	* [继承实现](#继承实现)
	* [Mix-in](#Mix-in)
* [模块化](#模块化)





Javascript是基于原型的编程语言，并不是面向对象的语言。
<p class="text-important">ES6已实现class关键字，这让js看起来更像一门面向对象的语言</p>

<!-- more -->

主流语言类型：

* 基于原型的语言
* 面向过程的语言
* 面向对象的语言
* 函数式的语言

每一种语言的编程方式以及语法都会有所不同。

虽然Javascript并没有内置的类的实现，但可以模拟。Javascript有构造函数和new运算符，我们可以通过构造函数来实例化一个对象。


当使用new关键字来调用构造函数时，执行上下文变成一个空的上下文，这个上下文代表了新生成的实例，所以this指向当前创建的实例。

面向对象应该是现在使用最广的一种编程思想[不了解的点此，需自备梯子](https://zh.wikipedia.org/wiki/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1)

说到面向对象，首先让我想起的是C++，在我的印象里，C++是一门严格遵循面向对象思想的一门语言，封装、继承、多态。不仅如此，还支持多继承，这是其它很多语言没有做到的。

## Javascript面向对象实现

说到面向对象，最直观的就是通过 class 关键字来声明，因为js还没实现该关键字(ES6已实现)，在这里我们直接用构造函数来模拟即可。(以C++为例，在生成一个对象的时候也是去调用构造函数来创建对象的)

面向对象的三个特点：

* 封装
* 继承
* 多态

### 创建一个Animal类

```javascript
var Animal = function(){
	/*属性*/
	this.name = "animal";

	/*方法[函数、方法，在这里为什么不称为函数而称之为方法？]*/
	this.talk = function(){
		console.log("what's your name?");
	}
}
```

### 实例化对象

```javascript
var Cat = new Animal;
var Dog = new Animal;
```

实例化一个对象时一般会需要进行初始化设置，这里可以通过构造函数传参实现

```javascript
var Animal = function(name){
	/*属性*/
	this.name = name || "Animal";

	/*方法*/
	this.talk = function(){
		console.log("My name is: ", name);
	}
}

var cat = new Animal("Cat");	/*名字是Cat*/
var dog = new Animal("Dog");	/*名字是Dog*/
```
<p class="text-important">说明:</p>

```javascript
var name;
name = pname || "Animal";
/*与下面的功能等同*/
var name;
if(pname){
	name = pname;
}else{
	name = "Animal";
}
```
这是js的一种默认值设置技巧，当pname == undefined时，name赋值为 "Animal",否则name等于pname


###  封装

封装也叫数据抽象，将数据和处理数据的方法结合起来，对数据的处理和操作只能通过事先定义好的方法来进行。

```javascript
var Animal = function(name, age, weight, height){
	/*属性:名字、年龄、体重、身高*/
	this.name = name || "Animal";
	this.age = age || 0;
	this.weight = weight || 0;
	this.height = height || 0;
	

	/*方法*/
	/*输出对象信息*/
	this.introduce = function(){
		console.log("name: ", this.name, "age: ", this.age, "weight: ", this.weight, "height: ", this.height);
	}
	/*设置对象属性*/
	this.setMyself = function(name, age, weight, height){
		this.name = name || this.name;
		this.age = age || this.age;
		this.weight = weight || this.weight;
		this.height = height || this.height;
	}
}
/*实例化的对象自带的方法*/
var cat = new Animal("Cat");	/*名字是Cat*/

cat.introduce();		/*输出：name:  Cat age:  0 weight:  0 height:  0*/
cat.setMyself("cat", "18", "50kg", "170cm");
cat.introduce();		/*这时输出: name:  cat age:  18 weight:  50kg height:  170cm*/
```

上面我们给Animal设置了四个属性：名字、年龄、体重、身高;两个个方法：introduce(), setMyself();
在这里我们对Animal做了封装即数据的抽象,类的数据部分由四个属性构成，方法则是处理部分.这里我们通过introduce()和setMyself()方法来输出、设置属性的值。

<p class="text-important">注(javasript语言自身的一些特点)：</p>

* 1.从上面的代码我们可以看到，this无处不在，也正是通过this才实现了类到对象的传递。Does it must？

* 2.主流的边长语言中都会有private/protect/public这三个参数来控制继承关系中变量的作用域，但是js中没有，对此我们需要进行一定的处理

* 3.js函数的参数是灵活可变[声明的参数与传入的参数不强制要求相同]
	因为js函数参数的这种特点，一般我们传入一个对象作为参数，如：{name: "cat", age: "18", wight: "50kg", height: "170cm"}

#### 无处不在的this

这里为了更清晰，我们将代码稍稍简化一下(从程序的健壮性来说，对参数的合法性进行验证是很有必要的)：

```javascript
var Animal = function(name, age, weight, height){
	/*属性:名字、年龄、体重、身高*/
	this.name = name;
	this.age = age;

	/*这里我们使用局部变量来声明体重和身高属性*/
	var weight = weight;
	var height = height;
	

	/*方法*/
	/*输出对象信息*/
	this.introduce = function(){
		/*这里的weight和height不需要用this.weight/this/height的形式来调用*/
		console.log(this);	/*谁调用，this就指向谁,这里是实例化的对象调用，则指向该对象*/
		/*这里的weight和height不需要用this.weight/this/height的形式来调用*/
		console.log("name: ", this.name, "age: ", this.age, "weight: ", weight, "height: ", height);
	}
	/*设置对象属性*/
	this.setMyself = function(name, age, pweight, pheight){
		this.name = name;
		this.age = age;
		/*为什么改成pweight, pheight,当形参和函数所在上下文的变量冲突时，函数内部是取不到变量的
		这种情况下，这两个都是形参，而不是我们上面声明的局部变量，所以在此将变量名称更改为不同的值。
		weight = weight;
		height = height;
		*/
		weight = pweight;
		height = pheight;
	}
}

/*实例化的对象自带的方法*/
var cat = new Animal("cat", "18", "50kg", "170cm");	/*名字是Cat*/

cat.introduce();
cat.setMyself("cat", "28", "70kg", "180cm");
cat.introduce();
```

输出结果：

```javascript
name:  cat age:  18 weight:  50kg height:  170cm
name:  cat age:  28 weight:  70kg height:  180cm

/*cat对象的值,并没有包括weight和height*/
{
	name: "cat", 
	age: "28",
	this.introduce: function(){...},
	this.setMyself: function(){...}
}
```

从这里我们可以得出结论：

* 实例化的对象得到的是挂载在构造函数this下的属性和方法(new 关键字的作用是返回一个新的对象并将this指向该对象)。所以为了将属性和方法传递给实例化的对象，我们就需要将属性和方法挂在this下。
* 闭包,这里虽然weight和height并没有挂在构造函数的this下，但实例化的对象cat却能够通过introduce()方法访问到,这就是闭包的作用，要理解闭包，需要清除两点。
	* 函数调用时上下文是声明时所在的上下文(introduce()声明的作用域是Animal构造函数，可以访问局部变量weight/height)
	* 函数内部的this指向的是调用者(调用cat.introduce():所以introduce内部的this指向cat对象)
这样虽然实力话的对象(cat)不能访问weight和height变量，却可以通过introcuce方法来访问。

### 继承作用域限制(private/protect/public)

* private声明：类本身可以访问
* protect声明：子类可以访问
* public声明：对象可以访问

从上面this的分析我们可以知道，因为构造函数的this即指向实例化的对象，所以对象是可以直接访问属性的，即可以这样写:

```javascript
cat.name;
cat.age;
```
那么挂载在this下的即相当于public声明，通过闭包形式实现的则类似于privite,对象只能通过继承而来的方法来访问变量。这样我们就可以简单的模拟公共变量和私有变量。

注：闭包会造成作用域不能及时的释放，所以不易大量的使用。

一种比较简单的做法是通过"_"的形式来声明私有变量，这需要人为的约定遵从。如：

```javasript
this._name;
this._age;
```
并不是真正意义上的私有变量，只是让它看起来像私有变量。我们依然可以通过cat._name的形式来访问。

protect形式的用得并不太多，这里就不考虑了。

#### 参数说明

javascript是一门动态、弱类型的语言。我们不需要预先声明变量的类型，这非常的灵活但有时也会造成类型的混乱。同时javascript函数的参数非常的灵活，
形参和实参并不需要一一对应的关系。所以为确保程序能够正确的运行，我们往往需要对参数进行验证。

在此基础上，我们可以通过传递Object对象作为参数的方式来编写，


```javascript
var Animal = function(obj){
	/*属性:名字、年龄、体重、身高*/
	this.name = "Animal";
	this.age = 0;
	this.weight = 0;
	this.height = 0;
	
	/*初始化方法*/
	this.initial = function(obj){
		this.name = obj['name'] || this.name;
		this.age = obj['age'] || this.age;
		this.weight = obj['weight'] || this.weight;
		this.height = obj['height'] || this.height;
	}

	/*方法*/
	/*输出对象信息*/
	this.introduce = function(){
		console.log("name: ", this.name, "age: ", this.age, "weight: ", this.weight, "height: ", this.height);
	}
}
/*实例化的对象自带的方法*/
var cat = new Animal({name: 'Cat'});	/*名字是Cat*/

cat.introduce();
cat.initial({name:"cat",age: "18",weight: "50kg",height: "170cm"});
```

### 继承

类和对象的关系已经实现了继承，即对象会继承类的特性。更进一步，因为都是对象，所以可以直接赋值

```javascript
/*新建一个cat对象*/
cat = new Animal;
/*将cat对象拷贝给redCat,这样redCat也具有了cat的属性和方法*/
redCat = cat;	
```
这种方式只是更改了名字而已，它们其实还是同一个对象，redCat的操作等同于cat进行的操作

### 原始类型与复合类型说明

* 原始值：按值传递 string/number/boolean/null/undefined 注:null和undefine是不同的.
* 复合类型：按引用传递 object/array/function

```javascript
/*原始类型*/
var name = "yangxiaofu";
var age = 18;

/*复合类型*/
var person = {
	name: "yangxiaofu",
	age: 18
}
var score = [100, 90, 80]

var newName = name;
var newAge = age;
var newPerson = person;
var newScore = score;

newName = "xiaoyang";
newAge = 20;

newPerson.name = "newPerson";
newPerson.age = '30';

newScore[1] = 0;

console.log(name, age);		/*yangxiaofu 18,说明改变newName和newAge并不影响到name,age的值*/
console.log(person, score);	/*{name: "newPerson", age: "30"} [100, 0, 80]，对newPerson和newScore的修改影响到了person和score*/
```

复合类型的这种引用传递方式有时很有用，但我们在实现继承的时候却不希望继承者的改变会影响到被继承者。这里可以通过拷贝的方式来实现。

* 浅拷贝
* 深拷贝

```javascript
var person = {
	name: "yangxiaofu",
	brother: {
		name: "xiaoyang",
		age: 12
	}
}

/*浅拷贝，即只拷贝第一层*/
var copy = function(obj){
	var newObj = {};
	for(var p in obj){
		newObj[p] = obj[p];
	}
	return newObj;
}

var newPerson = copy(person);
newPerson.name = "newPerson";
newPerson.brother.name = "newBrother";

console.log(person, newPerson);

/*深拷贝，检测对象属性是否是复合类型，若是则递归拷贝*/
var deepCopy = function(obj){
	if(typeof obj != 'object'){
		return obj;
	}else{
		/*var newObj = {};*/
		var newObj = obj.constructor === Array?[]:{}; /*增加对数组的支持*/
		for(var p in obj){
			newObj[p] = deepCopy(obj[p])/*递归拷贝*/
		}
		return newObj;
	}
}

var deepPerson = deepCopy(person);
deepPerson.name = "deepPerson";
deepPerson.brother.name = "deepBrother";
console.log(person, newPerson, deepPerson);
```
<img src="/img/prototype/deepCopy.png" alt="浅拷贝、深拷贝">
从上图可以知道使用浅拷贝时，拷贝所得新对象的属性brother(也是一个对象)的修改操作会影响到原对象的brother属性，而使用深拷贝已不会影响。

继承也可通过上面的拷贝函数来实现。

### 继承实现

* 构造函数实现

上面我们已经用构造函数实现了类，并实现了继承。实例对象会继承类的属性和方法

* 拷贝实现

```javascript
function extend(subObj, obj){
	if(typeof obj != 'object'){
		subObj = obj;
	}else{
		/*var newObj = {};*/
		var newObj = obj.constructor === Array?[]:{}; /*增加对数组的支持*/
		for(var p in obj){
			newObj[p] = extend(obj[p])/*递归拷贝*/
		}
		subObj = newObj;
	}
}
```
subObj会继承obj对象的属性方法，如果有同样的属性方法会被obj的替代。

在ruby中有一种实现类似多继承的功能，是mix-in,使用模块继承方式，其实类似于我们这里的拷贝继承，将一个对象[注意这里不是类]的方法属性继承到一个新的对象中。

* prototype实现

prototype即原型，通过原型链，可以实现层次关系，这是拷贝的方式所不能达到的。

```javascript
var Animal = function(obj){
	/*属性:名字、年龄、体重、身高*/
	this.name = "Animal";
	this.age = 0;
	this.weight = 0;
	this.height = 0;
	
	/*初始化方法*/
	this.initial = function(obj){
		this.name = obj['name'] || this.name;
		this.age = obj['age'] || this.age;
		this.weight = obj['weight'] || this.weight;
		this.height = obj['height'] || this.height;
	}

	/*方法*/
	/*输出对象信息*/
	this.introduce = function(){
		console.log("name: ", this.name, "age: ", this.age, "weight: ", this.weight, "height: ", this.height);
	}
}

Animal.prototype.fly = function(){
	console.log("I can fly!");
}
/*实例化的对象自带的方法*/
var cat = new Animal({name: 'Cat'});	/*名字是Cat*/
cat.fly();	/*I can fly!*/
cat.fly = function(){
	console.log("I can't fly!");
}
cat.fly();	/*I can't fly!*/
```

对象在调用它的方法的时候会先去查找自己是否有这个方法，若没有则通过__proto__找到原型对象，从原型对象上查找该方法，如果还没找到则会继续往上找即js原型链。挂在prototype对象下的好处是所有的实例对象公用，不会每一个对象保存一份拷贝，这样会节省不少内存.


### Mix-in

拷贝继承会将一个对象的方法属性加到我们的对象中，这样出现冲突则会覆盖，并且没有层级关系，我们可以通过prototype来解决。

```javascript
function extended(sub, parent){
	if(typeof sub.__proto__ === 'object'){
		/*如果sub对象的__proto__对象是object，则直接赋值，否则在sub上多加一层__proto__*/
		sub.__proto__ = parent;
	}else{
		var temp = sub.__proto__;
		sub.__proto__ = parent;
		parent.__proto__ = temp;
	}
}
```

如我们现在的继承关系是这样的：

* 1.动物[类|Animal]——>猫[实例对象|cat]
* 2.给猫增加咖菲猫的功能[coffeCat]
* 3.extended(cat, coffeCat)

这时我们得到的继承关系是这样的：

* cat.__proto__: 指向coffeCat
* coffeCat.__proto__: 指向Animal

即cat->Animal变成了cat->coffeCat->Animal

上面这种继承方式会优先调用通过extended继承来的属性。

如果想要优先继承自己的类的可以这样做：

```javascript
function extended(sub, parent){
	if(typeof sub.__proto__ === 'object'){
		/*如果sub对象的__proto__对象是object，则直接赋值，否则在sub上多加一层__proto__*/
		sub.__proto__ = parent;
	}else{
		sub.__proto__.__proto__ = parent;
	}
}
```

即cat->Animal变成了cat->Animal->coffeCat这样的继承关系

### 多态
在动态类型的语言里面一般较少的提到多态，所以这里不提及。

## 模块化

模块化即抽象，我们前面的封装操作即模块化的过程，一个函数可以作为一个模块，一个类可以作为一个模块，一个对象可以作为一个模块，一个文件也可以作为一个模块。

当我们谈到js的模块化的时候更多的是从文件层次，即一个文件代表一个模块。seaJS就是出于这样的目的来的，因为js自身没有这样的功能(ES6已具备这样的功能)。

* cmd
* amd
* Es6




