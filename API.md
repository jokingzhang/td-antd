## FormItem

> Form.Item 的二次封装

### API

|参数|说明|类型|默认值|
|:--|:--|:--|:--|
|form|经 Form.create() 包装过的组件会自带 this.props.form 属性，直接传给 FormItem 即可。`如果无，则该表单为“只读”`|object||
|formItemLayout|表单布局样式|object|`{labelCol: { sm: { span: 10 } },wrapperCol: { sm: { span: 14 } }}`|
|cols| formItemLayout 的简使用，数组表示左右占有空间，合计24|Array|[10, 14]|
|initialValue|初始值，回显使用|string||
|label|标签|string||
|fieldName|字段名，`必须有`|string||
|required|表单项是否为必填|boolean|true|
|validatorCallback|自定义校验规则，必须返回callback('错误码')|function(value, callback)||
|extra|表单下方的提示文案|string||
|children|子节点| reactNode |`<Input />`|
|extraRules|额外的规则，用法同 rules|array / object|[ ]|
|valuePropName|适用 switch 场景，'checked'|string|'value'|
|inputProps|Input 组件的属性 API|object|{ }|

### demo

受控组件, form 对象必须有，由 Form.create() 创建

```
<FormItem
  form={this.props.form}
  label="测试"
  fieldName="orgName"
  initialValue="123"
  extraRules={{ // 额外的规则配置
    pattern: '^[0-9]*$',
    message: '请填写正确的数字金额',
  }}
  validatorCallBack={(value, callback) => {
  	if (value === '') {
  		return callback('请填写xxx');
  	}
  	callback('请填写xxx');
  }}
/>
```

预览数据，不需要 form 参数

```
<FormItem
  label="测试"
  initialValue="123"
/>

// or

<FormItem
  label="测试"
  initialValue="123" // 此时 children 存在时，initialValue 无效
>
	222222
</FormItem>
```

## MoneyInput

> Form.Item 的二次封装，带单位的 input 受控组件

### API

|参数|说明|类型|默认值|
|:--|:--|:--|:--|
|form|经 Form.create() 包装过的组件会自带 this.props.form 属性，直接传给 MoneyInput 即可，`必须有`|object||
|formItemLayout|表单布局样式|object|`{labelCol: { sm: { span: 10 } },wrapperCol: { sm: { span: 14 } }}`|
|cols| formItemLayout 的简使用，数组表示左右占有空间，合计24|Array|[10, 14]|
|initialValue|初始值，回显使用|string||
|label|标签|string||
|fieldName|字段名，`必须有`|string||
|required|表单项是否为必填|boolean|true|
|validatorCallback|自定义校验规则，必须返回callback('错误码')|
|unit|单位|string|''|
|isNegative|是否可为负数，默认不可以| boolean |false|
|isInteger|值是否为整数，默认不是|boolean |false|
|inputProps|Input 组件的属性 API|object|{}|
|readOnly|只读，一般回显使用| boolean |false|

### demo

```
<MoneyInput
  form={this.props.form}
  label="金额"
  fieldName="money"
  unit="元"
/>
```

## H3

> 带按钮的标题组件，基础标签为 h3

### API

|参数|说明|类型|默认值|
|:--|:--|:--|:--|
|className|样式|string||
|title|标题名称|string||
|btnText|按钮的文案，如果文案不存在，则按钮不显示|string|''|
|disabled|按钮是否可用|boolean|false|
|onClick|按钮事件| function ||
|line|分割线| boolean |true|
|leftExtra|标题栏左侧额外展示区域|string / reactNode||
|rightExtra|标题栏右侧额外展示区域|string / reactNode||

### demo

```
<H3
  title="标题"
  leftExtra={<div>左侧额外展示区域</div>}
>
	children 内容
</H3>
```

## LinkBtn

> 样式和 a 标签一样的 button 组件

### API

