title: prototype、__proto__、constructor、this——不懂别说会JS
date:  2015-11-28 01:06:36
archives: pl
tags: [jquery, js]
---

<img data-src="/img/prototype/so_many_questions.png" alt="so_many_questions">
刚开始接触js的时候，我的疑问就像上面密密麻麻的问题。。。

## JS对象

* 每一个Javascript对象(null除外)都和另一个对象相关联，即原型，每一个对象都从原型继承属性。
* 所有通过对象直接量创建的对象都具有同一个原型对象，通过Object.prototype可以获得对原型对象的引用。
* 通过new关键字和构造函数创建的对象的原型就是构造函数的prototype属性的值
* 普通的原型对象属于普通对象，普通对象都具有原型(Object.prototype比较特殊，不继承任何属性)
* 所有的内置构造函数以及大部分自定义构造函数都具有一个继承自Object.prototype的原型
* 构造函数的原型中存在预先定义好的constructor属性，对象继承的constructor均指代他们的构造函数。构造函数是类的标识，因此这个constructor属性为对象提供了类

```javascript
var o = new F();
o.constructor === F	/*true,指代类本身*/
```
<!-- more -->

## Javascript中class的写法

注：为和普通函数区别开，类的命名首字母一般是大写

下面定义了Cat、cat类
```javascript
/*写法一：*/
var Cat = function(){
	this.animal = "Cat:大写的猫";
};

var cat = function(){
	this.animal = "cat:小写的猫";
};
```

```javascript
/*写法二：*/
function Cat(){
	this.animal = "Cat:大写的猫";
}

function cat(){
	this.animal = "Cat:小写的猫";
}
```
这里输出的结果是相同的，即类的命名首字母大写并不是强制的

### 对象生成

```javascript
var objCat = new Cat; /*大写的猫对象*/
var objcat = new cat; /*小写的猫对象*/

/*输出*/
console.log(objCat, objcat);
```
<img src="/img/prototype/cat-01.png" alt="类的命名首字母大写并不是强制的">

从上面我们可以看到:对象objCat——>__proto__[Cat类]——>__proto__[Object对象],这就是所谓的继承链.



## prototype VS __proto__ 对象

### 添加prototype对象

这里给Cat添加prototype对象,cat不做改动

```javascript
/*写法一：*/
var Cat = function(){
	this.animal = "Cat:大写的猫";
};

var cat = function(){
	this.animal = "cat:小写的猫";
};

Cat.prototype.eat = function(){
	return "I like fish!";
}
```

说明：同一个类生成的所有对象会共用类的prototype对象上挂载的方法和属性

```javascript
redCat = new Cat;
greenCat = new Cat;

console.log(redCat.eat(), greenCat.eat());
```
redCat和greenCat调用的是同一个方法即Cat.prototype.eat,所以都会输出"I like fish!".


```javascript
Cat.prototype.eat = function(){
	return "I like fish!";
}
```

/*同样输出两个生成的对象*/

```javascript
console.log(objCat, objcat);
```
<img src="/img/prototype/cat-02.png" alt="这里给Cat添加prototype对象,cat不做改动">

从上图可以发现大写的猫对象多输出了两行,这里出现了一个"__proto__"属性,那么它代表什么呢？因为这是我们的Cat类设置了prototype后Cat对象才出现的属性，所以我们可以猜测这两者之间有某种密切的关系，为了验证我们的想法，我们可以输出测试一下。

```javascript
console.log(objCat.__proto__, Cat.prototype);
```
<img src="/img/prototype/cat-03.png" alt="console.log(objCat.__proto__, Cat.prototype)">

我们可以惊奇的发现输出结果一模一样，为了再次证明它们是同一个东西，我们再次进行验证

```javascript
/*注意这里是3个等号哦*/
console.log(objCat.__proto__ === Cat.prototype);  			/*result:true*/
console.log(objCat.__proto__.eat(), Cat.prototype.eat());	/*I like fish! I like fish!,调用了同一个 eat 方法*/
```

从这里我们可以得一个结论：对象会继承类的prototype对象并存在一个名为"__proto__"的属性中,即对象的"__proto__"属性指向生成它的类的"prototype"对象

