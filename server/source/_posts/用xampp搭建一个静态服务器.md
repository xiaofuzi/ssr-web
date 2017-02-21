title: 静态服务器搭建
date: 2015-11-17 14:01:16
tags: [php, tool]
archives: pl
---
<style>
	img{
		width: 50%;
	}
</style>

1. [1.xampp搭建静态服务器](#1-xampp搭建静态服务器)
2. [2.sublime插件-SublimeServer](#2-SublimeServer)


## 1.xampp搭建静态服务器
XAMPP是完全免费且易于安装的Apache发行版，其中包含MariaDB、PHP和Perl。我们可以使用它来作为一个简单的静态服务器。

官网地址：https://www.apachefriends.org/zh_cn/index.html

到官网下载对应的版本安装即可

使用方式：

1.启动界面

<img src="/img/xampp/xampp01.png" alt="启动界面">

<!-- more -->

2.启动服务器

<img src="/img/xampp/xampp02.png" alt="启动服务器">

3.启动状态

<img src="/img/xampp/xampp03.png" alt="已启动服务器">

4.静态文件目录

<img src="/img/xampp/xampp04.png" alt="静态文件目录">

<img src="/img/xampp/xampp05.png" alt="静态文件目录">

将我们写好的静态页面放到htdocs文件夹下就可以通过如下的方式打开我们的页面

格式：

http://localhost/ + 静态文件路径(路径以htdocs为根目录，如htdocs下有一个jikexueyuan.html文件，那么可以通过http://localhost/jikexueyuan.html访问)
http://localhost/applications.html

如果上述方式无法打开，可通过ip访问

mac: 在命令行输入 ifconfig
window: 在命令行输入 ipconfig

<img src="/img/xampp/xampp06.png" alt="ip">

http://你的ip地址/ + 静态文件路径
http:192.168.1.103/jike/jikexueyuan.html

## 2.SublimeServer

----[官网地址](http://learningcn.com/SublimeServer/)

* package control安装
* 手动安装，将SublimeServer文件下到sublime package文件夹即可

如何使用：

* 安装插件
* Tools->SublimeServer->Start SublimeServer
* http://localhost:8080/+文件路径(在sublime folder中打开的项目，8080为默认端口，如有改动则更改为相应的端口)

补充说明：

Hbuilder、webstorm自带有服务器设置