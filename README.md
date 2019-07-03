## td-antd

- 业务开发中沉淀下来的组件，基于 antd 的封装。
- 请确保在宿主项目中引入了 antd 依赖以及在代码中引入了 antd 样式。
- [API](https://www.yuque.com/books/share/49234b80-0d74-448d-aee4-eea060cdd8fc)

### Install

```
npm install --save td-antd
```

### Usage

```
import { H3, FormItem } from 'td-antd';
import 'td-antd/dist/index.css'; // 主文件引入一次即可
```

### Development

```
$ git clone https://github.com/long-zhuge/td-antd.git
$ npm i
$ npm run dev
$ sudo npm link

// 宿主项目中
$ npm link td-antd

// Usage
import { H3, FormItem } from 'td-antd';
import 'td-antd/dist/index.less'; // 请确保支持 less，如不支持 less，则可直接引用 'td-antd/dist/index.css'。

// 卸载测试组件
npm unlink td-antd
```
