/*
* form.item 组件
* 默认使用 Input 组件
* API: {
*   form: 受控组件对象
*   formItemLayout: 表单排序样式
*   initialValue: 初始值
*   label: 名称
*   required: 是否为必填项
*   fieldName: 字段名
*   validatorCallback: 自定义校验规则
*   extraRules: 额外的校验对象，单个时"{}"，多个时"[{},{},...]"
*   selectAction: 是否为 select 组件，提示信息会不同
* }
* */

import React from 'react';
import { Form, Input } from 'antd';

function FormItem({ className, children, ...props }) {
  const { cols = [] } = props;
  const {
    formItemLayout = {
      labelCol: { sm: { span: cols[0] || 10 } },
      wrapperCol: { sm: { span: cols[1] || 14 } },
    },
    form,
    label = '',
    fieldName = '',
    initialValue = undefined,
    required = true,
    validatorCallback = () => {},
    readOnly = false,
    isChildren = false,
    extraRules = null,
    selectAction = false,
    inputProps = {},
    valuePropName = undefined, // 适用switch场景
  } = props;

  if (readOnly) {
    return (
      <Form.Item
        style={{ marginBottom: 0 }}
        className={className}
        {...formItemLayout}
        {...props}
        label={label}
      >
        {
          isChildren ? children : <span>{initialValue || ' -- '}</span>
        }
      </Form.Item>
    );
  }

  let rules = [{
    required,
    message: selectAction ? `请选择${label}` : `请填写${label}`,
  }, {
    validator: (rule, value, callback) => {
      validatorCallback(value, callback, rule);
      callback();
    },
  }];
  // 将 rules 对象进行合并
  if (extraRules) {
    rules = rules.concat(extraRules);
  }
  const configObj = {
    initialValue,
    rules,
  }
  if (valuePropName) {
    configObj.valuePropName = valuePropName;
  }
  return (
    <Form.Item
      className={className}
      {...formItemLayout}
      {...props}
    >
      {form.getFieldDecorator(fieldName, configObj)(
        children || <Input {...inputProps} />
      )}
    </Form.Item>
  );
}

export default FormItem;
