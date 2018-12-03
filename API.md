## FormItem

- 描述：Form.Item 的二次封装

### API

|参数|说明|类型|默认值|
|:--|:--|:--|:--|
|form|经 Form.create() 包装过的组件会自带 this.props.form 属性，直接传给 FormItem 即可，`必须有`|object||
|formItemLayout|表单布局样式|object|`{labelCol: { sm: { span: 10 } },wrapperCol: { sm: { span: 14 } }}`|
|cols| formItemLayout 的简使用，数组表示左右占有空间，合计24|Array|[10, 14]|
|initialValue|初始值，回显使用|string||
|label|标签|string||
|fieldName|字段名，`必须有`|string||
|required|表单项是否为必填|boolean|true|
|validatorCallback|自定义校验规则，必须返回callback('错误码')|function(value, callback)||
|extra|表单下方的提示文案|string||
|readOnly|是否只读，文本模式|boolean|false|
|isChildren|当`readOnly=true`时, 此参数可用，并使用`children`|boolean|false|
|children|子节点|ReactNode|`<Input />`|
|extraRules|额外的规则，用法同 rules|array / object||
|valuePropName|同名表单字段监控|string||
|inputProps|Input 组件的属性 API|object|{}|
|selectAction|children 是否为 Select 组件，如果是，则提示信息不同|boolean|false|

### demo

受控组件, form 对象必须要有

```
<FormItem
  form={form}
  label="测试"
  fieldName="orgName"
  initialValue="123"
  validatorCallBack={(value, callback) => {
  	if (value === '') {
  		return callback('请填写xxx');
  	}
  	callback('请填写xxx');
  }}
/>
```

预览数据，不需要 form 参数，必须传 readOnly

```
<FormItem
  label="测试"
  readOnly
  initialValue="123"
/>

// or

<FormItem
  label="测试"
  readOnly
  isChildren
>
	// 自定义回显数据
</FormItem>
```
