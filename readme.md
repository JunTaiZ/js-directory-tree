# 原生js实现目录树
## [demo](https://juntaiz.github.io/js-directory-tree/)
## 下载

### 1. npm模块
``` 
$npm install js-directory-tree
```
#### 模块使用
```html
<link rel="stylesheet" href="node_modules/js-directory-tree/css/index.css">
```
```
// 或使用模块引入
import 'js-directory-tree/css/index.css';
import DirTree from 'js-directory-tree';
```

### 2. [github](https://github.com/JunTaiZ/js-directory-tree)下载相应文件

#### html引入css, js
```html
<head>
  <meta charset="UTF-8">
  <title>Title</title>
  <link rel="stylesheet" href="css/index.css">
</head>
<body>
<div id="tree"></div>
<script src="js/index.js"></script>
</body>
```
## 使用

```javascript
  const DT = new DirTree({
    root: '#tree',
    data: [{
      name: 'parent',
      children: [{
        name: 'css',
        children: [{
          name: 'index.css'
        }]
      }]
    }, {
      name: 'js-directory-tree',
      children: [{
        name: 'css',
        children: [{
          name: 'index.css'
        }]
      }, {
        name: 'js',
        children: [{
          name: 'index.js'
        }]
      }, {
        name: 'index.html',
      }]
    }],
    style: {
      lineHeight: 22,
      marginLeft: 20,
      paddingLeft: 20
    }
  })
```

## 选项

### root
目录树绑定的根元素的选择器（最好使用唯一的id选择器）  
若不唯一，选择第一元素

### data
```javascript
item = {
  name: String, // 目录或文件的名称
  children: [item] // 该目录有多少个子目录或文件
}
data = [item] // 根有多少个目录
```

### style
```javascript
style = {
  lineHeight: Number, // 每个目录或文件占多高
  marginLeft: Number, // directory-tree-container 的左外边距
  paddingLeft: Number // directory-tree-name 的左内边距，用于给图标让位
}
```
