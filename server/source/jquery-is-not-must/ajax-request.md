title: jQuery is not must for us——异步请求
date: 2015-11-24 12:40:32
tags: jquery
archives: pl
---

jQuery对象只是对XMLHttpRequest对象进行了封装，真正的异步请求还是由浏览器发起的。

* GET
* POST
* URL Encode
* JSON
* Uploading
* CORS
* JSONP

<!-- more -->

## GET请求

在这里我们向服务器发起一个请求，给服务器传一个id参数然后希望服务器传回该id的用户名。

### jQuery

```javascript
/*常用的jquery get请求方式*/
$.ajax('myservice/username', {
	data: {
	id: 'unique_id'
	}
})
.then(
function success(name){
	alert("用户名是：" + name);
},
function fail(data, status){
	alert("请求失败. Return status of " + status);
})
```

### 原生XMLHttpRequest对象实现

```javascript
var xhr = new XMLHttpRequest();
xhr.open('GET', encodeURL('myservice/username?id=unique_id'));
xhr.onload = function(){
	if(xhr.status === 200){
	alert("用户名是：" + xhr.responseText);
}
else{
	alert('Request failed. Return status of ' + xhr.status);
}
};
xhr.send();
```

## POST

post用来向服务器传送数据，这里我们传入一个用户id和新用户名，希望服务器完成对该用户的修改同时会返回修改的内容。

### jQuery

```javascript
var newName = 'yangxiaofu';
$.ajax('myservice/username?' + $.param({id: 'unique_id'}),
{	method: 'POST',
	data: {
		name: newName
	}
})
.then(
	function sucess(name){
	if(name !== newName){
		alert("something wrong. Name is now " + name);
	}
},
function fail(data, status){
	alert('Request failed. Returned status of ' + status);
}
);
```

### 原生XMLHttpRequest对象实现

```javascript
var newName = "yangxiaofu",
	xhr = new XMLHttpRequest();

xhr.open("POST",
	encodeURI('myservice/username?id=unique_id'));
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencode');
	xhr.onload = function(){
		if(xhr.status === 200 && xhr.responseText !== newName){
		alert('Something went wrong.  Name is now ' + xhr.responseText);
	} else if (xhr.status !== 200) {
        alert('Request failed.  Returned status of ' + xhr.status);
    }
};
xhr.send(encodeURI('name=' + newName));
```

### URL Encoding

将一个对象转换成URL编码的字符串

```javascript
$.param({
	key1: "value1",
	'key2': "value2"
});
```

我们可以用encodeURL和encodeURLComponent来实现同样的功能,如果 URI 组件中含有分隔符，比如 ? 和 #，则应当使用 encodeURIComponent() 方法分别对各组件进行编码。

```javascript
function param(obj){
	var encodedString = '';
	for(var prop in object){
		if(object.hasOwnProperty(prop)){
			if(encodedString.length > 0){
				encodedString += '&';
			}
			encodedString += encodeURL(prop + '=' + object[prop]);
		}
	}
	return encodedString;
}
```

## 文件上传

首先我们应该明确，IE9及之前的版本如果要上传文件的话只能通过form表单，即如下的形式

```html
<input type="file">
```

通过浏览器提供的文件API ,我们可以通过两种方式上传文件：

* 使用multipart/form-data形式的表单
* 将文件数据存放在请求体中


通过下面的表单提交文件

```html
<input type="file" id="test-input">
```

### jQuery

```javascript
var file = $('#test-input')[0].files[0],
	formData = new FormData();

formData.append('file', file);

$.ajax('myserver/uploads',{
	method: 'POST',
	contentType: false,
	processData: false,
	data: formData
});

/*直接提交文件数据*/
$.ajax('myserver/uploads',{
	method: 'POST',
	contentType: file.type,
	processData: false,	/*避免jquery使用URL encode的形式对文件数据进行编码*/
	data: file
})
```

### XMLHttpRequest


```javascript
/*multipart编码形式*/
var formData = new FormData(),
	file = document.getElementById('test-input').files[0],
	xhr = new XMLHttpRequest();

formData.append('file', file);
xhr.open('POST', 'myserver/uploads');
xhr.send(formData);

/*将文件数据以request body的形式提交*/
var file = document.getElementById('test-input').files[0],
	xhr = new XMLHttpRequest();

	xhr.open('POST', 'myserver/uploads');
	xhr.setRequestHeader('Content-Type', file.type);
	xhr.send(file);
```










