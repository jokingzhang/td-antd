## td-antd

- 在 Antd 基础上二次封装的业务组件，减少重复开发。
- 请确保在宿主项目中引入了 antd 依赖以及在代码中引入了 antd 样式。

### API

- [portal](https://github.com/wb-chenlong/td-antd/blob/master/API.md)

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
$ git clone https://github.com/wb-chenlong/td-antd.git
$ npm i
$ npm run dev
$ sudo npm link

// 宿主项目中
$ npm link td-antd

// Usage
import { H3, FormItem } from 'td-antd';
import 'td-antd/dist/index.less'; // 请确保支持 less

// 卸载测试组件
npm unlink td-antd
```