<p class="text-important">protoype和__proto__统称为原型对象，但前者是在类中，后者是在对象中的表示，实例对象中没有prototype属性的。[js中的类是通过function来模拟的，每一个function都有一个prototype属性</p>

## constructor属性

构造函数的原型中存在预先定义好的constructor属性，对象继承的constructor均指代他们的构造函数。构造函数是类的标识，因此这个constructor属性为对象提供了类.

这句话怎么来理解呢？

1 .构造函数的原型中存在预定义好的constructor属性
2 .constructor指代他们的构造函数
3 .constructor属性为对象提供了类

```javascript
var CatConstructor = Cat.prototype.constructor;
console.log("Cat:", Cat, Cat.prototype);
console.log("CatConstructor:", CatConstructor, CatConstructor.prototype);
```

这里为了更清晰的理解上面这几个点，我们将Cat类的原型的constructor属性赋值给CatConstructor,然后分别打印他们本身以及他们的原型对象。

<img src="/img/prototype/cat-04.png" alt="Cat.prototype.constructor">

从上图我们可以发现两者是完全一样的，即Cat.prototype.constructor等于Cat本身。

那么第三点怎么理解呢？既然constructor代表Cat构造函数本身，那么我们是不是可以用它来生成对象——类才具有的功能

```javascript
var CatConstructor = Cat.prototype.constructor;
var newObjCat = new CatConstructor;

console.log("objCat:", objCat, "newObjCat", newObjCat);
```

<img src="/img/prototype/cat-05.png" alt=""objCat:", objCat, "newObjCat", newObjCat">

如我们所料，上面输出的objCat和newObjCat结果是一样的，所以验证了第三点，类的原型的constructor属性即类本身

## this——到底指向了谁

```javascript
Cat.init = function(){
	console.log("Cat:", this);
	return this;
}

Cat.prototype.init = function(){
	console.log("Cat-prototype:", this);
	return this;
}

Cat.init();				/*this代表Cat类本身*/
Cat.prototype.init();	/*this代表Cat.prototype对象*/

objCat.init();			/*this代表objCat对象本身*/
```
<img src="/img/prototype/cat-06.png" alt="this——到底指向了谁">

从上图可以发现，输出为：

Cat.init():输出构成函数本身
Cat.prototype.init():输出类的原型对象
objCat.init(): 输出结果都是objCat对象本身且调用的是Cat.prototype.init方法

从上面我们可以知道this始终指向调用方法的对象本身

### 构造函数中调用原型对象上绑定的方法——指向谁呢

注：当我们在说构造函数的时候，其实是将构造函数和类等同起来

```javascript
/*jquery构造函数模拟*/
var Cat = function(){
	this.animal = "Cat:大写的猫";
	/*调用原型上绑定的init方法*/
	return new Cat.prototype.init();
};
Cat.prototype = {
	init: function(){
		return this;	/*当做为构造函数时，返回值好像并没有啥用处*/
	}
}
Cat.prototype.init.prototype = Cat.prototype;

Cat();
```

### 稍稍复杂一点的情况

```javascript
var Cat = function(params){
	this.animal = "Cat:大写的猫";
	/*调用原型上绑定的init方法*/
	return new Cat.prototype.init(params);
};
Cat.prototype = {
    init: function(params){
        this.animal = params;
        this.type = params;
        this.color = params;
    },
    eat: function(){
        return "I like fish!";
    },
    name: function(){
        return this.animal;
    },
    color: 'yellow'
}
Cat.prototype.init.prototype = Cat.prototype;

var redCat = Cat("redCat");
var greenCat = Cat("greenCat");
console.log(redCat, greenCat);
```

输出结果如下：

<img src="/img/prototype/cat-07.png" alt="jquery对象生成方式模拟">
<p class="text-important">这里的init方法里的this指向的是Cat.prototype,init方法里的animal和Cat类的animal也没有关系,init这时相当于我们的构造函数，而它自身又是自身的prototype里的一个方法[是不是已已绕晕。。。]</p>

* this.animal = params;
* this.type = params;
* this.color = params;

它们是构造函数即类的属性，而init函数外面的color: 'yellow'是挂在原型上的，所以生成的对象在访问color属性的时候是获取构造函数里的值[原型链继承的优先级]

```javascript
console.log(redCat.__proto__.color);		/*输出结果是:yelow,说明我的确是挂在类的原型上的*/
```

<p class="text-important">上述的jquery构造函数语法模拟的一个不足就是无法得到Cat类上的属性,如Cat里的animal.[如果你有好的方法获取请告知我]</p>






