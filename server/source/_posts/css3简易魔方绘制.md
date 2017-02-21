title: css3简易魔方绘制
date: 2015-11-11 14:08:10
tags: css
archives: pl
---

简易魔方效果：[点击查看](/other/3dCube/index.html)
在线编辑实例：[点我开始制作](/liveCoding/demo/index.html)

## 立方体绘制

3D变化的坐标如下所示：

<img src="/img/3d_axes.png" alt="css3D坐标系">

网格所在的面代表我们的设备屏幕（大多情况下为电脑屏幕）

### transform

浏览器支持情况:
Internet Explorer 10、Firefox 以及 Opera 支持 transform 属性。
Chrome 和 Safari 需要前缀 -webkit-。
注释：Internet Explorer 9 需要前缀 -ms-。

<!-- more --> 

旋转测试：

正常情况
<div class="margin-auto" style="height: 80px;">
	<div style="position:absolute;background: brown;height: 50px;width: 50px;"></div>
</div>

transform: rotateX(Xdeg);[以X为轴进行旋转]

<div class="rotateX-wrapper">
	<div class="box"></div>
</div>

transform: rotateY(Xdeg);[以Y为轴进行旋转]

<div class="rotateY-wrapper">
	<div class="box"></div>
</div>


transform: rotateZ(Xdeg);[以Z为轴进行旋转]

<div class="rotateZ-wrapper">
	<div class="box"></div>
</div>

<hr>
偏移测试：
<div class="translateX-wrapper">
	<div class="box">translateX</div>
</div>

<div class="translateY-wrapper">
	<div class="box">translateY</div>
</div>
<hr>



注：这里将父容器宽高设为与子容器一样（若有边框需要考虑边框的大小）

<div class="margin-auto" style="height: 150px;">
	<div class="square-wrapper"><div class="front"></div><div class="behind"></div><div class="left"></div><div class="right"></div><div class="top"></div><div class="bottom"></div>
	</div>
</div>

注：示例并未做兼容处理
1 前后两个面经Z轴偏移，前为正（向屏幕外，用户的方向偏移），后为负得到
2 左右两个面经旋转偏移得到

同时设置旋转和偏移时，属性的顺序会影响最终的效果
<div class="margin-auto" style="height: 150px;">
	<div class="square-wrap"><div class="front"></div><div class="behind"></div><div class="left"></div><div class="right"></div><div class="top"></div><div class="bottom"></div>
	</div>
</div>

立方体效果（添加了旋转动画）

```html
<div class="square-wrapper">
	<div class="front"></div>
	<div class="behind"></div>
	<div class="left"></div>
	<div class="right"></div>
	<div class="top"></div>
	<div class="bottom"></div>
</div>
```

```css
.square-wrapper,
.square-wrapper > div{
	position: absolute;
	width: 100px;
	height: 100px;
}

/*立体实现*/
.square-wrapper{
	margin-top: 20px;
	transform-style: preserve-3d;
	animation: square-animation 5s infinite;
}

@keyframes square-animation{
	0% {transform: rotateX(0deg) rotateY(0deg);}
	45% {transform: rotateX(90deg)}
	75% {transform: rotateY(90deg);}
	90% {transform: rotateX(45deg) rotateY(45deg);}
	100% {transform: rotateX(0deg) rotateY(0deg);}
}

.square-wrap .top{
	background-color: red;
	transform: translateY(-50px) rotateX(90deg);
}

.square-wrap .bottom {
	background-color: brown;
	transform: translateY(50px) rotateX(-90deg);
}

.square-wrap .left{
	background-color: green;
	transform:translateX(-50px) rotateY(90deg);
}

.square-wrap .right{
	background-color: blue;
	transform: translateX(50px) rotateY(-90deg);
}

.square-wrap .front{
	background-color: #ddd;
	transform: translateZ(50px);
}

.square-wrap .behind{
	background-color: #000000;
	transform: translateZ(-50px);
}
```




