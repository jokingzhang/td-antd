> 原 Select 基础上封装的组件，输入数据即可渲染

### API

> 支持原 Select 的 API，如 onChange、allowClear 等

|参数|说明|类型|默认值|
|:--|:--|:--|:--|
|data|渲染所需要的数据源|object / array|{ }|
|fields|当 data 为数组时，且数组成员为对象时，需要申明渲染字段|array[object]|[ ]|

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