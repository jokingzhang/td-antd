> Descriptions 的二次封装，像 Table 一样使用

- antd 版本要求：`3.19.0`

## API

### DescList

> 支持 Descriptions 的所有 API

|参数|说明|类型|默认值|
|:--|:--|:--|:--|
|dataSource|数据源|object|{}|
|columns|列描述数据对象|array|[]|
|defaultValue|默认展示的值|string|'--'|

### columns

|参数|说明|类型|默认值|
|:--|:--|:--|:--|
|title|label展示的值|string/ReactNode|-|
|dataIndex|数据在数据项中对应的 key，支持嵌套写法"key.key.key"|string|-|
|unVisible|是否不显示|bool|false|
|render|生成复杂数据的渲染函数|Function(render) {}|-|

## demo

```
const data = {
	name: 'andy',
	age: '18',
	sex: '女',
	phone: '138xxxxxxxx',
}
const columns = [
	{
		title: '姓名',
		dataIndex: 'name',
	}, {
		title: '年龄',
		dataIndex: 'age',
	}, {
		title: '性别',
		dataIndex: 'sex',
	}, {
		title: '电话',
		dataIndex: 'phone',
	},
];

<DescList dataSource={data} columns={columns} />
```