|参数|说明|类型|默认值|
|:--|:--|:--|:--|
|className|样式|string||

### demo

```
<LinkBtn onClick={() => {console.log('click')}}>查看</LinkBtn>
```

## ModalBox

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

## FormItemSelect

> FormItem + Select 的受控组件，可以动态获取数据进行渲染

### API

> 继承 FormItem 的 API。如：form、label、fieldName、cols 等等

|参数|说明|类型|默认值|
|:--|:--|:--|:--|
|fetchUrl|请求的接口|string|''|
|callback(res)|请求成功后的回调函数，必须返回后端给与的列表数据，此回调函数必须有，且有返回值|function(res){}||
|fields|渲染所需要匹配的字段名。Array[0] 表示 code；Array[1] 表示 name；且 Array[1] 可以是一个函数，并具有返回值|Array|['', '']|
|selectProps|Select 组件的 API 都可使用|||

### demo

假设后端返回数据如下：

```
{
	dataObject: {
		datas: [
			{
				orgCode: 'code1',
				orgName: '机构1',
			}, {
				orgCode: 'code2',
				orgName: '机构2',
			},
		],
	}
}
```

```
<FormItemSelect
  form={this.props.form}
  fetchUrl="/trtprod/trtOrg/detailList.json"
  fields={['orgCode', 'orgName']}
  // fields={['orgCode', (item) => {
            return `这是机构：${item. orgName}`;
     }]}
  label="机构"
  fieldName="sponsorOrgCode"
  // initialValue={data.sponsorOrgCode}
  callback={res => {
  	 // 回调函数中必须返回列表渲染的数据
    return res.dataObject.datas;
  }}
/>
```

## CollapsePanel

> 带自定义区域内容的折叠面板，内部只有一层 Panel 组件。如果需要多个 Panel 组件，请使用 antd 官方的 Collapse 组件

### API

|参数|说明|类型|默认值|
|:--|:--|:--|:--|
|header|折叠面板标题|string|''|
|showArrow|是否显示箭头| boolean |false|
|disabled|是否禁用折叠面板| boolean |false|
|rightExtra|面板栏右侧自定义内容|string / reactNode||
|isOpen|是否展开|boolean|true|

### demo

```
<CollapsePanel
  header="折叠面板"
  rightExtra={<button>按钮</button>}
>
  children 内容
</CollapsePanel>
```

## DragModal

> 在原 Modal 基础上封装的”可拖拽“浮层。支持多浮层拖拽和展示使用。

### API

> 支持所有原 Modal 中的 API

### demo

```
import React from 'react';
import { DragModal } from 'td-antd';
import 'td-antd/dist/index.less';

export default class Demo extends React.PureComponent {
  state = {
    visible: false,
  };

  render() {
    const { visible } = this.state;

    return (
      <DragModal
        visible={visible}
        onOk={() => {
          this.setState({ visible: false });
        }}
      >
        22
      </DragModal>
    );
  }
}
```

## SelectMap

> 原 Select 基础上封装的组件，输入数据即可渲染

### API

> 支持原 Select 的 API，如 onChange、allowClear 等

|参数|说明|类型|默认值|
|:--|:--|:--|:--|
|data|渲染所需要的数据源|object / array|{ }|
|fields|当 data 为数组时，且数组成员为对象时，需要申明渲染字段|array[key, value]|[ ]|

### demo

> 普通对象

```
const data = {
  Y: '年',
  S: '季',
  M: '月',
  W: '周',
  D: '日',
};

<SelectMap data={data} />
```

> 数组、且数组成员为对象

```
const data2 = [
  { key: 'Y', value: '年' },
  { key: 'S', value: '季' },
  { key: 'M', value: '月' },
  { key: 'W', value: '周' },
  { key: 'D', value: '日' },
];

<SelectMap data={data2} fields={['key', 'value']} />
```

> 普通数组

```
const data3 = ['年', '月', '日'];

<SelectMap data={data3} />
```