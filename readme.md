# 原生js实现目录树

## 下载

### 1. npm模块
``` 
$npm install js-directory-tree
```
#### 模块使用
```
// import 'js-directory-tree/css/index.css';
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
    }]
  })
```

