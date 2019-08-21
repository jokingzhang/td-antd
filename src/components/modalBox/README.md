> Modal 的二次封装，让浮层更方便的显示和隐藏

### API

> 原 Modal 的 API 都能使用

|参数|说明|类型|默认值|
|:--|:--|:--|:--|
|show(callback)|浮层显示的函数|function||
|hide(callback)|浮层隐藏的函数|function||
|handleOk|点击确认按钮的回调函数|function||
|handleCancel|点击取消按钮的回调函数|function||

### demo

```
import React from 'react';
import { ModalBox } from 'td-antd';

class Demo extends React.PureComponent {
  render() {
    return(
      <React.Fragment>
        <button
          onClick={() => {
            this.modalRef.show(() => {
              console.log('show'); // 回调函数可省略
            })
          }}
        >
          show modal
        </button>
        <ModalBox
          ref={(r) => {this.modalRef = r}}
          title="标题"
          width={600}
        >
          test...
        </ModalBox>
      </React.Fragment>
    );
  }
}

export default Demo;
```