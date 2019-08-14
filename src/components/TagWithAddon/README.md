> 原 Tag 组件的二次封装，增加了前后文本的输入

## API

### TagWithAddon

> 支持原 Tag 组件的 API

|参数|说明|类型|默认值|
|:--|:--|:--|:--|
|addonBefore|标签的前置文本|string/ReactNode|-|
|addonAfter|标签的后置文本|string/ReactNode|-|

## demo

```
<TagWithAddon
  addonBefore="牛奶"
  color="blue"
>
  单一原料
</TagWithAddon>
```