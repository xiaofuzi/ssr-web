title: react/react-native代码规范实践
date: 2016-9-26 10:06:36
tags: [js, react, react-native]
topper: true
---

### 驼峰式命名 + 首字母大写

* 基于react本身的特性，组件命名首字母必须大写
* Javascript本身类命名推荐首字母
* 组件对应文件首字母大写并与组件名相对应

```js
/*TopicComponent*/
class TopicComponent extends Component {}
```
对应的文件名推荐使用 `TopicComponent`

### let/const 替代var

使用let/const而不是var,给所以变量加上块级作用域

### 四个空格缩进(若使用tab缩进可将tab设为4个空格)

### 语句必须分号结尾

### 声明语句运算符、括号前后加一个空格

```js
/*变量声明*/
const name = 'react';
let myname = 'xiaofu';
let num = 1 + 1;

/*函数声明*/
function fetch (params) {
    /**
     * body
     */
}

/*对象声明*/
let topicData = {
    msg: 'message',
    data: [],
    getData () {
        /**
         * body
         */
    }
}
```

### 私有属性及方法加下划线前缀

### 建议一个class一个文件，单文件不要超过200行

单文件过大会带来阅读障碍，如果功能过于复杂，建议拆分为子类

### 文件名与class名保持一致

### 严格划分好实例属性、props、state，避免重复渲染

不要滥用 state,应该只将影响视图的值存放在 state 中，这样可以避免频繁的 state 操作以及渲染。

### propTypes类型声明必须，并以es7 static关键字的格式声明

```js
export default class TopicComponent extends Component {
    static propTypes = {
        data: PropTypes.object.isRequired,
        fetchData: PropTypes.func.isRequired
    }

    constructor (props) {
        super(props);
    }
}
```

### state在构造函数中声明

```js
export default class TopicComponent extends Component {
    static propTypes = {
        data: PropTypes.object.isRequired,
        fetchData: PropTypes.func.isRequired
    }

    constructor (props) {
        super(props);

        this.state = {

        }
    }
}
```
### 单行注释写在当前代码行的末尾，尽量保持当前文件所有单行注释对齐
### 多行注释按如下格式，紧贴所需注释代码上方，无需空行(注意空格)

```js
/**
 * 注释
 */
```

### 常量声明在class之前
### import模块按类型划分在当前文件最前面部分，解构类型的导入一个空行分隔，与其它代码用两个空行分隔


```js
import React, {
    Component,
    PropTypes
} from 'react';

import {
    View,
    Text,
    StyleSheet,
    NavigatorIOS,
    ListView,
    TouchableHighlight,
    Image,
    ActivityIndicator,
    RefreshControl
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import moment from 'moment';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 64,
        paddingBottom: 48,
        backgroundColor: '#ffffff'
    }
}
```
### 组件代码编写顺序

* PropType声明
* 静态属性
* 实例属性
* 构造函数(包含state)
* 静态方法
* 实例方法 
* 私有函数
* 生命周期函数 
* render子函数以及render函数

