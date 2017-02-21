title: "what's is yeoman"
date: 2014-12-25 11:10:44
tags: tool
---

## Yeoman-前端工程化

yeoman——现代webapp构建工具，适合于复杂的web应用，yeoman又包括三个组成部分。在我们选择它或者使用它之前我们一定要知道它能做什么？适合做什么？

* Yo
* Grunt/gulp
* Bower/npm

### Yo

Yo提供了许多的生成器帮助我们快速的开始一个项目。因为在大多数时候我们的工作是重复的，比如要建立好目录文件结构，下载jquery/bootstrap等这些，然后将它们引入到页面中。Yo的作用就是将这些部分抽取出来并提供给我们，让我们无需从零开始，加快开发的进度。

### Grunt/gulp

自动化流程构建，文件压缩、编译、项目预览、测试等。

### Bower/npm

包管理工具，同时解决包的依赖关系。举个栗子，如果我们的项目中需要bootstrap，那么我们可能会需要去bootstrao的官网下载源码，同时bootstrap又回依赖于jquery，所以我们又去jquery的官网下载jquery,但是使用包管理工具，我们就可以使用一条命令就解决了。

```node
bower install boostrap
```

## yeoman安装使用

* 安装

```node
npm install -g yo bower grunt-cli gulp
```
这里将以全局的方式安装yo/bower/grunt-cli/gulp。
说明：grunt和gulp我们可以任选其一，bower和npm也可以任选其一，因为他们做的事是一样的。

* Yo生成器

Yo提供了webapp这样的生成器，提供了一个默认的模板项目，包括HTML5 Boilerplate/jQuery/Modernizr/Bootstrap这些，即我们使用'yo webapp'的形式就会帮助我们构建一个webapp项目，这个项目包括了上述的这些东西，当然在安装时我们可以选择性的选择是否需要。

在使用之前先安装一个app generator

```node
npm install -g webapp
```
之后就可以通过

```node
yo webapp
```
来使用一个生成器。


* bower配合yo使用

```node
grunt bower
grunt wiredep
```
将bower下载的包加载到项目文件中

* Grunt/gulp

gulp流程：

```node
yo webapp
gulp serve
gulp test
gulp
```

grunt流程：

```
yo webapp
grunt serve
grunt test
grunt
```

## Gruntfile.js

Gruntfile.js由以下几部分组成：

* "wrapper"函数
* 项目与任务配置
* 加载grunt插件和任务
* 自定义任务


示例：
```node
/*wrapper函数*/
module.exports = function(grunt) {

  // 项目配置
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      /*指定了一个banner选项(用于在文件顶部生成一个注释)*/
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });

  // 加载包含 "uglify" 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // 默认被执行的任务列表。
  grunt.registerTask('default', ['uglify']);

};
```


常用插件：
* contrib-jshint: js代码规范性验证
* contrib-watch: 文件变化监视
* contrib-clean: 目录清空
* contrib-uglify: js压缩
* contrib-copy: 文件合并
* contrib-connect: 开启connect服务器
* contrib-cssmin: css压缩
* contrib-less: less编译成css
* contrib-sass: sass编译成css
* autoprefixer: css前缀添加
* contrib-imagemin: 图片压缩
* usemin: 静态资源路径更换
* contrib-hmtlmin: html压缩
* bower: copy bower组件到生成目录
* wiredep: 将bower组件引入到html文件中

