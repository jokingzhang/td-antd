- Antd 基础上二次封装的业务组件，减少重复开发。
- 请确保在宿主项目中引入了 antd。

### 组件 API

- [传送门](./API.md)

### 开发

1. 在 src 目录下创建组件文件并进行开发，如 Test/index.js
2. 在 src/index.js 中向外暴露该组件接口

	```
	export { default as Test } from './Test';
	```

### 测试

> 将开发好的项目进行打包

```
npm run build
```

> 将包文件暴露到全局环境，供其他项目引用并进行本地测试<br/>
> 此命令运行过一次后，就不必再运行多次

```
// mac 需要使用 sudo 命令来获取全局环境的权限
sudo npm link
```

> 在需要引入的项目中进行使用

```
// 项目根目录下运行命令
npm link td-antd

// 引入代码进行测试
import { Test } from 'td-antd';
```

> 卸载

```
npm unlink td-antd
```

- `注意`
	- 宿主项目在使用 npm link 引入 td-antd 进行打包时，会打包双份 antd 源码，请不要这样做。正确做法是使用 npm 发布的包版本。
