1. prod 打包后生成的 lib 目录发布到 npm 后。在其他代码中引入会报错，可能需要对组件进行单独打包处理，如下：

```
// 引入方式
import SelectMap from 'td-antd/lib/SelectMap';

// error message
Module parse failed: Unexpected token (4:45)
You may need an appropriate loader to handle this file type.
```