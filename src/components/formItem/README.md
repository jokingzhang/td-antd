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
|itemType|申明组件类型，普通组件(default) / Number组件(number)|string|default|

> 当 itemType="number" 时，只能输入数字，并可以使用以下属性<br />
> 遵循 input 的 type="number" 的 w3c 规则

|参数|说明|类型|默认值|
|:--|:--|:--|:--|
|unit|显示单位|string|' '|
|isNegative|是否为负数，默认不可以| boolean |false|
|isInteger|是否为整数，默认不是|boolean |false|
|positionTop|定位，可能会出现上下移位的问题|number|4|

### demo

受控组件, form 对象必须有，由 Form.create() 创建

```
// 普通组件
<FormItem
  form={this.props.form}
  label="测试"
  fieldName="orgName"
/>

// 带 children 的组件
<FormItem
  form={this.props.form}
  label="测试"
  fieldName="orgName"
>
	<Select>
		<Select.Option key="age">age</Select.Option>
	</Select>
</FormItem>

// 增强使用
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

// 带单位的只能输入数字的组件
<FormItem
  form={this.props.form}
  label="金额"
  fieldName="momey"
  itemType="number" // 申明组件类型
  unit="元"
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